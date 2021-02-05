CREATE DATABASE database_link;

USE database_link;

CREATE TABLE user(
    id INT(11) NOT NULL,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL,
    fullname VARCHAR(100) NOT NULL
);

ALTER TABLE `database_link`.`user` 
ADD PRIMARY KEY (`id`);


ALTER TABLE `database_link`.`user`
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE `database_link`.`user`;

CREATE TABLE `links` (
  `id` int NOT NULL,
  `title` varchar(150) NOT NULL,
  `url` varchar(255) NOT NULL,
  `description` text,
  `user_id` int DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_user_idx` (`user_id`),
  CONSTRAINT `fk_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
);
ALTER TABLE `database_link`.`links`
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;


DESCRIBE `database_link`.`links`;

----
//Permisos
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'samsung';

flush privileges;