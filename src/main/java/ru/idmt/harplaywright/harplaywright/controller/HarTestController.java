package ru.idmt.harplaywright.harplaywright.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import ru.idmt.harplaywright.harplaywright.model.SaveTestRequest;
import ru.idmt.harplaywright.harplaywright.service.GitService;
import ru.idmt.harplaywright.harplaywright.service.HarParserService;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Controller
public class HarTestController {

    private final Path runnerDir = Paths.get("playwright-runner").toAbsolutePath().normalize();

    @Autowired
    private HarParserService harParserService;

    @Autowired
    private GitService gitService;

    @GetMapping("/")
    public String index(Model model) {
        model.addAttribute("saveRequest", new SaveTestRequest());
        return "upload";
    }

    @PostMapping("/run-and-save")
    public String runAndSave(
            @RequestParam("harFile") MultipartFile harFile,
            @RequestParam("folderPath") String folderPath,
            @RequestParam("fileName") String fileName,
            Model model) {

        try {
            byte[] harContent = harFile.getBytes();

            // 1. Запускаем проверочный тест
            Path tempHar = Files.createTempFile(runnerDir, "upload_", ".har");
            Files.write(tempHar, harContent);
            String logs = harParserService.generateAndRunTestFromPath(tempHar.toFile());

            // 2. Проверяем, прошёл ли тест
            if (!logs.contains("1 passed")) {
                model.addAttribute("error", "❌ Тест не прошёл:\n" + logs);
                model.addAttribute("saveRequest", new SaveTestRequest() {{
                    setFolderPath(folderPath);
                    setFileName(fileName);
                }});
                return "upload";
            }

            // 3. Генерируем "чистый" тест для коммита
            Path tempHarUpload = Files.createTempFile("upload_", ".har");
            Files.write(tempHarUpload, harContent);
            String cleanTestCode = harParserService.generatePlaywrightTestToUpload(tempHarUpload.toFile());
            Files.deleteIfExists(tempHarUpload);

            // 4. Сохраняем в GitLab
            gitService.pushToGitLab(folderPath, fileName, cleanTestCode);

            model.addAttribute("message", "✅ Тест успешно сохранён в GitLab!");
            model.addAttribute("saveRequest", new SaveTestRequest());

        } catch (Exception e) {
            e.printStackTrace();
            model.addAttribute("error", "Ошибка: " + e.getMessage());
            model.addAttribute("saveRequest", new SaveTestRequest() {{
                setFolderPath(folderPath);
                setFileName(fileName);
            }});
        }
        return "upload";
    }
}
