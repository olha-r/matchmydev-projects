package co.simplon.matchmydev.projects.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import co.simplon.matchmydev.projects.entities.Project;

public interface ProjectRepository extends JpaRepository<Project, Long> {

}
