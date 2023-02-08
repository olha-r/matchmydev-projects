package co.simplon.matchmydev.projects.validators;

import static java.lang.annotation.RetentionPolicy.RUNTIME;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;
import javax.validation.Constraint;
import javax.validation.Payload;

@Constraint (validatedBy = DateValidator.class)
@Retention(RUNTIME)
@Target(ElementType.TYPE)
public @interface DateConstraint {
	
    String message() default "End date must be after start date and less than or equal today.";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};

}
