package com.example.demo.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;
import java.util.concurrent.ThreadLocalRandom;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.service.MoneProducer;
@CrossOrigin(origins = "http://127.0.0.1:5500/")
@RestController
public class KafkaController {
		
	@Autowired
	MoneProducer producer;
	
	private String vin;
	//Generate Random VIN Number
	public String generateVin() {       
		 StringBuilder sb = new StringBuilder(10);
         String AlphaNumericString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "0123456789";
        
        for (int j = 0; j < 11; j++) {
               int index = (int)(AlphaNumericString.length() * Math.random());
               sb.append(AlphaNumericString.charAt(index));
           }
           Random rnd = new Random();
           int number = rnd.nextInt(999999);
           String covertednumber = String.format("%06d", number);
           String vin = sb+covertednumber;
		return vin;
	}
	//Add Delay to Generate VIN Number
	public void addDelay(Integer delay) {
		long sleepTime = delay*1000;        //Delay starts
		try {
			Thread.sleep(sleepTime);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}                                        //Delay ends
		
	}
	
	//Generate Random Speed
	public String generateSpeed() {
		int randomSpeed = ThreadLocalRandom.current().nextInt(0, 150 + 1);
        return String.format("%03d", randomSpeed);
		
	}
	
	//Generate TimeStamp
	public String generateTimestamp() {
		SimpleDateFormat date = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss:SSS");
        String timeStamp = date.format(new Date());
		return timeStamp;
		
	}
	
	
	//Request Come from Front End and Hit this API 
	@PostMapping("/data")
	public String genereateVins(@RequestBody UserDetailsRequestData requestdetails ) {
		Integer vinCount = requestdetails.getVinCount();
		Integer delay = requestdetails.getDelay();
        String same_Vin = requestdetails.getDifferent();
		System.out.println(vinCount);
		System.out.println(delay);
		System.out.println(same_Vin);
		
		
		switch(same_Vin) { 
		case "Y":                                   //For SAME VIN NUMBER
		    vin = generateVin();             //Generate VIN Number
			for(int i = 0;i<vinCount;i++) {
				 addDelay(delay);
				 String sSpeed = generateSpeed();
	             String vinAndSpeedAndTime = vin+sSpeed+generateTimestamp();
	             producer.publicToTopic(vinAndSpeedAndTime);
	             System.out.println(vinAndSpeedAndTime);
			}
			return "DATA GENERATED";

		case "N":
			for(int i = 0;i<vinCount;i++)
			{
				//Delay starts
				 vin = generateVin();
				 addDelay(delay);
	             String sSpeed = generateSpeed();
	             String vinAndSpeedAndTime = vin+sSpeed+ generateTimestamp();
	             System.out.println(vinAndSpeedAndTime);
	             producer.publicToTopic(vinAndSpeedAndTime);
			}
			
			return "DATA GENERATED";
	}
		
		return "DATA GENERATED";
	}
	
}
