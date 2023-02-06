package co.simplon.matchmydev.projects.services;

import javax.validation.Valid;

import co.simplon.matchmydev.projects.dtos.ProjectCreateDto;

public interface ProjectService {

    void testCreate(@Valid ProjectCreateDto inputs);
}
