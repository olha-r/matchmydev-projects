package co.simplon.matchmydev.projects.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {

	registry.addMapping("/**").allowedOrigins("http://localhost:5173").allowedMethods("POST",
		"GET", "PATCH", "DELETE", "PUT");

    }
}
