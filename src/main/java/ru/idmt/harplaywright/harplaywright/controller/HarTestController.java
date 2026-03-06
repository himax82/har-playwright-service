package ru.idmt.harplaywright.harplaywright.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import ru.idmt.harplaywright.harplaywright.model.HarEntrySummary;
import ru.idmt.harplaywright.harplaywright.model.SaveTestRequest;
import ru.idmt.harplaywright.harplaywright.model.TestStep;
import ru.idmt.harplaywright.harplaywright.service.GitService;
import ru.idmt.harplaywright.harplaywright.service.HarParserService;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Controller
public class HarTestController {

    @Autowired
    private HarParserService harParserService;

    @Autowired
    private GitService gitService;

    @GetMapping("/")
    public String index(Model model) {
        model.addAttribute("saveRequest", new SaveTestRequest());
        return "upload";
    }

    @PostMapping("/clear")
    @ResponseBody
    public void clearState() {
        harParserService.clearState();
    }

    @PostMapping("/parse-har-steps")
    @ResponseBody
    public List<TestStep> parseHar(@RequestParam("harFile") MultipartFile harFile) throws IOException {
        byte[] content = harFile.getBytes();
        Path tempHar = Files.createTempFile("parse_", ".har");
        Files.write(tempHar, content);

        List<HarEntrySummary> entries = new ArrayList<>();
        harParserService.parseHarStreaming(tempHar.toFile(), entries::add);
        Files.deleteIfExists(tempHar);

        return entries.stream()
                .filter(e -> e.getRequestJson() != null)
                .map(entry -> {
                    StringBuilder code = new StringBuilder();
                    harParserService.writeTestForPreview(
                            entry.getUrl(),
                            entry.getRequestJson(),
                            entry.getResponseJson(),
                            code
                    );
                    String path = harParserService.getUrlPath(entry.getUrl());
                    return new TestStep(entry.getUrl(), path, code.toString());
                })
                .collect(Collectors.toList());
    }

    @PostMapping("/run-selected-steps")
    @ResponseBody
    public Map<String, Object> runSelectedSteps(@RequestBody List<TestStep> steps) {
        try {
            String logs = harParserService.assembleAndRunTest(steps);
            boolean success = logs.contains("1 passed") && !logs.contains("Error:") && !logs.contains("timeout");
            return Map.of("success", success, "logs", logs);
        } catch (Exception e) {
            return Map.of("success", false, "logs", "Ошибка: " + e.getMessage());
        }
    }

    @PostMapping("/save-to-git")
    @ResponseBody
    public void saveToGit(@RequestBody Map<String, String> payload) throws IOException {
        gitService.pushToGitLab(
                payload.get("folderPath"),
                payload.get("fileName"),
                payload.get("testCode"),
                payload.get("email"),
                payload.get("fio")
                );
    }
}
