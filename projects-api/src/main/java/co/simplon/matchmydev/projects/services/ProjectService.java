package co.simplon.matchmydev.projects.services;

import co.simplon.matchmydev.projects.dtos.ProjectCreateDto;
import co.simplon.matchmydev.projects.dtos.ProjectUpdateDto;

public interface ProjectService {

    void create(ProjectCreateDto inputs);
    
    void updateProjectById(Long id, ProjectUpdateDto inputs);
}
