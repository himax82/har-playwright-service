package ru.idmt.harplaywright.harplaywright.exception;

public class GitLabApiException extends RuntimeException {
    private final int gitlabStatus;
    private final String gitlabBody;

    public GitLabApiException(int gitlabStatus, String gitlabBody) {
        super("GitLab API error (" + gitlabStatus + "): " + gitlabBody);
        this.gitlabStatus = gitlabStatus;
        this.gitlabBody = gitlabBody;
    }

    public int getGitlabStatus() { return gitlabStatus; }
    public String getGitlabBody() { return gitlabBody; }
}
