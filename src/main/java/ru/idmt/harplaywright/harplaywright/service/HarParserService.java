package ru.idmt.harplaywright.harplaywright.service;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonToken;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.commons.lang3.text.StrSubstitutor;
import org.apache.commons.text.StringSubstitutor;
import org.springframework.stereotype.Service;
import ru.idmt.harplaywright.harplaywright.model.HarEntrySummary;

import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;

@Service
public class HarParserService {

    private static final ObjectMapper MAPPER = new ObjectMapper();
    private Map<String, Integer> NAME_METHOD = new HashMap<>();
    private Map<String, String> VALUE_ID = new HashMap<>();
    private Map<String, String> METHOD_NAME_CONST = new HashMap<>();
    private final Path runnerDir = Paths.get("playwright-runner").toAbsolutePath().normalize();


    public String generateAndRunTestFromPath(File harFile) throws Exception {
        if (!Files.exists(runnerDir)) {
            throw new IllegalStateException("playwright-runner не найден: " + runnerDir);
        }

        try {
            String testCode = generatePlaywrightTestForCheck(harFile);
            Path testFile = Files.createTempFile(runnerDir, "test_", ".spec.ts");
            try {
                Files.writeString(testFile, testCode);

                ProcessBuilder pb = new ProcessBuilder(
                        "node", "node_modules/.bin/playwright", "test", testFile.getFileName().toString()
                );
                pb.redirectErrorStream(true);
                pb.directory(new File(System.getProperty("user.dir")));
                System.out.println("Запуск теста: " + testFile.toAbsolutePath());
                System.out.println("Содержимое теста:\n" + testCode);
                Process process = pb.start();
                String logs = new String(process.getInputStream().readAllBytes(), StandardCharsets.UTF_8);
                process.waitFor();

                return logs;
            } finally {
                Files.deleteIfExists(testFile);
            }
        } finally {
            Files.deleteIfExists(harFile.toPath());
        }
    }

    public String generatePlaywrightTestToUpload(File harFile) throws IOException {
        List<HarEntrySummary> results = new ArrayList<>();
        try {
            parseHarStreaming(harFile, results::add);
            StringBuilder sb = new StringBuilder();
            sb.append("import { test, expect } from '@fixture/restApiContext'\n")
                    .append("import process from 'process'\n")
                    .append("test('Проверка ошибки', async ({ apiRequest }) => {\n");
            for (HarEntrySummary entry : results) {
                if (entry.getRequestJson() != null) {
                    writeTest(entry.getUrl(), entry.getRequestJson(), entry.getResponseJson(), sb, true);
                }
            }
            sb.append("})");
            return sb.toString();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public String generatePlaywrightTestForCheck(File harFile) throws IOException {
        List<HarEntrySummary> results = new ArrayList<>();
        parseHarStreaming(harFile, results::add);

        StringBuilder sb = new StringBuilder();
        sb.append("import { test as base, expect } from '@playwright/test';\n")
                .append("\n")
                .append("const test = base.extend({\n")
                .append("  request: [\n")
                .append("    async ({}, use) => {\n")
                .append("      const request = await base.request.newContext({\n")
                .append("        ignoreHTTPSErrors: true,\n")
                .append("        baseURL: '").append(getBaseUrlFromFirstUrl(results.iterator().next().getUrl())).append("'\n")
                .append("      });\n")
                .append("      await use(request);\n")
                .append("      await request.dispose();\n")
                .append("    },\n")
                .append("    { scope: 'test' }\n")
                .append("  ],\n")
                .append("});\n\n")
                .append("test('Сгенерированный тест из HAR', async ({ request }) => {\n");
        Map<String, String> urlPWMap = new LinkedHashMap<>();

        for (HarEntrySummary entry : results) {
            if (entry.getRequestJson() != null) {
                StringBuilder partSb = new StringBuilder();
                writeTest(entry.getUrl(), entry.getRequestJson(), entry.getResponseJson(), partSb, false);
                String path = getUrlPath(entry.getUrl());
                urlPWMap.put(path, partSb.toString());
            }
        }

        sb.append("});\n");
        StringSubstitutor substitutor = new StringSubstitutor(METHOD_NAME_CONST);
        return substitutor.replace(sb.toString());
    }

    private String getBaseUrlFromFirstUrl(String fullUrl) {
        if (fullUrl == null) return "https://192.168.42.201";
        try {
            java.net.URI uri = new java.net.URI(fullUrl);
            return uri.getScheme() + "://" + uri.getHost() +
                    (uri.getPort() != -1 ? ":" + uri.getPort() : "");
        } catch (Exception e) {
            return "https://192.168.42.201";
        }
    }

    private void writeTest(String url, Object objRequest, Object objResponse, StringBuilder builder, boolean isUpload) {
        String name = null;
        if (isUrlContainId((url))) {
            String path = getUrlWithId(url);
            name = getNameResponse(getUrlPath(url));
            builder.append("const ").append(name).append(" = ")
                    .append(path).append("\n");
        }
        builder.append("const ");
        String path = getUrlPath(url);
        String methoName = getNameResponse(path);
        builder.append(methoName);
        if (isUpload) {
            builder.append(" = await apiRequest.post(");
        } else {
            builder.append(" = await request.post(");
        }
        if (name == null) {
            builder.append("'").append(path).append("', {\n");
        } else {
            builder.append(name).append(", {\n");
        }
        builder.append("data: ");
        printRequest(objRequest, builder, false);
        builder.append("})\n")
                .append("await expect(").append(methoName).append(", 'Успешный запрос').toBeOK()\n");

        if (objResponse != null) {
            builder.append("${").append(methoName).append("Json}");
            responseHandler(objResponse, new StringBuilder(methoName + "Json"));
        }
    }

    public void printRequest(Object obj, StringBuilder builder, boolean isSet) {
        if (obj == null) {
            builder.append("null,\n");
            return;
        }
        if (obj instanceof Map) {
            builder.append("{\n");
            @SuppressWarnings("unchecked")
            Map<String, Object> map = (Map<String, Object>) obj;
            int count = 1;
            int length = map.size();
            for (Map.Entry<String, Object> entry : map.entrySet()) {
                if (entry.getKey().contains(".")) {
                    builder.append("'").append(entry.getKey()).append("'");
                } else {
                    builder.append(entry.getKey());
                }
                builder.append(": ");
                printRequest(entry.getValue(), builder, count != length);
                count++;
            }
            builder.append("}");
            setZ(builder, isSet);
        } else if (obj instanceof List) {
            builder.append("[\n");
            @SuppressWarnings("unchecked")
            List<Object> list = (List<Object>) obj;
            int count = 1;
            int length = list.size();
            for (Object item : list) {
                printRequest(item, builder, count != length);
                count++;
            }
            builder.append("]");
            setZ(builder, isSet);
        } else {
            if (obj instanceof String) {
                String value = (String) obj;
                if (isNeedGetId(value) && VALUE_ID.get(value) != null) {
                    builder.append(VALUE_ID.get(value));
                    takeBeforeDotOrBracket(VALUE_ID.get(value));
                    setZ(builder, isSet);
                    return;
                } else {
                    builder.append("'").append(value).append("'");
                    setZ(builder, isSet);
                    return;
                }
            }
            builder.append(obj);
            setZ(builder, isSet);
        }
    }

    public void takeBeforeDotOrBracket(String input) {
        if (input == null) return;

        int dotIndex = input.indexOf('.');
        int bracketIndex = input.indexOf('[');

        int index = input.length();

        if (dotIndex != -1) index = dotIndex;
        if (bracketIndex != -1) index = Math.min(index, bracketIndex);
        String methodName = input.substring(0, index);
        if (!METHOD_NAME_CONST.containsKey(methodName)) {
            String constantMethod = "const " + methodName + " = await "
                    + methodName.replace("Json", ".json()\n") + "\n";
            METHOD_NAME_CONST.put(methodName + "Json", constantMethod);
        }
    }

    private void setZ (StringBuilder builder, boolean isSet) {
        if (isSet) {
            builder.append(",\n");
        } else {
            builder.append("\n");
        }
    }

    public void responseHandler(Object obj, StringBuilder builder) {
        if (obj instanceof Map) {
            @SuppressWarnings("unchecked")
            Map<String, Object> map = (Map<String, Object>) obj;
            for (Map.Entry<String, Object> entry : map.entrySet()) {
                StringBuilder builderMap = new StringBuilder(builder);
                builderMap.append(".").append(entry.getKey());
                responseHandler(entry.getValue(), builderMap);
            }
        } else if (obj instanceof List) {
            @SuppressWarnings("unchecked")
            List<Object> list = (List<Object>) obj;
            int count = 0;
            for (Object item : list) {
                StringBuilder builderList = new StringBuilder(builder);
                builderList.append("[").append(count).append("]");
                responseHandler(item, builderList);
                count++;
            }
        } else {
            if (obj instanceof String) {
                String value = (String) obj;
                if (isNeedGetId(value) && VALUE_ID.get(value) == null) {
                    VALUE_ID.put(value, builder.toString());
                }
            }
        }
    }

    private boolean isNeedGetId(String value) {
        return value.length() == 16 || value.length() == 36 || value.startsWith("file");
    }

    private String getUrlPath(String url) {
        String[] parts = url.split("/", 4);
        return parts.length > 3 ? "/" + parts[3] : "/";
    }

    private String getNameResponse(String path) {
        String[] ar = path.split("/");
        StringBuilder result = new StringBuilder();
        for (int i = 1; i < ar.length; i++) {
            if (i == ar.length - 1) {
                if (ar[i].contains("?")) {
                    result.append(ar[i], 0, ar[i].indexOf("?"));
                } else {
                    result.append(ar[i]);
                }
            } else {
                result.append(ar[i]).append("_");
            }
        }
        result.append("_response");
        if (NAME_METHOD.get(result.toString()) == null) {
            NAME_METHOD.put(result.toString(), 2);
            return result.append("_1").toString();
        } else {
            Integer count = NAME_METHOD.get(result.toString());
            int newCount = count + 1;
            NAME_METHOD.put(result.toString(), newCount);
            return result.append("_").append(count).toString();
        }
    }


    public void parseHarStreaming(File harFile, Consumer<HarEntrySummary> consumer) throws IOException {
        try (JsonParser jp = MAPPER.createParser(harFile)) {
            if (jp.nextToken() != JsonToken.START_OBJECT) throw new IOException("Ожидался объект");
            while (jp.nextToken() != JsonToken.END_OBJECT) {
                if ("log".equals(jp.getCurrentName())) {
                    jp.nextToken();
                    parseLog(jp, consumer);
                    return;
                } else {
                    jp.skipChildren();
                }
            }
            throw new IOException("Поле 'log' не найдено");
        }
    }

    private void parseLog(JsonParser jp, Consumer<HarEntrySummary> consumer) throws IOException {
        if (jp.getCurrentToken() != JsonToken.START_OBJECT) throw new IOException("'log' должен быть объектом");
        while (jp.nextToken() != JsonToken.END_OBJECT) {
            if ("entries".equals(jp.getCurrentName())) {
                jp.nextToken();
                parseEntries(jp, consumer);
                return;
            } else {
                jp.skipChildren();
            }
        }
        throw new IOException("Поле 'entries' не найдено");
    }

    private void parseEntries(JsonParser jp, Consumer<HarEntrySummary> consumer) throws IOException {
        if (jp.getCurrentToken() != JsonToken.START_ARRAY) throw new IOException("'entries' должен быть массивом");
        while (jp.nextToken() != JsonToken.END_ARRAY) {
            if (jp.getCurrentToken() == JsonToken.START_OBJECT) {
                JsonNode entry = jp.readValueAsTree();
                String url = entry.path("request").path("url").asText(null);
                int status = entry.path("response").path("status").asInt(-1);
                if (status != 200) continue;

                Object reqJson = extractJsonFromBody(entry.path("request").path("postData").path("text"));
                Object respJson = extractJsonFromBody(entry.path("response").path("content").path("text"));
                consumer.accept(new HarEntrySummary(url, status, reqJson, respJson));
            }
        }
    }

    private Object extractJsonFromBody(JsonNode textNode) {
        if (textNode == null || textNode.isMissingNode() || textNode.isNull()) return null;
        String body = textNode.asText();
        if (body == null || body.trim().isEmpty()) return null;
        try {
            String trimmed = body.trim();
            if (trimmed.startsWith("{")) return MAPPER.readValue(body, Map.class);
            if (trimmed.startsWith("[")) return MAPPER.readValue(body, List.class);
        } catch (Exception ignored) {
        }
        return null;
    }

    private String getUrlWithId(String url) {
        String[] ar = url.split("/");
        StringBuilder result = new StringBuilder("'/");
        for (int i = 3; i < ar.length; i++) {
            if (ar[i].length() == 16 && ar[i].startsWith("0")){
                result.append("' + ").append(VALUE_ID.get(ar[i])).append(" + '");
            } else {
                result.append(ar[i]);
            }
            if (i != ar.length - 1) {
                result.append("/");
            } else {
                result.append("'");
            }
        }
        return result.toString();
    }

    private boolean isUrlContainId(String url) {
        String[] ar = url.split("/");
        for (int i = 3; i < ar.length; i++) {
            if (ar[i].length() == 16 && ar[i].startsWith("0")){
                return true;
            }
        }
        return false;
    }

    @FunctionalInterface
    public interface Consumer<T> {
        void accept(T t);
    }
}
