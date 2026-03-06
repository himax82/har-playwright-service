package ru.idmt.harplaywright.harplaywright.model;

public class TestStep {
    private String url;
    private String path;
    private String testCode;
    private boolean selected;

    // Конструктор, геттеры, сеттеры
    public TestStep(String url, String path, String code) {
        this.url = url;
        this.path = path;
        this.testCode = code;
        this.selected = false;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public String getTestCode() {
        return testCode;
    }

    public void setTestCode(String generatedCode) {
        this.testCode = generatedCode;
    }

    public boolean isSelected() {
        return selected;
    }

    public void setSelected(boolean selected) {
        this.selected = selected;
    }
}
