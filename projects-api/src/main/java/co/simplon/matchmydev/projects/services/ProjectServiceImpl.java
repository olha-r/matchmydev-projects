package co.simplon.matchmydev.projects.services;

import org.springframework.stereotype.Service;

import co.simplon.matchmydev.projects.dtos.ProjectCreateDto;
import co.simplon.matchmydev.projects.dtos.ProjectUpdateDto;
import co.simplon.matchmydev.projects.dtos.ProjectUpdateView;
import co.simplon.matchmydev.projects.entities.Project;
import co.simplon.matchmydev.projects.repositories.ProjectRepository;

@Service
public class ProjectServiceImpl implements ProjectService {

    private final ProjectRepository projectRepo;

    public ProjectServiceImpl(ProjectRepository projectRepo) {
	this.projectRepo = projectRepo;
    }

    @Override
    public void create(ProjectCreateDto inputs) {
	Project project = new Project();
	project.setName(inputs.getName());
	project.setCode(inputs.getCode());
	project.setDescription(inputs.getDescription());
	project.setStartDate(inputs.getStartDate());
	project.setEndDate(inputs.getEndDate());
	project.setProduction(inputs.isProduction());

	this.projectRepo.save(project);
    }
    
    @Override
    public void updateProjectById(Long id, ProjectUpdateDto inputs) {
	Project project = projectRepo.findById(id).get();
	project.setName(inputs.getName());
	project.setCode(inputs.getCode());
	project.setDescription(inputs.getDescription());
	project.setStartDate(inputs.getStartDate());
	project.setEndDate(inputs.getEndDate());
	project.setProduction(inputs.isProduction());

	this.projectRepo.save(project);
	
    }
    
    @Override
    public ProjectUpdateView findProjectById(Long id) {
	return projectRepo.findProjectedById(id).get();
    }

}
