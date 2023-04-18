CREATE DATABASE IF NOT EXISTS curso_node;

USE curso_node;

CREATE TABLE Users(
    id INT(20) NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) DEFAULT NULL,
    email VARCHAR(50) DEFAULT NULL,
    password VARCHAR(150) DEFAULT NULL,
    age INT(11) DEFAULT NULL,
    role ENUM("user", "admin") DEFAULT "user",
    createdAt DATETIME DEFAULT NULL,
    updatedAt DATETIME DEFAULT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE tracks(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(150) NOT NULL,
    album VARCHAR(150) NOT NULL,
    cover VARCHAR(150) NOT NULL,
    artist_name VARCHAR(150) NOT NULL,
    artist_nickname VARCHAR(150) NOT NULL,
    artist_nationality VARCHAR(150) NOT NULL,
    duration_start INT(9) NOT NULL,
    duration_end INT(9) NOT NULL,
    mediaId INT(9) NOT NULL,
    createdAt DATETIME DEFAULT NULL,
    updatedAt DATETIME DEFAULT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE storages(
    id INT(11) NOT NULL AUTO_INCREMENT,
    url MEDIUMTEXT NOT NULL,
    filename MEDIUMTEXT NOT NULL,
    createdAt DATETIME DEFAULT NULL,
    updatedAt DATETIME DEFAULT NULL,
    PRIMARY KEY (id)
);