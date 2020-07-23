
### Schema
DROP DATABASE IF EXISTS burgerburger_db;

CREATE DATABASE burgerburger_db;
USE burgerburger_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	isDevour BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
