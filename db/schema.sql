CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INTEGER(10) AUTO_INCREMENT NOT NULL,
    burgers_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);