package com.example.demo;

import org.springframework.data.cassandra.core.mapping.PrimaryKey;
import org.springframework.data.cassandra.core.mapping.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Table

  @Data
  @AllArgsConstructor
  @NoArgsConstructor
 
public class User {
	
	private String vin;
	private String verified;
	private int speed;
	private String alert;
	@PrimaryKey
	private String timeStamp;
    
	public User() {
    	
    }
	public User(String vin, String verified, int speed, String alert,String timeStamp) {
	super();
	this.vin = vin;
	this.verified = verified;
	this.speed = speed;
	this.alert = alert;
	this.timeStamp = timeStamp;
	}
	public String getVin() {
		return vin;
	}
	public void setVin(String vin) {
		this.vin = vin;
	}
	public String getVerified() {
		return verified;
	}
	public void setVerified(String verified) {
		this.verified = verified;
	}
	public int getSpeed() {
		return speed;
	}
	public void setSpeed(int speed) {
		this.speed = speed;
	}
	public String getAlert() {
		return alert;
	}
	public void setAlert(String alert) {
		this.alert = alert;
	}
	public String getTimeStamp() {
		return timeStamp;
	}
	public void setTimeStamp(String timeStamp) {
		this.timeStamp = timeStamp;
	}
	
}
