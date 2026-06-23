package ru.idmt.harplaywright.harplaywright.handler;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import ru.idmt.harplaywright.harplaywright.exception.GitLabApiException;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GitLabExceptionHandler {

    @ExceptionHandler(GitLabApiException.class)
    public ResponseEntity<Map<String, Object>> handle(GitLabApiException ex) {
        Map<String, Object> body = new HashMap<>();
        body.put("error", "GitLab push failed");
        body.put("gitlabStatus", ex.getGitlabStatus());
        body.put("gitlabBody", ex.getGitlabBody());
        return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body(body);
    }
}
