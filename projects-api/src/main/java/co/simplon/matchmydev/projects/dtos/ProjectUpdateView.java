package co.simplon.matchmydev.projects.dtos;

import java.time.LocalDate;

public interface ProjectUpdateView {
    
    Long getId();
    
    String getName();
    
    String getCode();
    
    String getDescription();
    
    LocalDate getStartDate();
    
    LocalDate getEndDate();
    
    boolean getProduction();
    
}
