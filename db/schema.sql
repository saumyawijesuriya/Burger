CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
  id int AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  devour boolean default false,
  PRIMARY KEY(id)
);
