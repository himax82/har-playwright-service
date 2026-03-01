package ru.idmt.harplaywright.harplaywright.model;

public class TestStep {
    private String url;
    private String path;
    private String generatedCode;
    private String editedCode;
    private boolean selected;

    // Конструктор, геттеры, сеттеры
    public TestStep(String url, String path, String code) {
        this.url = url;
        this.path = path;
        this.generatedCode = code;
        this.editedCode = code;
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

    public String getGeneratedCode() {
        return generatedCode;
    }

    public void setGeneratedCode(String generatedCode) {
        this.generatedCode = generatedCode;
    }

    public String getEditedCode() {
        return editedCode;
    }

    public void setEditedCode(String editedCode) {
        this.editedCode = editedCode;
    }

    public boolean isSelected() {
        return selected;
    }

    public void setSelected(boolean selected) {
        this.selected = selected;
    }
}
