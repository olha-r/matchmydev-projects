package co.simplon.matchmydev.projects.dtos;

import java.time.LocalDate;

public class ProjectCreateDto {

    private String name;
    private String code;
    private String description;
    private LocalDate startDate;
    private LocalDate endDate;
    private boolean production;

    public String getName() {
	return name;
    }

    public void setName(String name) {
	this.name = name;
    }

    public String getCode() {
	return code;
    }

    public void setCode(String code) {
	this.code = code;
    }

    public String getDescription() {
	return description;
    }

    public void setDescription(String description) {
	this.description = description;
    }

    public LocalDate getStartDate() {
	return startDate;
    }

    public void setStartDate(LocalDate startDate) {
	this.startDate = startDate;
    }

    public LocalDate getEndDate() {
	return endDate;
    }

    public void setEndDate(LocalDate endDate) {
	this.endDate = endDate;
    }

    public boolean isProduction() {
	return production;
    }

    public void setProduction(boolean production) {
	this.production = production;
    }

    @Override
    public String toString() {
	return "Project [name=" + name + ", code=" + code + ", description="
		+ description + ", startDate=" + startDate + ", endDate="
		+ endDate + ", production=" + production + "]";
    }

}
