package co.simplon.matchmydev.projects.validators;

import java.time.LocalDate;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import co.simplon.matchmydev.projects.dtos.ProjectCreateDto;

public class DateValidator
	implements ConstraintValidator<DateConstraint, ProjectCreateDto> {

    public DateValidator() {
    }

    @Override
    public boolean isValid(ProjectCreateDto inputs,
	    ConstraintValidatorContext context) {
	LocalDate start = inputs.getStartDate();
	LocalDate end = inputs.getEndDate();
	if ((start != null) && (end != null)) {
	    return start.isBefore(end);
	}
	return true;

    }
}
