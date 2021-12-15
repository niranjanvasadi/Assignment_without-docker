package com.example.M2.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.M2.service.Producer;

@RestController
@CrossOrigin(value="http://127.0.0.1:5500/")
public class kafkaController {
	
	@Autowired
	Producer producer;
	
	//This Method will take data from Front END or API
	@PostMapping("/vin")
	public String createUser(@RequestBody UserDetailsRequestModel requestdetails)
	{
		String vin = requestdetails.getVin();
		String speed = requestdetails.getSpeed();
		String timeStamp = requestdetails.getTime();
		
	    int sp = Integer.parseInt(speed);
	    boolean isvinaalphaNumeric;
		boolean isvinnNumeric;
		boolean isNumeric;
		
		char verify = 'n';
		char alert = 'n';
		
		String vina = vin.substring(0,10);
		String vinn = vin.substring(11,16);
		
		isvinaalphaNumeric = vina.matches("^[a-zA-Z0-9]*$");
		isvinnNumeric = vinn.matches("^[0-9]*$");
		isNumeric = speed.matches("^[0-9]*$");
		
		if(isvinaalphaNumeric && isNumeric && isvinnNumeric) {
			if(Integer.parseInt(speed)>100) {
				alert = 'y';
				verify = 'y';
				producer.publishToTopic(vin+verify+speed+alert+timeStamp);
			}
			else {
				if(sp<10) speed = "00"+speed;
				else speed = "0"+speed;
				verify = 'y';
				
				producer.publishToTopic(vin+verify+speed+alert+timeStamp);
			}
			 return "DATA VALIDATED";
		}
		else {
			if(Integer.parseInt(speed)>100){
				alert = 'y';
				verify = 'n';
				producer.publishToTopic(vin+verify+speed+alert+timeStamp);
			}
			else {
				if(sp<10) speed = "00"+speed;
				else speed = "0"+speed;
				alert = 'n';
				verify = 'n';
				producer.publishToTopic(vin+verify+speed+alert+timeStamp);
				
			}
		}
    return "DATA VALIDATED";

	}

}