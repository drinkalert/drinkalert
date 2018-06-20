# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.21)
# Database: drunk_db
# Generation Time: 2018-06-19 15:46:59 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table alcohol
# ------------------------------------------------------------

CREATE TABLE `alcohol` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `alcohol_content` float DEFAULT NULL,
  `ounces` float DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `alcohol_type_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `alcohol_type_id` (`alcohol_type_id`),
  CONSTRAINT `alcohol_ibfk_1` FOREIGN KEY (`alcohol_type_id`) REFERENCES `alcohol_types` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `alcohol` WRITE;
/*!40000 ALTER TABLE `alcohol` DISABLE KEYS */;

INSERT INTO `alcohol` (`id`, `name`, `alcohol_content`, `ounces`, `created_at`, `updated_at`, `alcohol_type_id`)
VALUES
	(1,'Lagunitas Capuccino Stout',9.1,12,'2018-06-18 00:00:00','2018-06-18 00:00:00',1),
	(2,'Lagunitas IPA',6.2,12,'2018-06-18 00:00:00','2018-06-18 00:00:00',1),
	(3,'Pabst Blue Ribbon',4.74,12,'2018-06-18 00:00:00','2018-06-18 00:00:00',1),
  (4,'Arbor Gold Ale',10,12,'2018-06-18 00:00:00','2018-06-18 00:00:00',1),
	(5,'Jack Daniels Shot',40,1,'2018-06-18 00:00:00','2018-06-18 00:00:00',3),
	(6,'Jose Cuervo Tequilla Shot',38,1,'2018-06-18 00:00:00','2018-06-18 00:00:00',3),
	(7,'House Red Wine',12,5,'2018-06-18 00:00:00','2018-06-18 00:00:00',2),
	(8,'House White Wine',10,5,'2018-06-18 00:00:00','2018-06-18 00:00:00',2),
  (9,'Dornish Red',15,5,'2018-06-18 00:00:00','2018-06-18 00:00:00',2);

/*!40000 ALTER TABLE `alcohol` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table alcohol_types
# ------------------------------------------------------------

CREATE TABLE `alcohol_types` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `drink_type` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `alcohol_types` WRITE;
/*!40000 ALTER TABLE `alcohol_types` DISABLE KEYS */;

INSERT INTO `alcohol_types` (`id`, `drink_type`, `created_at`, `updated_at`)
VALUES
	(1,'Beer','2018-06-18 00:00:00','2018-06-18 00:00:00'),
	(2,'Wine','2018-06-18 00:00:00','2018-06-18 00:00:00'),
	(3,'Liquor','2018-06-18 00:00:00','2018-06-18 00:00:00');

/*!40000 ALTER TABLE `alcohol_types` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table drinks
# ------------------------------------------------------------

CREATE TABLE `drinks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `drink_date` datetime NOT NULL,
  `drink_frequency` enum('Cheap Date','Buzz Light','YOLO','Dave') DEFAULT NULL,
  `drink_start_time` datetime DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `alcohol_id` int(11) DEFAULT NULL,
  `user_id` char(36) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `alcohol_id` (`alcohol_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `drinks_ibfk_1` FOREIGN KEY (`alcohol_id`) REFERENCES `alcohol` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `drinks_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table users
# ------------------------------------------------------------

CREATE TABLE `users` (
  `id` char(36) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `weight` int(11) NOT NULL,
  `sex` enum('m','f','yes','other') NOT NULL DEFAULT 'yes',
  `last_login` datetime DEFAULT NULL,
  `status` enum('active','inactive') DEFAULT 'active',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;

INSERT INTO `users` (`id`, `name`, `email`, `password`, `weight`, `sex`, `last_login`, `status`, `created_at`, `updated_at`)
VALUES
	('37ff1cdd-5ad8-40cf-8308-db43843e550c','Hodor','h@h.com','$2a$08$hiMTcphLU1CzCFRueYp7Je39rj3Th31rIa3p9sT6EZuGXAcPRBiYW',300,'m',NULL,'active','2018-06-19 08:09:51','2018-06-19 08:09:51'),
	('64eb57c9-1989-4df7-b33c-5f453802cacc','Daenerys Targaryen','d@d.com','$2a$08$hiMTcphLU1CzCFRueYp7Je39rj3Th31rIa3p9sT6EZuGXAcPRBiYW',90,'f',NULL,'active','2018-06-19 08:15:31','2018-06-19 08:15:31'),
	('8e5ff21f-7b9d-4833-bc23-080c5336b95e','Brienne of Tarth','b@b.com','$2a$08$hiMTcphLU1CzCFRueYp7Je39rj3Th31rIa3p9sT6EZuGXAcPRBiYW',200,'m',NULL,'active','2018-06-19 09:10:35','2018-06-19 09:10:35');

/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
