package com.example.demo.controller;


//This will Map with data which coming from API
public class UserDetailsRequestData {
   private Integer vinCount;
   public Integer getVinCount() {
	return vinCount;
}
public void setVinCount(Integer vinCount) {
	this.vinCount = vinCount;
}
public Integer getDelay() {
	return delay;
}
public void setDelay(Integer delay) {
	this.delay = delay;
}
public String getDifferent() {
	return different;
}
public void setDifferent(String different) {
	this.different = different;
}
private Integer delay;
   private String different;
}
