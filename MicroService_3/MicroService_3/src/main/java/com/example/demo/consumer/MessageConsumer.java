package com.example.demo.consumer;

  import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener; 
import org.springframework.stereotype.Service;

import com.example.demo.User;
import com.example.demo.UserRepository;
  
  @Service 
  
  
  public class MessageConsumer {
	  
	  @Autowired
	  UserRepository userrepo;
	  @Autowired
	  EmailSenderService senderservice;
  
  @KafkaListener(topics="k2-topic",groupId="mygroup2")
  
  public void consumeFromTopic(String message) {
  System.out.println("consumed message "+message);
  String msg = message;
  String vin = msg.substring(0, 17);
  String verified = msg.substring(17, 18);
  int sp = Integer.parseInt(msg.substring(18,21));
  String alert = msg.substring(21,22);
  char ch = alert.charAt(0);
  String timeStamp = msg.substring(22);
  String bd = "Hai There !\n Your CAR VIN NO IS : "+vin+" "+timeStamp+"\nYour speed Limit is 100 km/hr\n your Current Speed Is: "+sp+" km/hr"+"\nPlease Drive slowly\nSafe driving saves life.";
  
  try {
	  User obj = new User(vin,verified,sp,alert,timeStamp);
	  userrepo.save(obj);
	  
	  if(ch=='y')  senderservice.sendEmail(bd);
	  
     } catch (Exception e) {
	    System.out.println("No Response From DB");
}
  
  
  
  } 
  }