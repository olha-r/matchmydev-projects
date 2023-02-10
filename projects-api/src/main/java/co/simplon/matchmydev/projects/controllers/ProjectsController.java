package co.simplon.matchmydev.projects.controllers;


import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import co.simplon.matchmydev.projects.dtos.ProjectCreateDto;
import co.simplon.matchmydev.projects.dtos.ProjectUpdateDto;
import co.simplon.matchmydev.projects.dtos.ProjectUpdateView;
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
    public void create(@RequestBody @Valid ProjectCreateDto inputs) {
	projectService.create(inputs);
    }
    
    
    @GetMapping("/{id}")
    public ProjectUpdateView getProjectById(
	    @PathVariable("id") Long id) {
	return projectService.findProjectById(id);
    }

    @PutMapping("/{id}")
    public void projectUpdate(@PathVariable("id") Long id,
	    @RequestBody ProjectUpdateDto project) {
	projectService.updateProjectById(id, project);
    }

    

}
