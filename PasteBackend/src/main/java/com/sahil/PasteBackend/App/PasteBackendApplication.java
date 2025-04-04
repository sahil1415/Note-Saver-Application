package com.sahil.PasteBackend.App;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@ComponentScan("com.sahil.PasteBackend")
@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.sahil.PasteBackend.Repository")
@EntityScan("com.sahil.PasteBackend.Model")
public class PasteBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(PasteBackendApplication.class, args);
	}

}
