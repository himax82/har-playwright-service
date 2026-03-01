package ru.idmt.harplaywright.harplaywright.model;

public class SaveTestRequest {

    private String folderPath; // например: "tests/sedo/FSK/API"
    private String fileName;

    public String getFolderPath() {
        return folderPath;
    }

    public void setFolderPath(String folderPath) {
        this.folderPath = folderPath;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }
}
