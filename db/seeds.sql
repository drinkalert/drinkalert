connect drunk_db;

INSERT INTO `alcohol_types` (`id`, `drink_type`, `created_at`, `updated_at`)
VALUES
	(1,'Beer','2018-06-18 00:00:00','2018-06-18 00:00:00'),
	(2,'Wine','2018-06-18 00:00:00','2018-06-18 00:00:00'),
	(3,'Liquor','2018-06-18 00:00:00','2018-06-18 00:00:00');


INSERT INTO `alcohol` (`id`, `name`, `alcohol_content`, `ounces`, `created_at`, `updated_at`, `alcohol_type_id`)
VALUES
	(1,'Lagunitas Capuccino Stout',9.1,12,'2018-06-18 00:00:00','2018-06-18 00:00:00',1),
	(2,'Lagunitas IPA',6.2,12,'2018-06-18 00:00:00','2018-06-18 00:00:00',1),
	(3,'Pabst Blue Ribbon',4.74,12,'2018-06-18 00:00:00','2018-06-18 00:00:00',1),
	(4,'Jack Daniels Shot',40,1,'2018-06-18 00:00:00','2018-06-18 00:00:00',3),
	(5,'Jose Cuervo Tequilla Shot',38,1,'2018-06-18 00:00:00','2018-06-18 00:00:00',3),
	(6,'House Red Wine',12,5,'2018-06-18 00:00:00','2018-06-18 00:00:00',2),
	(7,'House White Wine',10,5,'2018-06-18 00:00:00','2018-06-18 00:00:00',2);

