DROP DATABASE hbd;
CREATE DATABASE hbd;
USE hbd;

CREATE TABLE user_profile (
  email VARCHAR(50)NOT NULL,
  user_name VARCHAR(50)NOT NULL,  
   password VARCHAR(50)NOT NULL,  
  PRIMARY KEY (email)
);

CREATE TABLE birth_days (
  id INT NOT NULL AUTO_INCREMENT,
  date DATE NOT NULL,  
  time TIME,
  phone_number VARCHAR(10),  
  message VARCHAR(500),
  PRIMARY KEY (id)
);

CREATE TABLE login_status (
  login_id INT NOT NULL AUTO_INCREMENT,
  email VARCHAR(50),
  device_id VARCHAR(50),
  login_status ENUM("LoggedIn","LoggedOut"),
  PRIMARY KEY (login_id),
  FOREIGN KEY (email) REFERENCES user_profile(email)
); 

