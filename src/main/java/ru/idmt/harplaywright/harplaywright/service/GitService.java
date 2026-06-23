package ru.idmt.harplaywright.harplaywright.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import ru.idmt.harplaywright.harplaywright.exception.GitLabApiException;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;

@Service
public class GitService {

    @Value("${gitlab.token}")
    private String gitlabToken;

    @Value("${gitlab.project-id}")
    private String projectId;

    @Autowired
    private HarParserService service;

    public void pushToGitLab(String folderPath, String fileName, String fileContent, String email, String fio) throws IOException {
        if (folderPath.startsWith("/")) {
            folderPath = folderPath.substring(1);
        }
        String filePath = folderPath + "/" + fileName;
        if (filePath.startsWith("/")) {
            filePath = filePath.substring(1);
        }

        String url = "https://gitlab.id-mt.ru/api/v4/projects/" + projectId + "/repository/files/" +
                URLEncoder.encode(filePath, StandardCharsets.UTF_8);

        StringBuilder sb = new StringBuilder();
        sb.append("import { test, expect } from '@fixture/restApiContext'\n")
                .append("import process from 'process'\n")
                .append("test('Проверка ошибки', async ({ apiRequest }) => {\n")
                .append(fileContent).append("\n")
                .append("})");
        String code = service.replaceMarker(sb.toString());
        code = code.replaceAll("request.post", "apiRequest.post");

        Map<String, Object> payload = new HashMap<>();
        payload.put("branch", "devel");
        payload.put("content", code);
        payload.put("commit_message", "feat: add auto-generated test from HAR");
        payload.put("author_email", email);
        payload.put("author_name", fio);

        String jsonPayload = new ObjectMapper().writeValueAsString(payload);

        HttpURLConnection conn = (HttpURLConnection) new URL(url).openConnection();
        conn.setRequestMethod("POST");
        conn.setRequestProperty("PRIVATE-TOKEN", gitlabToken);
        conn.setRequestProperty("Content-Type", "application/json");
        conn.setDoOutput(true);

        try (OutputStream os = conn.getOutputStream()) {
            os.write(jsonPayload.getBytes(StandardCharsets.UTF_8));
        }

        int status = conn.getResponseCode();
        if (status < 200 || status >= 300) {
            InputStream es = conn.getErrorStream();
            String error = es != null
                    ? new String(es.readAllBytes(), StandardCharsets.UTF_8)
                    : "(no error body)";
            throw new GitLabApiException(status, error);
        }
    }
}
