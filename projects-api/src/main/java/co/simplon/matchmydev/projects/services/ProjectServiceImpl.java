package co.simplon.matchmydev.projects.services;

import org.springframework.stereotype.Service;

import co.simplon.matchmydev.projects.dtos.ProjectCreateDto;
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

}
