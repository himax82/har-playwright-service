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
import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLSocketFactory;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;
import java.security.SecureRandom;
import java.security.cert.X509Certificate;
import java.security.NoSuchAlgorithmException;
import java.security.KeyManagementException;
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

        if (conn instanceof HttpsURLConnection httpsConn) {
            httpsConn.setSSLSocketFactory(trustAllSocketFactory());
            httpsConn.setHostnameVerifier((hostname, session) -> true);
        }
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

    private SSLSocketFactory trustAllSocketFactory() {
        try {
            TrustManager[] trustAll = new TrustManager[]{
                    new X509TrustManager() {
                        public void checkClientTrusted(X509Certificate[] c, String a) {}
                        public void checkServerTrusted(X509Certificate[] c, String a) {}
                        public X509Certificate[] getAcceptedIssuers() { return new X509Certificate[0]; }
                    }
            };
            SSLContext sc = SSLContext.getInstance("TLS");
            sc.init(null, trustAll, new SecureRandom());
            return sc.getSocketFactory();
        } catch (NoSuchAlgorithmException | KeyManagementException e) {
            throw new IllegalStateException("Не удалось настроить SSL-контекст", e);
        }
    }
}
