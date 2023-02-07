package co.simplon.matchmydev.projects.controllers;

import java.util.ArrayList;
import java.util.Collection;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import co.simplon.matchmydev.projects.database.DataBase;
import co.simplon.matchmydev.projects.dtos.ProjectCreateDto;
import co.simplon.matchmydev.projects.dtos.ProjectManagerView;
import co.simplon.matchmydev.projects.dtos.ProjectUpdateDto;
import co.simplon.matchmydev.projects.dtos.ProjectView;
import co.simplon.matchmydev.projects.entities.Project;
import co.simplon.matchmydev.projects.services.ProjectService;

@RestController
@RequestMapping("/projects")
public class ProjectsController {

    private final ProjectService projectService;

    public ProjectsController(ProjectService projectService) {
	this.projectService = projectService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void create(@RequestBody ProjectCreateDto inputs) {
	projectService.create(inputs);
    }

    @PatchMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void update(@RequestBody ProjectUpdateDto inputs,
	    @PathVariable("id") Long id) {
	System.out.println(inputs);

    }

    @GetMapping
    public Collection<ProjectView> getAll() {
	Collection<Project> projects = DataBase.findAll();

	Collection<ProjectView> views = new ArrayList<>();
	for (Project project : projects) {
	    ProjectView view = new ProjectView();
	    view.setId(project.getId());
	    view.setName(project.getName());
	    view.setCode(project.getCode());
	    view.setDescription(project.getDescription());
	    view.setStartDate(project.getStartDate());
	    view.setEndDate(project.getEndDate());
	    view.setProduction(project.isProduction());
	    views.add(view);
	    System.out.println(views);
	}

	return views;

    }

    @GetMapping("/manager-projects")
    public Collection<ProjectManagerView> getProjects() {
	Collection<Project> projects = DataBase.findAll();

	Collection<ProjectManagerView> views = new ArrayList<>();
	for (Project project : projects) {
	    ProjectManagerView view = new ProjectManagerView();
	    view.setId(project.getId());
	    view.setName(project.getName());
	    view.setDescription(project.getDescription());
	    view.setStartDate(project.getStartDate());
	    view.setProduction(project.isProduction());
	    views.add(view);
	    System.out.println(views);
	}

	return views;

    }

}
