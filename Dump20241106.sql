CREATE DATABASE  IF NOT EXISTS `restaurantbooking` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;
USE `restaurantbooking`;
-- MySQL dump 10.13  Distrib 8.0.13, for Win64 (x86_64)
--
-- Host: localhost    Database: restaurantbooking
-- ------------------------------------------------------
-- Server version	8.0.11

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `billing`
--

DROP TABLE IF EXISTS `billing`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `billing` (
  `billno` int(11) NOT NULL AUTO_INCREMENT,
  `billtime` varchar(45) DEFAULT NULL,
  `billdate` date DEFAULT NULL,
  `tableno` varchar(45) DEFAULT NULL,
  `server` varchar(45) DEFAULT NULL,
  `fssai` varchar(45) DEFAULT NULL,
  `cnote` text,
  `gst` varchar(45) DEFAULT NULL,
  `billingdetails` text,
  `totalamount` varchar(45) DEFAULT NULL,
  `customername` varchar(45) DEFAULT NULL,
  `mobileno` varchar(45) DEFAULT NULL,
  `restaurantid` int(11) DEFAULT NULL,
  `order_status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`billno`)
) ENGINE=InnoDB AUTO_INCREMENT=89 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `billing`
--

LOCK TABLES `billing` WRITE;
/*!40000 ALTER TABLE `billing` DISABLE KEYS */;
INSERT INTO `billing` VALUES (1,'7:55','2023-09-18','#Floor 11','','124578','','7777777','{\"3\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":3,\"fooditemname\":\"Chola Batura\",\"foodtype\":\"Veg\",\"ingredients\":\"Chole, Chola Masala\",\"price\":100,\"offerprice\":80,\"icon\":\"2aceba1b-476d-4aa8-bbb8-6da18d444f23.png\",\"categoryname\":\"North Indian\",\"qty\":1},\"4\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":4,\"fooditemname\":\"Shai Panner\",\"foodtype\":\"Veg\",\"ingredients\":\"Paneer\",\"price\":180,\"offerprice\":0,\"icon\":\"d9b9f100-ea1d-40f7-9738-bd8e9922b2f5.png\",\"categoryname\":\"North Indian\",\"qty\":1},\"5\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":5,\"fooditemname\":\"Dal Tadka\",\"foodtype\":\"Veg\",\"ingredients\":\"Paneer\",\"price\":180,\"offerprice\":0,\"icon\":\"3e1d49ea-acef-4f1c-83c3-df430b00468f.jpg\",\"categoryname\":\"North Indian\",\"qty\":1},\"6\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":6,\"fooditemname\":\"Dal Batti\",\"foodtype\":\"Veg\",\"ingredients\":\"Dal, Wheat Flour\",\"price\":200,\"offerprice\":180,\"icon\":\"7e6527d6-9d49-4dc3-9f15-4d5d79c79f77.png\",\"categoryname\":\"North Indian\",\"qty\":1}}','731.6','Brijesh Diwakar','7047240402',6,'Complete'),(2,'7:39','2023-09-20','#Floor 24','','124578','','7777777','{\"8\":{\"restaurantid\":6,\"categoryid\":3,\"fooditemid\":8,\"fooditemname\":\"Dosa\",\"foodtype\":\"Veg\",\"ingredients\":\"Dosa\",\"price\":80,\"offerprice\":75,\"icon\":\"75df7bfd-7271-416e-8db7-5f91f7047b0a.png\",\"categoryname\":\"South Indian\",\"qty\":1},\"9\":{\"restaurantid\":6,\"categoryid\":3,\"fooditemid\":9,\"fooditemname\":\"Masala Dosa\",\"foodtype\":\"Veg\",\"ingredients\":\"Dosa\",\"price\":100,\"offerprice\":0,\"icon\":\"b65ff09e-60c9-4995-b0ed-d9ac24daa551.png\",\"categoryname\":\"South Indian\",\"qty\":1}}','206.5','Brijesh Diwakar','7047240402',6,'Complete'),(3,'7:47','2023-09-20','#Floor 12','','124578','','7777777','{\"8\":{\"restaurantid\":6,\"categoryid\":3,\"fooditemid\":8,\"fooditemname\":\"Dosa\",\"foodtype\":\"Veg\",\"ingredients\":\"Dosa\",\"price\":80,\"offerprice\":75,\"icon\":\"75df7bfd-7271-416e-8db7-5f91f7047b0a.png\",\"categoryname\":\"South Indian\",\"qty\":1},\"9\":{\"restaurantid\":6,\"categoryid\":3,\"fooditemid\":9,\"fooditemname\":\"Masala Dosa\",\"foodtype\":\"Veg\",\"ingredients\":\"Dosa\",\"price\":100,\"offerprice\":0,\"icon\":\"b65ff09e-60c9-4995-b0ed-d9ac24daa551.png\",\"categoryname\":\"South Indian\",\"qty\":1},\"10\":{\"restaurantid\":6,\"categoryid\":3,\"fooditemid\":10,\"fooditemname\":\"Idli\",\"foodtype\":\"Veg\",\"ingredients\":\"Idli\",\"price\":40,\"offerprice\":0,\"icon\":\"b6c5aa7f-f46f-44c3-8a7e-281ad15ba605.png\",\"categoryname\":\"South Indian\",\"qty\":1}}','253.7','Brijesh Diwakar','7047240402',6,'Complete'),(6,'7:39','2023-07-23','#Floor 12','','124578','','7777777','{\"9\":{\"restaurantid\":6,\"categoryid\":3,\"fooditemid\":9,\"fooditemname\":\"Masala Dosa\",\"foodtype\":\"Veg\",\"ingredients\":\"Dosa\",\"price\":100,\"offerprice\":0,\"icon\":\"b65ff09e-60c9-4995-b0ed-d9ac24daa551.png\",\"categoryname\":\"South Indian\",\"qty\":1}}','90','Brijesh Diwakar','7047240402',6,'Complete'),(9,'8:0','2023-09-28','#Floor 31','','124578','','7777777','{\"4\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":4,\"fooditemname\":\"Shai Panner\",\"foodtype\":\"Veg\",\"ingredients\":\"Paneer\",\"price\":180,\"offerprice\":0,\"icon\":\"d9b9f100-ea1d-40f7-9738-bd8e9922b2f5.png\",\"categoryname\":\"North Indian\",\"qty\":1},\"5\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":5,\"fooditemname\":\"Dal Tadka\",\"foodtype\":\"Veg\",\"ingredients\":\"Paneer\",\"price\":180,\"offerprice\":0,\"icon\":\"3e1d49ea-acef-4f1c-83c3-df430b00468f.jpg\",\"categoryname\":\"North Indian\",\"qty\":1},\"6\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":6,\"fooditemname\":\"Dal Batti\",\"foodtype\":\"Veg\",\"ingredients\":\"Dal, Wheat Flour\",\"price\":200,\"offerprice\":180,\"icon\":\"7e6527d6-9d49-4dc3-9f15-4d5d79c79f77.png\",\"categoryname\":\"North Indian\",\"qty\":1}}','637.2','Brijesh Diwakar','7047240402',6,'Order Confirm'),(11,'19:13','2023-10-18','#Floor 3','','124578','','7777777',NULL,'0','ADITYA','8462054552',6,'Order Confirm'),(13,'11:50','2023-10-20','#Floor 11','','124578','','7777777','{\"3\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":3,\"fooditemname\":\"Chola Batura\",\"foodtype\":\"Veg\",\"ingredients\":\"Chole, Chola Masala\",\"price\":100,\"offerprice\":80,\"icon\":\"2aceba1b-476d-4aa8-bbb8-6da18d444f23.png\",\"categoryname\":\"North Indian\",\"qty\":1},\"4\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":4,\"fooditemname\":\"Shai Panner\",\"foodtype\":\"Veg\",\"ingredients\":\"Paneer\",\"price\":180,\"offerprice\":0,\"icon\":\"d9b9f100-ea1d-40f7-9738-bd8e9922b2f5.png\",\"categoryname\":\"North Indian\",\"qty\":1},\"5\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":5,\"fooditemname\":\"Dal Tadka\",\"foodtype\":\"Veg\",\"ingredients\":\"Paneer\",\"price\":180,\"offerprice\":0,\"icon\":\"3e1d49ea-acef-4f1c-83c3-df430b00468f.jpg\",\"categoryname\":\"North Indian\",\"qty\":1},\"6\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":6,\"fooditemname\":\"Dal Batti\",\"foodtype\":\"Veg\",\"ingredients\":\"Dal, Wheat Flour\",\"price\":200,\"offerprice\":180,\"icon\":\"7e6527d6-9d49-4dc3-9f15-4d5d79c79f77.png\",\"categoryname\":\"North Indian\",\"qty\":1},\"7\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":7,\"fooditemname\":\"Amritsari Kulcha\",\"foodtype\":\"Veg\",\"ingredients\":\"Wheat Flour\",\"price\":70,\"offerprice\":0,\"icon\":\"57dfa8dd-fd3e-4b82-9efb-fcce973c5d57.png\",\"categoryname\":\"North Indian\",\"qty\":2}}','896.8','Brijesh Diwakar','7047240402',6,'Order Confirm'),(15,'14:20','2023-11-09','#Floor 11','','124578','','7777777',NULL,'0','Brijesh Diwakar','7047240402',6,'Order Confirm'),(38,'19:32','2023-11-16','#Floor 11','','124578','','7777777','{\"3\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":3,\"fooditemname\":\"Chola Batura\",\"foodtype\":\"Veg\",\"ingredients\":\"Chole, Chola Masala\",\"price\":100,\"offerprice\":80,\"icon\":\"2aceba1b-476d-4aa8-bbb8-6da18d444f23.png\",\"categoryname\":\"North Indian\",\"qty\":1},\"4\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":4,\"fooditemname\":\"Shai Panner\",\"foodtype\":\"Veg\",\"ingredients\":\"Paneer\",\"price\":180,\"offerprice\":0,\"icon\":\"d9b9f100-ea1d-40f7-9738-bd8e9922b2f5.png\",\"categoryname\":\"North Indian\",\"qty\":5},\"5\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":5,\"fooditemname\":\"Dal Tadka\",\"foodtype\":\"Veg\",\"ingredients\":\"Paneer\",\"price\":180,\"offerprice\":0,\"icon\":\"3e1d49ea-acef-4f1c-83c3-df430b00468f.jpg\",\"categoryname\":\"North Indian\",\"qty\":1},\"6\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":6,\"fooditemname\":\"Dal Batti\",\"foodtype\":\"Veg\",\"ingredients\":\"Dal, Wheat Flour\",\"price\":200,\"offerprice\":180,\"icon\":\"7e6527d6-9d49-4dc3-9f15-4d5d79c79f77.png\",\"categoryname\":\"North Indian\",\"qty\":1},\"7\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":7,\"fooditemname\":\"Amritsari Kulcha\",\"foodtype\":\"Veg\",\"ingredients\":\"Wheat Flour\",\"price\":70,\"offerprice\":0,\"icon\":\"57dfa8dd-fd3e-4b82-9efb-fcce973c5d57.png\",\"categoryname\":\"North Indian\",\"qty\":1},\"8\":{\"restaurantid\":6,\"categoryid\":3,\"fooditemid\":8,\"fooditemname\":\"Dosa\",\"foodtype\":\"Veg\",\"ingredients\":\"Dosa\",\"price\":80,\"offerprice\":75,\"icon\":\"75df7bfd-7271-416e-8db7-5f91f7047b0a.png\",\"categoryname\":\"South Indian\",\"qty\":1},\"9\":{\"restaurantid\":6,\"categoryid\":3,\"fooditemid\":9,\"fooditemname\":\"Masala Dosa\",\"foodtype\":\"Veg\",\"ingredients\":\"Dosa\",\"price\":100,\"offerprice\":0,\"icon\":\"b65ff09e-60c9-4995-b0ed-d9ac24daa551.png\",\"categoryname\":\"South Indian\",\"qty\":1},\"10\":{\"restaurantid\":6,\"categoryid\":3,\"fooditemid\":10,\"fooditemname\":\"Idli\",\"foodtype\":\"Veg\",\"ingredients\":\"Idli\",\"price\":40,\"offerprice\":0,\"icon\":\"b6c5aa7f-f46f-44c3-8a7e-281ad15ba605.png\",\"categoryname\":\"South Indian\",\"qty\":1}}','1917.5',NULL,NULL,6,'Order Confirm'),(39,'17:21','2023-11-21','#Floor 11','','124578','','7777777','{\"3\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":3,\"fooditemname\":\"Chola Batura\",\"foodtype\":\"Veg\",\"ingredients\":\"Chole, Chola Masala\",\"price\":100,\"offerprice\":80,\"icon\":\"2aceba1b-476d-4aa8-bbb8-6da18d444f23.png\",\"categoryname\":\"North Indian\",\"qty\":1}}','94.4','DA_NEW','7047240402',6,'Order Confirm'),(51,'17:58','2023-11-21','#Floor 11','','124578','','7777777','{\"4\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":4,\"fooditemname\":\"Shai Panner\",\"foodtype\":\"Veg\",\"ingredients\":\"Paneer\",\"price\":180,\"offerprice\":0,\"icon\":\"d9b9f100-ea1d-40f7-9738-bd8e9922b2f5.png\",\"categoryname\":\"North Indian\",\"qty\":1}}','212.4',NULL,NULL,6,'Order Confirm'),(55,'12:0','2023-11-22','Home','','124578','','7777777','{\"4\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":4,\"fooditemname\":\"Shai Panner\",\"foodtype\":\"Veg\",\"ingredients\":\"Paneer\",\"price\":180,\"offerprice\":0,\"icon\":\"d9b9f100-ea1d-40f7-9738-bd8e9922b2f5.png\",\"categoryname\":\"North Indian\",\"qty\":1},\"5\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":5,\"fooditemname\":\"Dal Tadka\",\"foodtype\":\"Veg\",\"ingredients\":\"Paneer\",\"price\":180,\"offerprice\":0,\"icon\":\"3e1d49ea-acef-4f1c-83c3-df430b00468f.jpg\",\"categoryname\":\"North Indian\",\"qty\":1}}','424.8',NULL,NULL,6,'Order Confirm'),(57,'12:2','2023-11-22','#Floor 11','','124578','','7777777','{\"3\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":3,\"fooditemname\":\"Chola Batura\",\"foodtype\":\"Veg\",\"ingredients\":\"Chole, Chola Masala\",\"price\":100,\"offerprice\":80,\"icon\":\"2aceba1b-476d-4aa8-bbb8-6da18d444f23.png\",\"categoryname\":\"North Indian\",\"qty\":1},\"4\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":4,\"fooditemname\":\"Shai Panner\",\"foodtype\":\"Veg\",\"ingredients\":\"Paneer\",\"price\":180,\"offerprice\":0,\"icon\":\"d9b9f100-ea1d-40f7-9738-bd8e9922b2f5.png\",\"categoryname\":\"North Indian\",\"qty\":2},\"5\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":5,\"fooditemname\":\"Dal Tadka\",\"foodtype\":\"Veg\",\"ingredients\":\"Paneer\",\"price\":180,\"offerprice\":0,\"icon\":\"3e1d49ea-acef-4f1c-83c3-df430b00468f.jpg\",\"categoryname\":\"North Indian\",\"qty\":1}}','731.6','Brijesh Diwakar','7047240402',6,'Order Confirm'),(58,'12:58','2023-11-29','TakeAway','','124578','','7777777','{\"4\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":4,\"fooditemname\":\"Shai Panner\",\"foodtype\":\"Veg\",\"ingredients\":\"Paneer\",\"price\":180,\"offerprice\":0,\"icon\":\"d9b9f100-ea1d-40f7-9738-bd8e9922b2f5.png\",\"categoryname\":\"North Indian\",\"qty\":1},\"5\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":5,\"fooditemname\":\"Dal Tadka\",\"foodtype\":\"Veg\",\"ingredients\":\"Paneer\",\"price\":180,\"offerprice\":0,\"icon\":\"3e1d49ea-acef-4f1c-83c3-df430b00468f.jpg\",\"categoryname\":\"North Indian\",\"qty\":1},\"6\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":6,\"fooditemname\":\"Dal Batti\",\"foodtype\":\"Veg\",\"ingredients\":\"Dal, Wheat Flour\",\"price\":200,\"offerprice\":180,\"icon\":\"7e6527d6-9d49-4dc3-9f15-4d5d79c79f77.png\",\"categoryname\":\"North Indian\",\"qty\":1}}','637.2',NULL,NULL,6,'Order Confirm'),(59,'18:42','2023-12-01','TakeAway','','124578','','7777777','{\"4\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":4,\"fooditemname\":\"Shai Panner\",\"foodtype\":\"Veg\",\"ingredients\":\"Paneer\",\"price\":180,\"offerprice\":0,\"icon\":\"d9b9f100-ea1d-40f7-9738-bd8e9922b2f5.png\",\"categoryname\":\"North Indian\",\"qty\":1}}','212.4','Brijesh Diwakar','7047240402',6,'Order Confirm'),(60,'20:23','2023-12-01','TakeAway','','124578','','7777777','{\"8\":{\"restaurantid\":6,\"categoryid\":3,\"fooditemid\":8,\"fooditemname\":\"Dosa\",\"foodtype\":\"Veg\",\"ingredients\":\"Dosa\",\"price\":80,\"offerprice\":75,\"icon\":\"75df7bfd-7271-416e-8db7-5f91f7047b0a.png\",\"categoryname\":\"South Indian\",\"qty\":1},\"9\":{\"restaurantid\":6,\"categoryid\":3,\"fooditemid\":9,\"fooditemname\":\"Masala Dosa\",\"foodtype\":\"Veg\",\"ingredients\":\"Dosa\",\"price\":100,\"offerprice\":0,\"icon\":\"b65ff09e-60c9-4995-b0ed-d9ac24daa551.png\",\"categoryname\":\"South Indian\",\"qty\":1},\"10\":{\"restaurantid\":6,\"categoryid\":3,\"fooditemid\":10,\"fooditemname\":\"Idli\",\"foodtype\":\"Veg\",\"ingredients\":\"Idli\",\"price\":40,\"offerprice\":0,\"icon\":\"b6c5aa7f-f46f-44c3-8a7e-281ad15ba605.png\",\"categoryname\":\"South Indian\",\"qty\":1}}','253.7','m','7',6,'Order Confirm'),(61,'14:37','2023-12-04','TakeAway','','124578','','7777777','{\"4\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":4,\"fooditemname\":\"Shai Panner\",\"foodtype\":\"Veg\",\"ingredients\":\"Paneer\",\"price\":180,\"offerprice\":0,\"icon\":\"d9b9f100-ea1d-40f7-9738-bd8e9922b2f5.png\",\"categoryname\":\"North Indian\",\"qty\":1},\"6\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":6,\"fooditemname\":\"Dal Batti\",\"foodtype\":\"Veg\",\"ingredients\":\"Dal, Wheat Flour\",\"price\":200,\"offerprice\":180,\"icon\":\"7e6527d6-9d49-4dc3-9f15-4d5d79c79f77.png\",\"categoryname\":\"North Indian\",\"qty\":1}}','424.8','Vishal Jain','9174537339',6,'Complete'),(62,'14:42','2023-12-04','#Floor 21','','124578','','7777777','{\"3\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":3,\"fooditemname\":\"Chola Batura\",\"foodtype\":\"Veg\",\"ingredients\":\"Chole, Chola Masala\",\"price\":100,\"offerprice\":80,\"icon\":\"2aceba1b-476d-4aa8-bbb8-6da18d444f23.png\",\"categoryname\":\"North Indian\",\"qty\":2},\"4\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":4,\"fooditemname\":\"Shai Panner\",\"foodtype\":\"Veg\",\"ingredients\":\"Paneer\",\"price\":180,\"offerprice\":0,\"icon\":\"d9b9f100-ea1d-40f7-9738-bd8e9922b2f5.png\",\"categoryname\":\"North Indian\",\"qty\":1}}','401.2','Brijesh Diwakar','7047240402',6,'Complete'),(63,'18:41','2023-12-06','#Floor 15','','124578','','7777777','{\"5\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":5,\"fooditemname\":\"Dal Tadka\",\"foodtype\":\"Veg\",\"ingredients\":\"Paneer\",\"price\":180,\"offerprice\":0,\"icon\":\"3e1d49ea-acef-4f1c-83c3-df430b00468f.jpg\",\"categoryname\":\"North Indian\",\"qty\":1},\"6\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":6,\"fooditemname\":\"Dal Batti\",\"foodtype\":\"Veg\",\"ingredients\":\"Dal, Wheat Flour\",\"price\":200,\"offerprice\":180,\"icon\":\"7e6527d6-9d49-4dc3-9f15-4d5d79c79f77.png\",\"categoryname\":\"North Indian\",\"qty\":5},\"7\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":7,\"fooditemname\":\"Amritsari Kulcha\",\"foodtype\":\"Veg\",\"ingredients\":\"Wheat Flour\",\"price\":70,\"offerprice\":0,\"icon\":\"57dfa8dd-fd3e-4b82-9efb-fcce973c5d57.png\",\"categoryname\":\"North Indian\",\"qty\":2},\"8\":{\"restaurantid\":6,\"categoryid\":3,\"fooditemid\":8,\"fooditemname\":\"Dosa\",\"foodtype\":\"Veg\",\"ingredients\":\"Dosa\",\"price\":80,\"offerprice\":75,\"icon\":\"75df7bfd-7271-416e-8db7-5f91f7047b0a.png\",\"categoryname\":\"South Indian\",\"qty\":4}}','1793.6',NULL,NULL,6,NULL),(64,'19:52','2023-12-07','#Floor 12','','124578','','7777777','{\"3\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":3,\"fooditemname\":\"Chola Batura\",\"foodtype\":\"Veg\",\"ingredients\":\"Chole, Chola Masala\",\"price\":100,\"offerprice\":80,\"icon\":\"2aceba1b-476d-4aa8-bbb8-6da18d444f23.png\",\"categoryname\":\"North Indian\",\"qty\":1},\"4\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":4,\"fooditemname\":\"Shai Panner\",\"foodtype\":\"Veg\",\"ingredients\":\"Paneer\",\"price\":180,\"offerprice\":0,\"icon\":\"d9b9f100-ea1d-40f7-9738-bd8e9922b2f5.png\",\"categoryname\":\"North Indian\",\"qty\":1},\"6\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":6,\"fooditemname\":\"Dal Batti\",\"foodtype\":\"Veg\",\"ingredients\":\"Dal, Wheat Flour\",\"price\":200,\"offerprice\":180,\"icon\":\"7e6527d6-9d49-4dc3-9f15-4d5d79c79f77.png\",\"categoryname\":\"North Indian\",\"qty\":1},\"7\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":7,\"fooditemname\":\"Amritsari Kulcha\",\"foodtype\":\"Veg\",\"ingredients\":\"Wheat Flour\",\"price\":70,\"offerprice\":0,\"icon\":\"57dfa8dd-fd3e-4b82-9efb-fcce973c5d57.png\",\"categoryname\":\"North Indian\",\"qty\":1}}','601.8','xfgsdg','65645',6,'Complete'),(65,'20:16','2023-12-07','TakeAway','','124578','','7777777','{\"4\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":4,\"fooditemname\":\"Shai Panner\",\"foodtype\":\"Veg\",\"ingredients\":\"Paneer\",\"price\":180,\"offerprice\":0,\"icon\":\"d9b9f100-ea1d-40f7-9738-bd8e9922b2f5.png\",\"categoryname\":\"North Indian\",\"qty\":1},\"5\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":5,\"fooditemname\":\"Dal Tadka\",\"foodtype\":\"Veg\",\"ingredients\":\"Paneer\",\"price\":180,\"offerprice\":0,\"icon\":\"3e1d49ea-acef-4f1c-83c3-df430b00468f.jpg\",\"categoryname\":\"North Indian\",\"qty\":1},\"6\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":6,\"fooditemname\":\"Dal Batti\",\"foodtype\":\"Veg\",\"ingredients\":\"Dal, Wheat Flour\",\"price\":200,\"offerprice\":180,\"icon\":\"7e6527d6-9d49-4dc3-9f15-4d5d79c79f77.png\",\"categoryname\":\"North Indian\",\"qty\":1}}','637.2',NULL,NULL,6,'Complete'),(66,'20:18','2023-12-07','TakeAway','','124578','','7777777','{\"4\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":4,\"fooditemname\":\"Shai Panner\",\"foodtype\":\"NonVeg\",\"ingredients\":\"Paneer\",\"price\":180,\"offerprice\":0,\"icon\":\"d9b9f100-ea1d-40f7-9738-bd8e9922b2f5.png\",\"categoryname\":\"North Indian\",\"qty\":4}}','849.6',NULL,NULL,6,'Complete'),(67,'15:32','2023-12-07','#Floor 12','','124578','','7777777','{\"3\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":3,\"fooditemname\":\"Chola Batura\",\"foodtype\":\"NonVeg\",\"ingredients\":\"Chole, Chola Masala\",\"price\":100,\"offerprice\":80,\"icon\":\"2aceba1b-476d-4aa8-bbb8-6da18d444f23.png\",\"categoryname\":\"North Indian\",\"qty\":1},\"4\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":4,\"fooditemname\":\"Shai Panner\",\"foodtype\":\"Veg\",\"ingredients\":\"Paneer\",\"price\":180,\"offerprice\":0,\"icon\":\"d9b9f100-ea1d-40f7-9738-bd8e9922b2f5.png\",\"categoryname\":\"North Indian\",\"qty\":2},\"5\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":5,\"fooditemname\":\"Dal Tadka\",\"foodtype\":\"Veg\",\"ingredients\":\"Paneer\",\"price\":180,\"offerprice\":0,\"icon\":\"3e1d49ea-acef-4f1c-83c3-df430b00468f.jpg\",\"categoryname\":\"North Indian\",\"qty\":1},\"6\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":6,\"fooditemname\":\"Dal Batti\",\"foodtype\":\"Veg\",\"ingredients\":\"Dal, Wheat Flour\",\"price\":200,\"offerprice\":180,\"icon\":\"7e6527d6-9d49-4dc3-9f15-4d5d79c79f77.png\",\"categoryname\":\"North Indian\",\"qty\":2},\"7\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":7,\"fooditemname\":\"Amritsari Kulcha\",\"foodtype\":\"NonVeg\",\"ingredients\":\"Wheat Flour\",\"price\":70,\"offerprice\":0,\"icon\":\"57dfa8dd-fd3e-4b82-9efb-fcce973c5d57.png\",\"categoryname\":\"North Indian\",\"qty\":1},\"8\":{\"restaurantid\":6,\"categoryid\":3,\"fooditemid\":8,\"fooditemname\":\"Dosa\",\"foodtype\":\"NonVeg\",\"ingredients\":\"Dosa\",\"price\":80,\"offerprice\":75,\"icon\":\"75df7bfd-7271-416e-8db7-5f91f7047b0a.png\",\"categoryname\":\"South Indian\",\"qty\":2},\"9\":{\"restaurantid\":6,\"categoryid\":3,\"fooditemid\":9,\"fooditemname\":\"Masala Dosa\",\"foodtype\":\"NonVeg\",\"ingredients\":\"Dosa\",\"price\":100,\"offerprice\":0,\"icon\":\"b65ff09e-60c9-4995-b0ed-d9ac24daa551.png\",\"categoryname\":\"South Indian\",\"qty\":1}}','1534','Brijesh Diwakar','7047240402',6,'Complete'),(68,'16:15','2023-12-07','TakeAway','','124578','','7777777','{\"5\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":5,\"fooditemname\":\"Dal Tadka\",\"foodtype\":\"Veg\",\"ingredients\":\"Paneer\",\"price\":180,\"offerprice\":0,\"icon\":\"3e1d49ea-acef-4f1c-83c3-df430b00468f.jpg\",\"categoryname\":\"North Indian\",\"qty\":1},\"7\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":7,\"fooditemname\":\"Amritsari Kulcha\",\"foodtype\":\"Veg\",\"ingredients\":\"Wheat Flour\",\"price\":70,\"offerprice\":0,\"icon\":\"57dfa8dd-fd3e-4b82-9efb-fcce973c5d57.png\",\"categoryname\":\"North Indian\",\"qty\":2}}','377.6',NULL,NULL,6,'Complete'),(69,'15:12','2023-12-07','#Floor 13','','124578','','7777777','{\"5\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":5,\"fooditemname\":\"Dal Tadka\",\"foodtype\":\"Veg\",\"ingredients\":\"Paneer\",\"price\":180,\"offerprice\":0,\"icon\":\"3e1d49ea-acef-4f1c-83c3-df430b00468f.jpg\",\"categoryname\":\"North Indian\",\"qty\":3}}','637.2','Brijesh','7047240402',6,'Complete'),(70,'18:36','2023-12-07','TakeAway','','124578','','7777777','{\"3\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":3,\"fooditemname\":\"Chola Batura\",\"foodtype\":\"Veg\",\"ingredients\":\"Chole, Chola Masala\",\"price\":100,\"offerprice\":80,\"icon\":\"2aceba1b-476d-4aa8-bbb8-6da18d444f23.png\",\"categoryname\":\"North Indian\",\"qty\":1},\"4\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":4,\"fooditemname\":\"Shai Panner\",\"foodtype\":\"Veg\",\"ingredients\":\"Paneer\",\"price\":180,\"offerprice\":0,\"icon\":\"d9b9f100-ea1d-40f7-9738-bd8e9922b2f5.png\",\"categoryname\":\"North Indian\",\"qty\":1},\"6\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":6,\"fooditemname\":\"Dal Batti\",\"foodtype\":\"Veg\",\"ingredients\":\"Dal, Wheat Flour\",\"price\":200,\"offerprice\":180,\"icon\":\"7e6527d6-9d49-4dc3-9f15-4d5d79c79f77.png\",\"categoryname\":\"North Indian\",\"qty\":1},\"7\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":7,\"fooditemname\":\"Amritsari Kulcha\",\"foodtype\":\"Veg\",\"ingredients\":\"Wheat Flour\",\"price\":70,\"offerprice\":0,\"icon\":\"57dfa8dd-fd3e-4b82-9efb-fcce973c5d57.png\",\"categoryname\":\"North Indian\",\"qty\":1}}','601.8','Ashish Agrawal','7000072790',6,'Complete'),(71,'19:46','2023-12-07','#Floor 11','','124578','','7777777','{\"5\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":5,\"fooditemname\":\"Dal Tadka\",\"foodtype\":\"Veg\",\"ingredients\":\"Paneer\",\"price\":180,\"offerprice\":0,\"icon\":\"3e1d49ea-acef-4f1c-83c3-df430b00468f.jpg\",\"categoryname\":\"North Indian\",\"qty\":6}}','1274.4',NULL,NULL,6,'Complete'),(72,'19:52','2023-12-07','#Floor 11','','124578','','7777777','{\"5\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":5,\"fooditemname\":\"Dal Tadka\",\"foodtype\":\"Veg\",\"ingredients\":\"Paneer\",\"price\":180,\"offerprice\":0,\"icon\":\"3e1d49ea-acef-4f1c-83c3-df430b00468f.jpg\",\"categoryname\":\"North Indian\",\"qty\":4}}','849.6',NULL,NULL,6,'Complete'),(73,'19:54','2023-12-07','#Floor 11','','124578','','7777777','{\"3\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":3,\"fooditemname\":\"Chola Batura\",\"foodtype\":\"Veg\",\"ingredients\":\"Chole, Chola Masala\",\"price\":100,\"offerprice\":80,\"icon\":\"2aceba1b-476d-4aa8-bbb8-6da18d444f23.png\",\"categoryname\":\"North Indian\",\"qty\":1},\"4\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":4,\"fooditemname\":\"Shai Panner\",\"foodtype\":\"Veg\",\"ingredients\":\"Paneer\",\"price\":180,\"offerprice\":0,\"icon\":\"d9b9f100-ea1d-40f7-9738-bd8e9922b2f5.png\",\"categoryname\":\"North Indian\",\"qty\":3}}','731.6',NULL,NULL,6,'Complete'),(74,'19:56','2023-12-07','#Floor 12','','124578','','7777777','{\"7\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":7,\"fooditemname\":\"Amritsari Kulcha\",\"foodtype\":\"Veg\",\"ingredients\":\"Wheat Flour\",\"price\":70,\"offerprice\":0,\"icon\":\"57dfa8dd-fd3e-4b82-9efb-fcce973c5d57.png\",\"categoryname\":\"North Indian\",\"qty\":7}}','578.2',NULL,NULL,6,'Complete'),(75,'20:5','2023-12-07','TakeAway','','124578','','7777777','{\"5\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":5,\"fooditemname\":\"Dal Tadka\",\"foodtype\":\"Veg\",\"ingredients\":\"Paneer\",\"price\":180,\"offerprice\":0,\"icon\":\"3e1d49ea-acef-4f1c-83c3-df430b00468f.jpg\",\"categoryname\":\"North Indian\",\"qty\":6}}','1274.4',NULL,NULL,6,'Complete'),(76,'20:7','2023-12-07','TakeAway','','124578','','7777777','{\"9\":{\"restaurantid\":6,\"categoryid\":3,\"fooditemid\":9,\"fooditemname\":\"Masala Dosa\",\"foodtype\":\"Veg\",\"ingredients\":\"Dosa\",\"price\":100,\"offerprice\":0,\"icon\":\"b65ff09e-60c9-4995-b0ed-d9ac24daa551.png\",\"categoryname\":\"South Indian\",\"qty\":13}}','1534','','',6,'Complete'),(77,'20:8','2023-12-07','TakeAway','','124578','','7777777','{\"9\":{\"restaurantid\":6,\"categoryid\":3,\"fooditemid\":9,\"fooditemname\":\"Masala Dosa\",\"foodtype\":\"Veg\",\"ingredients\":\"Dosa\",\"price\":100,\"offerprice\":0,\"icon\":\"b65ff09e-60c9-4995-b0ed-d9ac24daa551.png\",\"categoryname\":\"South Indian\",\"qty\":10}}','1180',NULL,NULL,6,'Complete'),(78,'20:9','2023-12-07','TakeAway','','124578','','7777777','{\"9\":{\"restaurantid\":6,\"categoryid\":3,\"fooditemid\":9,\"fooditemname\":\"Masala Dosa\",\"foodtype\":\"Veg\",\"ingredients\":\"Dosa\",\"price\":100,\"offerprice\":0,\"icon\":\"b65ff09e-60c9-4995-b0ed-d9ac24daa551.png\",\"categoryname\":\"South Indian\",\"qty\":7}}','826',NULL,NULL,6,'Complete'),(79,'20:12','2023-12-07','TakeAway','','124578','','7777777','{\"8\":{\"restaurantid\":6,\"categoryid\":3,\"fooditemid\":8,\"fooditemname\":\"Dosa\",\"foodtype\":\"Veg\",\"ingredients\":\"Dosa\",\"price\":80,\"offerprice\":75,\"icon\":\"75df7bfd-7271-416e-8db7-5f91f7047b0a.png\",\"categoryname\":\"South Indian\",\"qty\":1},\"10\":{\"restaurantid\":6,\"categoryid\":3,\"fooditemid\":10,\"fooditemname\":\"Idli\",\"foodtype\":\"Veg\",\"ingredients\":\"Idli\",\"price\":40,\"offerprice\":0,\"icon\":\"b6c5aa7f-f46f-44c3-8a7e-281ad15ba605.png\",\"categoryname\":\"South Indian\",\"qty\":3}}','230.1',NULL,NULL,6,'Complete'),(80,'20:13','2023-12-07','TakeAway','','124578','','7777777','{\"10\":{\"restaurantid\":6,\"categoryid\":3,\"fooditemid\":10,\"fooditemname\":\"Idli\",\"foodtype\":\"Veg\",\"ingredients\":\"Idli\",\"price\":40,\"offerprice\":0,\"icon\":\"b6c5aa7f-f46f-44c3-8a7e-281ad15ba605.png\",\"categoryname\":\"South Indian\",\"qty\":3}}','141.6','','',6,'Complete'),(81,'20:13','2023-12-07','TakeAway','','124578','','7777777','{\"4\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":4,\"fooditemname\":\"Shai Panner\",\"foodtype\":\"Veg\",\"ingredients\":\"Paneer\",\"price\":180,\"offerprice\":0,\"icon\":\"d9b9f100-ea1d-40f7-9738-bd8e9922b2f5.png\",\"categoryname\":\"North Indian\",\"qty\":6},\"7\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":7,\"fooditemname\":\"Amritsari Kulcha\",\"foodtype\":\"Veg\",\"ingredients\":\"Wheat Flour\",\"price\":70,\"offerprice\":0,\"icon\":\"57dfa8dd-fd3e-4b82-9efb-fcce973c5d57.png\",\"categoryname\":\"North Indian\",\"qty\":4}}','1604.8','','',6,'Complete'),(82,'20:14','2023-12-07','TakeAway','','124578','','7777777','{\"8\":{\"restaurantid\":6,\"categoryid\":3,\"fooditemid\":8,\"fooditemname\":\"Dosa\",\"foodtype\":\"Veg\",\"ingredients\":\"Dosa\",\"price\":80,\"offerprice\":75,\"icon\":\"75df7bfd-7271-416e-8db7-5f91f7047b0a.png\",\"categoryname\":\"South Indian\",\"qty\":6},\"9\":{\"restaurantid\":6,\"categoryid\":3,\"fooditemid\":9,\"fooditemname\":\"Masala Dosa\",\"foodtype\":\"Veg\",\"ingredients\":\"Dosa\",\"price\":100,\"offerprice\":0,\"icon\":\"b65ff09e-60c9-4995-b0ed-d9ac24daa551.png\",\"categoryname\":\"South Indian\",\"qty\":6}}','1239','','',6,'Complete'),(83,'20:17','2023-12-07','TakeAway','','124578','','7777777','{\"10\":{\"restaurantid\":6,\"categoryid\":3,\"fooditemid\":10,\"fooditemname\":\"Idli\",\"foodtype\":\"Veg\",\"ingredients\":\"Idli\",\"price\":40,\"offerprice\":0,\"icon\":\"b6c5aa7f-f46f-44c3-8a7e-281ad15ba605.png\",\"categoryname\":\"South Indian\",\"qty\":3}}','141.6',NULL,NULL,6,NULL),(84,'20:18','2023-12-07','TakeAway','','124578','','7777777','{\"4\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":4,\"fooditemname\":\"Shai Panner\",\"foodtype\":\"Veg\",\"ingredients\":\"Paneer\",\"price\":180,\"offerprice\":0,\"icon\":\"d9b9f100-ea1d-40f7-9738-bd8e9922b2f5.png\",\"categoryname\":\"North Indian\",\"qty\":4}}','849.6',NULL,NULL,6,NULL),(85,'20:19','2023-12-07','TakeAway','','124578','','7777777','{\"4\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":4,\"fooditemname\":\"Shai Panner\",\"foodtype\":\"Veg\",\"ingredients\":\"Paneer\",\"price\":180,\"offerprice\":0,\"icon\":\"d9b9f100-ea1d-40f7-9738-bd8e9922b2f5.png\",\"categoryname\":\"North Indian\",\"qty\":1}}','212.4',NULL,NULL,6,NULL),(86,'20:21','2023-12-07','TakeAway','','124578','','7777777','{\"5\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":5,\"fooditemname\":\"Dal Tadka\",\"foodtype\":\"Veg\",\"ingredients\":\"Paneer\",\"price\":180,\"offerprice\":0,\"icon\":\"3e1d49ea-acef-4f1c-83c3-df430b00468f.jpg\",\"categoryname\":\"North Indian\",\"qty\":1}}','212.4',NULL,NULL,6,'Complete'),(87,'20:27','2023-12-07','TakeAway','','124578','','7777777','{\"5\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":5,\"fooditemname\":\"Dal Tadka\",\"foodtype\":\"Veg\",\"ingredients\":\"Paneer\",\"price\":180,\"offerprice\":0,\"icon\":\"3e1d49ea-acef-4f1c-83c3-df430b00468f.jpg\",\"categoryname\":\"North Indian\",\"qty\":4},\"10\":{\"restaurantid\":6,\"categoryid\":3,\"fooditemid\":10,\"fooditemname\":\"Idli\",\"foodtype\":\"Veg\",\"ingredients\":\"Idli\",\"price\":40,\"offerprice\":0,\"icon\":\"b6c5aa7f-f46f-44c3-8a7e-281ad15ba605.png\",\"categoryname\":\"South Indian\",\"qty\":4}}','1038.4','','',6,NULL),(88,'12:20','2023-12-12','TakeAway','','124578','','7777777','{\"4\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":4,\"fooditemname\":\"Shai Panner\",\"foodtype\":\"Veg\",\"ingredients\":\"Paneer\",\"price\":180,\"offerprice\":0,\"icon\":\"d9b9f100-ea1d-40f7-9738-bd8e9922b2f5.png\",\"categoryname\":\"North Indian\",\"qty\":1},\"5\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":5,\"fooditemname\":\"Dal Tadka\",\"foodtype\":\"Veg\",\"ingredients\":\"Paneer\",\"price\":180,\"offerprice\":0,\"icon\":\"3e1d49ea-acef-4f1c-83c3-df430b00468f.jpg\",\"categoryname\":\"North Indian\",\"qty\":1},\"6\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":6,\"fooditemname\":\"Dal Batti\",\"foodtype\":\"Veg\",\"ingredients\":\"Dal, Wheat Flour\",\"price\":200,\"offerprice\":180,\"icon\":\"7e6527d6-9d49-4dc3-9f15-4d5d79c79f77.png\",\"categoryname\":\"North Indian\",\"qty\":1},\"7\":{\"restaurantid\":6,\"categoryid\":2,\"fooditemid\":7,\"fooditemname\":\"Amritsari Kulcha\",\"foodtype\":\"Veg\",\"ingredients\":\"Wheat Flour\",\"price\":70,\"offerprice\":0,\"icon\":\"57dfa8dd-fd3e-4b82-9efb-fcce973c5d57.png\",\"categoryname\":\"North Indian\",\"qty\":2}}','802.4',NULL,NULL,6,'Complete');
/*!40000 ALTER TABLE `billing` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `category` (
  `restaurantid` int(11) DEFAULT NULL,
  `categoryid` int(11) NOT NULL AUTO_INCREMENT,
  `categoryname` varchar(45) DEFAULT NULL,
  `icon` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`categoryid`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (6,2,'North Indian','18b5ad39-835c-4193-85fe-35d8a86a68c2.jpg'),(6,3,'South Indian','e2f372be-b954-4cf1-8bde-8bec70f7d041.png'),(6,4,'Chinese','ab03c256-12e7-4258-81bf-c9bca0e1f723.png'),(6,5,'Italian','32dacb3f-35d1-4609-a6cb-b853eece53a2.webp'),(6,6,'Dessert','d3d4cf71-e9b0-4e48-ad15-4407e10124cf.png'),(6,7,'Beverages','117a8935-bf08-4729-858b-28ed78300dbc.png');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `city`
--

DROP TABLE IF EXISTS `city`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `city` (
  `cityid` int(11) NOT NULL AUTO_INCREMENT,
  `stateid` int(11) DEFAULT NULL,
  `cityname` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`cityid`),
  KEY `state_city_idx` (`stateid`),
  CONSTRAINT `state_city` FOREIGN KEY (`stateid`) REFERENCES `states` (`stateid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `city`
--

LOCK TABLES `city` WRITE;
/*!40000 ALTER TABLE `city` DISABLE KEYS */;
INSERT INTO `city` VALUES (1,100,'Indore'),(2,100,'Gwalior'),(3,200,'New Delhi'),(4,300,'Hydrabad'),(5,300,'Vijayawada'),(6,400,'Bagaluru'),(7,400,'Mysore'),(8,500,'Lucknow'),(9,500,'Noida');
/*!40000 ALTER TABLE `city` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contact`
--

DROP TABLE IF EXISTS `contact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `contact` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `mobile` varchar(10) NOT NULL,
  `email` varchar(45) NOT NULL,
  `query` varchar(1000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact`
--

LOCK TABLES `contact` WRITE;
/*!40000 ALTER TABLE `contact` DISABLE KEYS */;
INSERT INTO `contact` VALUES (1,'Brijesh','7047240402','brajesh25893@gmail.com','Thatipur\n0');
/*!40000 ALTER TABLE `contact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `employee` (
  `employee_id` int(11) NOT NULL AUTO_INCREMENT,
  `restaurantid` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `mobile` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `role` varchar(45) NOT NULL,
  `status` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`employee_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (3,6,'Brijesh Diwakar','7047240402','brajesh25893@gmail.com','2#1','1','123','2023-11-24 12:18:20','2023-11-25 06:21:13');
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fooditems`
--

DROP TABLE IF EXISTS `fooditems`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `fooditems` (
  `restaurantid` int(11) DEFAULT NULL,
  `categoryid` int(11) DEFAULT NULL,
  `fooditemid` int(11) NOT NULL AUTO_INCREMENT,
  `fooditemname` varchar(100) DEFAULT NULL,
  `foodtype` varchar(45) DEFAULT NULL,
  `ingredients` varchar(200) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `offerprice` int(11) DEFAULT NULL,
  `icon` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`fooditemid`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fooditems`
--

LOCK TABLES `fooditems` WRITE;
/*!40000 ALTER TABLE `fooditems` DISABLE KEYS */;
INSERT INTO `fooditems` VALUES (6,2,3,'Chola Batura','Veg','Chole, Chola Masala',100,80,'2aceba1b-476d-4aa8-bbb8-6da18d444f23.png'),(6,2,4,'Shai Panner','Veg','Paneer',180,0,'d9b9f100-ea1d-40f7-9738-bd8e9922b2f5.png'),(6,2,5,'Dal Tadka','Veg','Paneer',180,0,'3e1d49ea-acef-4f1c-83c3-df430b00468f.jpg'),(6,2,6,'Dal Batti','Veg','Dal, Wheat Flour',200,180,'7e6527d6-9d49-4dc3-9f15-4d5d79c79f77.png'),(6,2,7,'Amritsari Kulcha','Veg','Wheat Flour',70,0,'57dfa8dd-fd3e-4b82-9efb-fcce973c5d57.png'),(6,3,8,'Dosa','Veg','Dosa',80,75,'75df7bfd-7271-416e-8db7-5f91f7047b0a.png'),(6,3,9,'Masala Dosa','Veg','Dosa',100,0,'b65ff09e-60c9-4995-b0ed-d9ac24daa551.png'),(6,3,10,'Idli','Veg','Idli',40,0,'b6c5aa7f-f46f-44c3-8a7e-281ad15ba605.png');
/*!40000 ALTER TABLE `fooditems` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `restaurants`
--

DROP TABLE IF EXISTS `restaurants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `restaurants` (
  `restaurantid` int(11) NOT NULL AUTO_INCREMENT,
  `restaurantname` varchar(100) DEFAULT NULL,
  `ownername` varchar(45) DEFAULT NULL,
  `phonenumber` varchar(45) DEFAULT NULL,
  `emailid` varchar(45) DEFAULT NULL,
  `mobileno` varchar(45) DEFAULT NULL,
  `url` varchar(200) DEFAULT NULL,
  `fssai` varchar(45) DEFAULT NULL,
  `gstno` varchar(45) DEFAULT NULL,
  `gsttype` varchar(45) DEFAULT NULL,
  `filefssai` varchar(45) DEFAULT NULL,
  `fileshopact` varchar(45) DEFAULT NULL,
  `filelogo` varchar(45) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `stateid` int(11) DEFAULT NULL,
  `cityid` int(11) DEFAULT NULL,
  `createdat` date DEFAULT NULL,
  `updatedat` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `status` varchar(45) NOT NULL,
  `role` varchar(45) NOT NULL DEFAULT 'ADMIN',
  PRIMARY KEY (`restaurantid`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurants`
--

LOCK TABLES `restaurants` WRITE;
/*!40000 ALTER TABLE `restaurants` DISABLE KEYS */;
INSERT INTO `restaurants` VALUES (6,'Haldiram','Shri KK Agrawal','0751 44 55 66','hr@gmail.com','9301123085','http://haldiram.com','124578','7777777','18','45990f3d-5d97-4a99-a188-2a5005af8f8e.jpg','b2d25081-b960-439f-8fd1-e478524f5251.png','b71a6e13-91d5-49eb-bb3c-8e15c94a3192.png','13, Gulabchand Ki Bagichi, Behind Jhawar Estate, Thatipur, Gwalior- 474011 (M.P.)',200,3,'2023-07-25','2023-8-4','12345','1','Admin'),(8,'Param Food Complex','Mr R K Kumar','9404090891','param@gmail.com','9404090891','http://param.com','56789','123456','5','64ed5f1b-c2d3-4fad-95df-7d3dd548a4af.png','cdfdff5c-c239-490c-8f3f-a1d2e66109f2.jpg','f42db3d9-3204-4703-8719-98dc985b42cd.jpg','Govindpuri',100,2,'2023-08-08','2023-8-8','12345','0','Admin'),(9,'BikanerWala','Peter Kumar','8989458990','bk@gmail.com','8989458990','bk.com','12345','56789','5 Star','25d1781a-098b-4032-ac0f-da3d171ca0b5.jpg','9aa8054e-2db2-4431-b1ac-99fc10b58a5f.jpg','d2771e95-9dfd-44c8-8ada-36b7910125b7.jpg','Padav Gwalior',100,1,'2023-10-03','2023-10-3','12345','1','Admin');
/*!40000 ALTER TABLE `restaurants` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `states`
--

DROP TABLE IF EXISTS `states`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `states` (
  `stateid` int(11) NOT NULL AUTO_INCREMENT,
  `statename` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`stateid`)
) ENGINE=InnoDB AUTO_INCREMENT=501 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `states`
--

LOCK TABLES `states` WRITE;
/*!40000 ALTER TABLE `states` DISABLE KEYS */;
INSERT INTO `states` VALUES (100,'Madhya Pradesh'),(200,'New Delhi'),(300,'Telangana'),(400,'Karnataka'),(500,'Uttar Pradesh');
/*!40000 ALTER TABLE `states` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `superadmin`
--

DROP TABLE IF EXISTS `superadmin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `superadmin` (
  `emailid` varchar(45) NOT NULL,
  `superadminname` varchar(45) DEFAULT NULL,
  `picture` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`emailid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `superadmin`
--

LOCK TABLES `superadmin` WRITE;
/*!40000 ALTER TABLE `superadmin` DISABLE KEYS */;
INSERT INTO `superadmin` VALUES ('ss@gmail.com','Alex Kumar','1.jpg','12345');
/*!40000 ALTER TABLE `superadmin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tablebooking`
--

DROP TABLE IF EXISTS `tablebooking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tablebooking` (
  `restaurantid` int(11) DEFAULT NULL,
  `tableid` int(11) NOT NULL AUTO_INCREMENT,
  `tableno` varchar(45) DEFAULT NULL,
  `noofchairs` varchar(45) DEFAULT NULL,
  `floor` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`tableid`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tablebooking`
--

LOCK TABLES `tablebooking` WRITE;
/*!40000 ALTER TABLE `tablebooking` DISABLE KEYS */;
INSERT INTO `tablebooking` VALUES (6,1,'1','4','Floor 1'),(6,2,'1','3','Floor 2'),(6,3,'2','4','Floor 1'),(6,4,'3','6','Floor 1'),(6,5,'4','8','Floor 1'),(6,6,'5','2','Floor 1'),(6,7,'2','2','Floor 2'),(6,8,'3','2','Floor 2'),(6,9,'4','5','Floor 2'),(6,10,'1','5','Floor 3'),(6,11,'2','3','Floor 3');
/*!40000 ALTER TABLE `tablebooking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `waiters`
--

DROP TABLE IF EXISTS `waiters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `waiters` (
  `restaurantid` int(11) DEFAULT NULL,
  `waiterid` int(11) NOT NULL AUTO_INCREMENT,
  `waitername` varchar(45) DEFAULT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `dob` varchar(45) DEFAULT NULL,
  `mobileno` varchar(45) DEFAULT NULL,
  `emailid` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `picture` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`waiterid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `waiters`
--

LOCK TABLES `waiters` WRITE;
/*!40000 ALTER TABLE `waiters` DISABLE KEYS */;
INSERT INTO `waiters` VALUES (6,1,'rrrr','Male','2023-8-9','4444444444','ss@gg.com','efsdfdsfsf','9cfefe51-6591-4558-8979-859c1ec3ef1d.jpg');
/*!40000 ALTER TABLE `waiters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `waitertable`
--

DROP TABLE IF EXISTS `waitertable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `waitertable` (
  `waitertableid` int(11) NOT NULL AUTO_INCREMENT,
  `restaurantid` int(11) DEFAULT NULL,
  `waiterid` int(11) DEFAULT NULL,
  `tableid` int(11) DEFAULT NULL,
  `currentdate` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`waitertableid`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `waitertable`
--

LOCK TABLES `waitertable` WRITE;
/*!40000 ALTER TABLE `waitertable` DISABLE KEYS */;
INSERT INTO `waitertable` VALUES (2,6,1,NULL,'2023-8-31'),(3,6,1,NULL,'2023-8-22'),(4,6,1,NULL,'2023-8-15'),(5,6,1,1,'2023-8-23'),(6,6,1,2,'2023-8-31');
/*!40000 ALTER TABLE `waitertable` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-06 14:37:20
