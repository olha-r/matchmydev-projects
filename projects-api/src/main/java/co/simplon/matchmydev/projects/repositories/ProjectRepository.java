package co.simplon.matchmydev.projects.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import co.simplon.matchmydev.projects.dtos.ProjectUpdateView;
import co.simplon.matchmydev.projects.entities.Project;

public interface ProjectRepository extends JpaRepository<Project, Long> {

   Optional<ProjectUpdateView> findProjectedById(Long id);

}
