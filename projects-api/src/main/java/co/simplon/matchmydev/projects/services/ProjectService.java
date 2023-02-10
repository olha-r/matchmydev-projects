package co.simplon.matchmydev.projects.services;


import co.simplon.matchmydev.projects.dtos.ProjectCreateDto;
import co.simplon.matchmydev.projects.dtos.ProjectUpdateDto;
import co.simplon.matchmydev.projects.dtos.ProjectUpdateView;

public interface ProjectService {

    void create(ProjectCreateDto inputs);
    
	void updateProjectById(Long id, ProjectUpdateDto inputs);

	ProjectUpdateView findProjectById(Long id);
    

}


