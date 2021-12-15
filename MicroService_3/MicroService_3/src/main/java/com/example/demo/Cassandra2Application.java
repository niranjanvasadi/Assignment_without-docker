package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.kafka.annotation.EnableKafka;

@SpringBootApplication
@EnableKafka
public class Cassandra2Application {

	public static void main(String[] args) {
		SpringApplication.run(Cassandra2Application.class, args);
	}

}
