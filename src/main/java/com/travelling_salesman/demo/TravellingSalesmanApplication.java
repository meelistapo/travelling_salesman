package com.travelling_salesman.demo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class TravellingSalesmanApplication {

	private static final Logger log = LoggerFactory.getLogger(TravellingSalesmanApplication.class);

	@Autowired
	private LocationRepository locationRepository;

	public static void main(String[] args) {
		SpringApplication.run(TravellingSalesmanApplication.class, args);
	}


	@Bean
	CommandLineRunner init() {
		return (args) ->{
			locationRepository.save(new Location("Tallinn",59.26,24.45));
			locationRepository.save(new Location("Tartu",58.23,26.43));
			locationRepository.save(new Location("Narva",48.23,16.43));

			log.info("------------------------------------------------");
			log.info("Initiating database");
			for (Location location : locationRepository.findAll()) {
				log.info("Added - " + location.toString());
			}
			log.info("------------------------------------------------");

		};
	}



}
