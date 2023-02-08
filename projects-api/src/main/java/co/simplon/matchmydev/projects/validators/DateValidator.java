package co.simplon.matchmydev.projects.validators;


import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import co.simplon.matchmydev.projects.dtos.ProjectCreateDto;

public class DateValidator implements ConstraintValidator<DateConstraint, ProjectCreateDto> {
	
	public DateValidator() {
	}

	@Override
	public boolean isValid(ProjectCreateDto inputs, ConstraintValidatorContext context) {
        return inputs.getStartDate().isBefore(inputs.getEndDate());

	}
}


