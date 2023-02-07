package co.simplon.matchmydev.projects.entities;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
abstract class AbstractEntity {
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

	AbstractEntity() {
	}

	public Long getId() {
		return id;
	}

	@SuppressWarnings("unused")
	public void setId(Long id) { 
		//prevents from accidental assignment(set by db)
		this.id = id;
	}

    
}

