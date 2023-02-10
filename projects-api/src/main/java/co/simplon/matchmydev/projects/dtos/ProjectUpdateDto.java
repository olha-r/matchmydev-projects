package co.simplon.matchmydev.projects.dtos;

import java.time.LocalDate;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class ProjectUpdateDto {

    @NotBlank
    private String id;
    
    @NotBlank
    @Size(min = 1, max = 150)
    private String name;

    @NotBlank
    @Size(min = 1, max = 20)
    private String code;

    @NotBlank
    @Size(min = 1, max = 1000)
    private String description;

    @NotNull
    private LocalDate startDate;

    private LocalDate endDate;

    @NotNull
    private boolean production;
    
    public String getId() {
   	return id;
    }

    public void setId(String id) {
   	this.id = id;
    }

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
