package co.simplon.matchmydev.projects.dtos;

import java.time.LocalDate;

import javax.validation.constraints.FutureOrPresent;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class ProjectCreateDto {

    @NotEmpty
    @Size(min = 1, max = 150)
    private String name;

    @NotEmpty
    @Size(min = 1, max = 20)
    private String code;

    @NotEmpty
    @Size(min = 1, max = 1000)
    private String description;

    @NotNull
    private LocalDate startDate;

    @FutureOrPresent
    private LocalDate endDate;

    @NotNull
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
