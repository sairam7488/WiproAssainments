package com.example.CourseZipkinService;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CourseZipkinServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(CourseZipkinServiceApplication.class, args);
	}
		@Bean
	    public RestTemplate restTemplate() {
	        return new RestTemplate();
	}

}
