package ru.idmt.harplaywright.harplaywright.model;

public class HarEntrySummary {
    private String url;
    private int status;
    private Object requestJson;
    private Object responseJson;

    public HarEntrySummary(String url, int status, Object requestJson, Object responseJson) {
        this.url = url;
        this.status = status;
        this.requestJson = requestJson;
        this.responseJson = responseJson;
    }

    // Геттеры
    public String getUrl() { return url; }
    public int getStatus() { return status; }
    public Object getRequestJson() { return requestJson; }
    public Object getResponseJson() { return responseJson; }
}