package co.simplon.matchmydev.projects.dtos;

import java.time.LocalDate;

public class ProjectManagerView {
    private Long id;
    private String name;
    private String description;
    private LocalDate startDate;
    private boolean production;
    
    public ProjectManagerView() {
	super();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public boolean isProduction() {
        return production;
    }

    public void setProduction(boolean production) {
        this.production = production;
    }

    @Override
    public String toString() {
	return "ProjectManagerView [id=" + id + ", name=" + name
		+ ", description=" + description + ", startDate=" + startDate
		+ ", production=" + production + "]";
    }

   
    
    
    

}
