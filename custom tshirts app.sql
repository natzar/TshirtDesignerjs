# ************************************************************
# Sequel Pro SQL dump
# Versi�n 4096
#
# http://www.sequelpro.com/
# http://code.google.com/p/sequel-pro/
#
# Host: db.iguana.io (MySQL 5.1.56-log)
# Base de datos: humbertolopez
# Tiempo de Generaci�n: 2014-03-22 10:48:01 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Volcado de tabla cpapp_ayuda
# ------------------------------------------------------------

DROP TABLE IF EXISTS `cpapp_ayuda`;

CREATE TABLE `cpapp_ayuda` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `orden` int(11) NOT NULL,
  `title` varchar(80) NOT NULL,
  `text` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

LOCK TABLES `cpapp_ayuda` WRITE;
/*!40000 ALTER TABLE `cpapp_ayuda` DISABLE KEYS */;

INSERT INTO `cpapp_ayuda` (`id`, `orden`, `title`, `text`)
VALUES
	(1,0,'Devoluciones','<p><br />Well, the way they make shows is, they make one show. That show\'s called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they\'re going to make more shows. Some pilots get picked and become television programs. Some don\'t, become nothing. She starred in one of the ones that became nothing.<br />Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they\'re actually proud of that shit.&nbsp;?</p>'),
	(2,0,'Entrega','<p><br />Well, the way they make shows is, they make one show. That show\'s called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they\'re going to make more shows. Some pilots get picked and become television programs. Some don\'t, become nothing. She starred in one of the ones that became nothing.<br />Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they\'re actually proud of that shit.&nbsp;?</p>'),
	(3,0,'colorDefault','<p><br />Well, the way they make shows is, they make one show. That show\'s called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they\'re going to make more shows. Some pilots get picked and become television programs. Some don\'t, become nothing. She starred in one of the ones that became nothing.<br />Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they\'re actually proud of that shit.&nbsp;?</p>'),
	(4,0,'textDefault','Camisetas Brain'),
	(9,0,'precioImagen','4'),
	(8,0,'mailGetPedido','info@camisetasbrain.com'),
	(10,0,'precioTexto','4'),
	(11,0,'minCantidadPedido','1'),
	(12,0,'maxCantidadPedido','10');

/*!40000 ALTER TABLE `cpapp_ayuda` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla cpapp_categorys
# ------------------------------------------------------------

DROP TABLE IF EXISTS `cpapp_categorys`;

CREATE TABLE `cpapp_categorys` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `orden` int(11) NOT NULL,
  `category` varchar(80) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

LOCK TABLES `cpapp_categorys` WRITE;
/*!40000 ALTER TABLE `cpapp_categorys` DISABLE KEYS */;

INSERT INTO `cpapp_categorys` (`id`, `orden`, `category`)
VALUES
	(1,0,'Hombre'),
	(2,0,'Mujer');

/*!40000 ALTER TABLE `cpapp_categorys` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla cpapp_designs
# ------------------------------------------------------------

DROP TABLE IF EXISTS `cpapp_designs`;

CREATE TABLE `cpapp_designs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `img` varchar(120) NOT NULL,
  `orden` int(11) NOT NULL,
  `precio` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

LOCK TABLES `cpapp_designs` WRITE;
/*!40000 ALTER TABLE `cpapp_designs` DISABLE KEYS */;

INSERT INTO `cpapp_designs` (`id`, `title`, `img`, `orden`, `precio`)
VALUES
	(1,'Proba','beer_2012-16-05-06-46-59s6mhrfm.png',0,10),
	(2,'VISA','cut-lemon_2012-16-05-06-47-08nl2eco.png',0,0),
	(3,'prueba','banned-stamp-clipart_2012-16-05-06-46-43qqfieyf.png',0,12),
	(4,'lemon','lemon-2_2012-16-05-06-47-21zdhn6a.png',0,20),
	(5,'tea','teacup_clipart_2012-16-05-06-47-52h9uxnz7.png',0,20),
	(6,'fd','new-clipart1_2012-16-05-06-48-04smbhnh.png',0,12);

/*!40000 ALTER TABLE `cpapp_designs` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla cpapp_fonts
# ------------------------------------------------------------

DROP TABLE IF EXISTS `cpapp_fonts`;

CREATE TABLE `cpapp_fonts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fontname` varchar(255) NOT NULL,
  `regular` varchar(255) NOT NULL,
  `bold` varchar(255) NOT NULL,
  `italic` varchar(255) NOT NULL,
  `bolditalic` varchar(255) NOT NULL,
  `orden` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

LOCK TABLES `cpapp_fonts` WRITE;
/*!40000 ALTER TABLE `cpapp_fonts` DISABLE KEYS */;

INSERT INTO `cpapp_fonts` (`id`, `fontname`, `regular`, `bold`, `italic`, `bolditalic`, `orden`)
VALUES
	(1,'prueba','carra_presents_2012-01-06-04-15-4461acl94.txt','email_miki_2012-01-06-04-15-44761ck2g.txt','elemental_2012-01-06-04-15-44f8oysxq.jpg','texto-anuncio_2012-01-06-04-15-44udubu5x.txt',0),
	(2,'prueba','carra_presents_2012-01-06-04-15-54237vs7x.txt','email_miki_2012-01-06-04-15-5445qzyg3.txt','elemental_2012-01-06-04-15-54999d5l3.jpg','texto-anuncio_2012-01-06-04-15-54l9i6a38.txt',0),
	(3,'dasx','carra_presents_2012-01-06-04-16-47uwukop7.txt','carra-plantilla_2012-01-06-04-16-477lsze0n.txt','texto-anuncio_2012-01-06-04-16-473ee1bb5.txt','imglogo_2012-01-06-04-16-476nvgk5b.gif',0);

/*!40000 ALTER TABLE `cpapp_fonts` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla cpapp_generaloptions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `cpapp_generaloptions`;

CREATE TABLE `cpapp_generaloptions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `param` varchar(80) NOT NULL,
  `value` varchar(120) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

LOCK TABLES `cpapp_generaloptions` WRITE;
/*!40000 ALTER TABLE `cpapp_generaloptions` DISABLE KEYS */;

INSERT INTO `cpapp_generaloptions` (`id`, `param`, `value`)
VALUES
	(1,'minFontSize','25'),
	(2,'maxFontSize','200'),
	(3,'colorDefault','black'),
	(4,'textDefault','Kustom!'),
	(9,'precioImagen','4'),
	(8,'mailGetPedido','contacto@phpninja.info'),
	(10,'precioTexto','4'),
	(11,'minCantidadPedido','1'),
	(12,'maxCantidadPedido','10');

/*!40000 ALTER TABLE `cpapp_generaloptions` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla cpapp_pedidos
# ------------------------------------------------------------

DROP TABLE IF EXISTS `cpapp_pedidos`;

CREATE TABLE `cpapp_pedidos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  `producto` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `custominfo` text NOT NULL,
  `nombre` varchar(80) NOT NULL,
  `apellidos` varchar(120) NOT NULL,
  `email` varchar(12) NOT NULL,
  `direccion` text NOT NULL,
  `cp` varchar(12) NOT NULL,
  `ciudad` varchar(80) NOT NULL,
  `provincia` varchar(120) NOT NULL,
  `pais` varchar(80) NOT NULL,
  `ultimocampo` varchar(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

LOCK TABLES `cpapp_pedidos` WRITE;
/*!40000 ALTER TABLE `cpapp_pedidos` DISABLE KEYS */;

INSERT INTO `cpapp_pedidos` (`id`, `fecha`, `hora`, `producto`, `cantidad`, `custominfo`, `nombre`, `apellidos`, `email`, `direccion`, `cp`, `ciudad`, `provincia`, `pais`, `ultimocampo`)
VALUES
	(1,'0000-00-00','00:00:00',342423,432,'fsdfsdf','fdsfsd','fdsfsd','34234','fsfsdf','','fsdfs','','fsdfsd','fsdf'),
	(2,'0000-00-00','00:00:00',0,0,'','','','','','','','','',''),
	(3,'0000-00-00','00:00:00',0,0,'','','','','','','','','',''),
	(4,'2012-01-16','08:33:16',0,0,'{\"productImage_Front\":\"customAPP/data/img/thumbs/delante2.png\",\"productImage_Back\":\"customAPP/data/img/thumbs/detras2.png\",\"precio\":0,\"frontTexts\":[{\"id\":\"custom_text_front_0\",\"text\":\"Camisetas Brain\",\"width\":\"159px\",\"height\":\"122px\",\"top\":\"100px\",\"left\":\"150px\",\"fontsize\":\"40px\",\"lineheight\":\"normal\",\"color\":\"rgb(0, 0, 0)\",\"fontfamily\":\"Arial\"}],\"frontImgs\":[],\"backTexts\":[],\"backImgs\":[]}','sdad','fas','','fsa fds','','','','España',''),
	(5,'2012-01-16','08:35:57',0,0,'{\"productImage_Front\":\"customAPP/data/img/thumbs/delante2.png\",\"productImage_Back\":\"customAPP/data/img/thumbs/detras2.png\",\"precio\":0,\"frontTexts\":[{\"id\":\"custom_text_front_0\",\"text\":\"Camisetas Brain\",\"width\":\"159px\",\"height\":\"122px\",\"top\":\"100px\",\"left\":\"150px\",\"fontsize\":\"40px\",\"lineheight\":\"normal\",\"color\":\"rgb(0, 0, 0)\",\"fontfamily\":\"Arial\"}],\"frontImgs\":[],\"backTexts\":[],\"backImgs\":[]}','sdad','fas','','fsa fds','','','','España',''),
	(6,'2012-01-16','08:36:23',0,0,'{\"productImage_Front\":\"customAPP/data/img/thumbs/delante2.png\",\"productImage_Back\":\"customAPP/data/img/thumbs/detras2.png\",\"precio\":0,\"frontTexts\":[{\"id\":\"custom_text_front_0\",\"text\":\"Camisetas Brain\",\"width\":\"140px\",\"height\":\"90px\",\"top\":\"100px\",\"left\":\"150px\",\"fontsize\":\"40px\",\"lineheight\":\"normal\",\"color\":\"rgb(0, 0, 0)\",\"fontfamily\":\"Arial\"}],\"frontImgs\":[],\"backTexts\":[],\"backImgs\":[]}','sdad','fas','','fsa fds','','','','España','');

/*!40000 ALTER TABLE `cpapp_pedidos` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla cpapp_products
# ------------------------------------------------------------

DROP TABLE IF EXISTS `cpapp_products`;

CREATE TABLE `cpapp_products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titleProduct` varchar(150) NOT NULL,
  `parentProduct` int(11) NOT NULL DEFAULT '0',
  `subcategory` int(11) NOT NULL,
  `front_img` varchar(120) NOT NULL,
  `back_img` varchar(120) NOT NULL,
  `imgProduct` varchar(120) NOT NULL,
  `descriptionProduct` text NOT NULL,
  `price` float NOT NULL,
  `orden` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

LOCK TABLES `cpapp_products` WRITE;
/*!40000 ALTER TABLE `cpapp_products` DISABLE KEYS */;

INSERT INTO `cpapp_products` (`id`, `titleProduct`, `parentProduct`, `subcategory`, `front_img`, `back_img`, `imgProduct`, `descriptionProduct`, `price`, `orden`)
VALUES
	(1,'Nota!',0,1,'delante2.png','detras2.png','687_giqsxw.jpeg','Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',10,0),
	(2,'Nota 3!',0,1,'delante3.png','detras3.png','','image1.jpg,image2.jpg',20,0),
	(3,'Camiseta gris',0,1,'delante4.png','detras4.png','','image1.jpg,image2.jpg',30,0),
	(5,'sads',0,1,'captura_de_pantalla_2012-05-02_a_las_17.39.22_2012-02-05-08-40-227bs5fr7.png','captura_de_pantalla_2012-05-02_a_las_17.39.22_2012-02-05-08-40-22y5ktysc.png','captura_de_pantalla_2012-05-02_a_las_17.39.22_2012-02-05-08-40-22qwcxol9.png','<p>sasasas</p>',23,0),
	(6,'sd',0,1,'captura_de_pantalla_2012-05-02_a_las_17.38.37_2012-02-05-08-40-51d64wimn.png','captura_de_pantalla_2012-05-02_a_las_17.38.37_2012-02-05-08-40-51i5te6a9.png','captura_de_pantalla_2012-05-02_a_las_17.38.37_2012-02-05-08-40-51as4yldh.png','<p>cxcxxc</p>',34,0);

/*!40000 ALTER TABLE `cpapp_products` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla cpapp_subcategorys
# ------------------------------------------------------------

DROP TABLE IF EXISTS `cpapp_subcategorys`;

CREATE TABLE `cpapp_subcategorys` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `orden` int(11) NOT NULL,
  `category` int(11) NOT NULL,
  `subCategory` varchar(80) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

LOCK TABLES `cpapp_subcategorys` WRITE;
/*!40000 ALTER TABLE `cpapp_subcategorys` DISABLE KEYS */;

INSERT INTO `cpapp_subcategorys` (`id`, `orden`, `category`, `subCategory`)
VALUES
	(1,0,1,'Camisetas Hombre'),
	(2,0,2,'Camisetas Mujer'),
	(3,0,1,'Bañador'),
	(4,0,2,'Calcetines');

/*!40000 ALTER TABLE `cpapp_subcategorys` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
