package co.simplon.matchmydev.projects.database;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import co.simplon.matchmydev.projects.entities.Project;

public class DataBase {

    private static Long projectId = 0L; // declar un champ pour creer et
					// incrementer un id

    // k = type of key (Long)
    // v = type of value (Profile)
    // new HashMap = on a instancié ..

    private static final Map<Long, Project> PROJECTS = new HashMap<>();

    public static void saveProject(Project project) {
	projectId++; // incrementer mon champ id
	project.setId(projectId);
	PROJECTS.put(projectId, project); // put key, value

    }

    public static Collection<Project> findAll() {
	return PROJECTS.values();
    }
}
