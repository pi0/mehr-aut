-- MySQL dump 10.13  Distrib 5.6.19, for Win64 (x86_64)
--
-- Host: localhost    Database: mehr
-- ------------------------------------------------------
-- Server version	5.6.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `college`
--

DROP TABLE IF EXISTS `college`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `college` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `level` char(5) COLLATE utf8_persian_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_persian_ci DEFAULT NULL,
  `cDate` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `constant`
--

DROP TABLE IF EXISTS `constant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `constant` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `text` char(255) COLLATE utf8_persian_ci DEFAULT NULL,
  `value` varchar(50) COLLATE utf8_persian_ci DEFAULT NULL,
  `category` varchar(255) COLLATE utf8_persian_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=129 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `council`
--

DROP TABLE IF EXISTS `council`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `council` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `entityId` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8_persian_ci DEFAULT NULL,
  `startDate` date DEFAULT NULL,
  `endDate` date DEFAULT NULL,
  `enrollmentStartDate` date DEFAULT NULL,
  `enrollmentEndDate` date DEFAULT NULL,
  `electionStartDate` date DEFAULT NULL,
  `electionEndDate` date DEFAULT NULL,
  `note` text COLLATE utf8_persian_ci,
  `active` int(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Temporary view structure for view `councillist`
--

DROP TABLE IF EXISTS `councillist`;
/*!50001 DROP VIEW IF EXISTS `councillist`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `councillist` AS SELECT 
 1 AS `id`,
 1 AS `entityId`,
 1 AS `name`,
 1 AS `startDate`,
 1 AS `endDate`,
 1 AS `active`,
 1 AS `enrollmentStartDate`,
 1 AS `enrollmentEndDate`,
 1 AS `electionStartDate`,
 1 AS `electionEndDate`,
 1 AS `note`,
 1 AS `entityFullName`,
 1 AS `userId`,
 1 AS `secretaryFullName`,
 1 AS `electionStatus`,
 1 AS `electionStatusText`,
 1 AS `enrollmentStatus`,
 1 AS `enrollmentStatusText`,
 1 AS `timeStage(startDate,endDate)`,
 1 AS `constantText(timeStage(startDate,endDate),'timeStage')`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `councilmember`
--

DROP TABLE IF EXISTS `councilmember`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `councilmember` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `councilId` int(11) NOT NULL,
  `role` char(50) COLLATE utf8_persian_ci NOT NULL DEFAULT 'member',
  PRIMARY KEY (`id`),
  UNIQUE KEY `userId_councilId` (`userId`,`councilId`)
) ENGINE=MyISAM AUTO_INCREMENT=852552328 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Temporary view structure for view `councilmemberlist`
--

DROP TABLE IF EXISTS `councilmemberlist`;
/*!50001 DROP VIEW IF EXISTS `councilmemberlist`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `councilmemberlist` AS SELECT 
 1 AS `id`,
 1 AS `userId`,
 1 AS `councilId`,
 1 AS `role`,
 1 AS `roleText`,
 1 AS `fullName`,
 1 AS `sid`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `country`
--

DROP TABLE IF EXISTS `country`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `country` (
  `id` varchar(2) COLLATE utf8_persian_ci NOT NULL,
  `name` varchar(64) COLLATE utf8_persian_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `degree`
--

DROP TABLE IF EXISTS `degree`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `degree` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_persian_ci DEFAULT NULL,
  `level` char(5) COLLATE utf8_persian_ci DEFAULT NULL,
  `terms` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `department`
--

DROP TABLE IF EXISTS `department`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `department` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `level` char(5) COLLATE utf8_persian_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_persian_ci DEFAULT NULL,
  `collegeId` bigint(20) DEFAULT NULL,
  `cDate` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Temporary view structure for view `departmentlist`
--

DROP TABLE IF EXISTS `departmentlist`;
/*!50001 DROP VIEW IF EXISTS `departmentlist`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `departmentlist` AS SELECT 
 1 AS `id`,
 1 AS `level`,
 1 AS `name`,
 1 AS `collegeId`,
 1 AS `cDate`,
 1 AS `collgegId`,
 1 AS `collegeName`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `enroller`
--

DROP TABLE IF EXISTS `enroller`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `enroller` (
  `programId` int(10) unsigned NOT NULL,
  `userId` int(10) unsigned NOT NULL,
  `status` varchar(50) COLLATE utf8_persian_ci DEFAULT NULL,
  `cDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `uDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `totalPayment` int(11) DEFAULT NULL,
  PRIMARY KEY (`programId`,`userId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Temporary view structure for view `enrollerlist`
--

DROP TABLE IF EXISTS `enrollerlist`;
/*!50001 DROP VIEW IF EXISTS `enrollerlist`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `enrollerlist` AS SELECT 
 1 AS `userId`,
 1 AS `programId`,
 1 AS `status`,
 1 AS `enrollmentDate`,
 1 AS `fullName`,
 1 AS `id`,
 1 AS `username`,
 1 AS `password`,
 1 AS `firstName`,
 1 AS `lastName`,
 1 AS `nid`,
 1 AS `sid`,
 1 AS `cDate`,
 1 AS `lastLoginDate`,
 1 AS `fatherName`,
 1 AS `sex`,
 1 AS `address`,
 1 AS `phone`,
 1 AS `mobile`,
 1 AS `email`,
 1 AS `email2`,
 1 AS `role_id`,
 1 AS `birthdayDate`,
 1 AS `zip`,
 1 AS `provinceId`,
 1 AS `departmentId`,
 1 AS `startTerm`,
 1 AS `endTerm`,
 1 AS `religion`,
 1 AS `dormitory_al`,
 1 AS `active`,
 1 AS `user_type`,
 1 AS `job_title`,
 1 AS `countryId`,
 1 AS `nationality`,
 1 AS `departemntText`,
 1 AS `collegeText`,
 1 AS `statusText`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `enrollerview`
--

DROP TABLE IF EXISTS `enrollerview`;
/*!50001 DROP VIEW IF EXISTS `enrollerview`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `enrollerview` AS SELECT 
 1 AS `programId`,
 1 AS `userId`,
 1 AS `status`,
 1 AS `cDate`,
 1 AS `totalPayment`,
 1 AS `id`,
 1 AS `text`,
 1 AS `value`,
 1 AS `category`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `entity`
--

DROP TABLE IF EXISTS `entity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `entity` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_persian_ci NOT NULL,
  `type` varchar(3) COLLATE utf8_persian_ci DEFAULT NULL,
  `manager` bigint(20) DEFAULT NULL,
  `cDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `details` text COLLATE utf8_persian_ci,
  `audience` varchar(5000) COLLATE utf8_persian_ci DEFAULT NULL,
  `councilMembers` int(11) DEFAULT NULL,
  `understudyConcuilMembers` int(11) DEFAULT NULL,
  `subscription` tinyint(4) DEFAULT NULL,
  `charter` varchar(5000) COLLATE utf8_persian_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=66 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Temporary view structure for view `entitycouncil`
--

DROP TABLE IF EXISTS `entitycouncil`;
/*!50001 DROP VIEW IF EXISTS `entitycouncil`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `entitycouncil` AS SELECT 
 1 AS `id`,
 1 AS `councilCount`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `entitylist`
--

DROP TABLE IF EXISTS `entitylist`;
/*!50001 DROP VIEW IF EXISTS `entitylist`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `entitylist` AS SELECT 
 1 AS `id`,
 1 AS `name`,
 1 AS `type`,
 1 AS `manager`,
 1 AS `cDate`,
 1 AS `details`,
 1 AS `audience`,
 1 AS `councilMembers`,
 1 AS `understudyConcuilMembers`,
 1 AS `subscription`,
 1 AS `charter`,
 1 AS `typeText`,
 1 AS `councilCount`,
 1 AS `memberCount`,
 1 AS `fullName`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `entitymember`
--

DROP TABLE IF EXISTS `entitymember`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `entitymember` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `entityId` int(11) NOT NULL,
  `role` char(50) COLLATE utf8_persian_ci NOT NULL DEFAULT 'member',
  PRIMARY KEY (`id`),
  UNIQUE KEY `userId_entityId` (`userId`,`entityId`)
) ENGINE=MyISAM AUTO_INCREMENT=852552286 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Temporary view structure for view `entitymemberlist`
--

DROP TABLE IF EXISTS `entitymemberlist`;
/*!50001 DROP VIEW IF EXISTS `entitymemberlist`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `entitymemberlist` AS SELECT 
 1 AS `id`,
 1 AS `userId`,
 1 AS `entityId`,
 1 AS `role`,
 1 AS `roleText`,
 1 AS `firstName`,
 1 AS `lastName`,
 1 AS `fullName`,
 1 AS `sid`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `post`
--

DROP TABLE IF EXISTS `post`;
/*!50001 DROP VIEW IF EXISTS `post`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `post` AS SELECT 
 1 AS `id`,
 1 AS `type`,
 1 AS `cDate`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `program`
--

DROP TABLE IF EXISTS `program`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `program` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `entityId` int(20) NOT NULL,
  `name` varchar(255) COLLATE utf8_persian_ci NOT NULL,
  `manager` bigint(20) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `cDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `uDate` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `enrollmentStartDate` datetime DEFAULT NULL,
  `enrollmentEndDate` datetime DEFAULT NULL,
  `enrollmentMethod` char(10) COLLATE utf8_persian_ci DEFAULT NULL,
  `executionEndDate` datetime DEFAULT NULL,
  `executionStartDate` datetime DEFAULT NULL,
  `minCapacity` int(4) unsigned DEFAULT NULL,
  `maxCapacity` int(4) unsigned DEFAULT NULL,
  `cost` bigint(3) unsigned DEFAULT NULL,
  `registerFee` bigint(3) unsigned DEFAULT NULL,
  `paymentMethod` char(1) COLLATE utf8_persian_ci DEFAULT NULL,
  `subject` char(255) COLLATE utf8_persian_ci DEFAULT NULL,
  `level` char(255) COLLATE utf8_persian_ci DEFAULT NULL,
  `audienceLevel` char(255) COLLATE utf8_persian_ci DEFAULT NULL,
  `audience` varchar(5000) COLLATE utf8_persian_ci DEFAULT NULL,
  `planId` int(20) DEFAULT NULL,
  `sessions` int(3) unsigned DEFAULT '1',
  `prerequisites` varchar(45) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'ندارد',
  `details` text COLLATE utf8_persian_ci,
  `image` char(50) COLLATE utf8_persian_ci DEFAULT NULL,
  `location` char(50) COLLATE utf8_persian_ci DEFAULT NULL,
  `projectedCost` int(11) DEFAULT NULL,
  `income` int(11) DEFAULT NULL,
  `projectedIncome` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=64 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Temporary view structure for view `programlist`
--

DROP TABLE IF EXISTS `programlist`;
/*!50001 DROP VIEW IF EXISTS `programlist`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `programlist` AS SELECT 
 1 AS `id`,
 1 AS `entityId`,
 1 AS `name`,
 1 AS `manager`,
 1 AS `type`,
 1 AS `cDate`,
 1 AS `uDate`,
 1 AS `enrollmentStartDate`,
 1 AS `enrollmentEndDate`,
 1 AS `enrollmentMethod`,
 1 AS `executionEndDate`,
 1 AS `executionStartDate`,
 1 AS `minCapacity`,
 1 AS `maxCapacity`,
 1 AS `cost`,
 1 AS `registerFee`,
 1 AS `paymentMethod`,
 1 AS `subject`,
 1 AS `level`,
 1 AS `audienceLevel`,
 1 AS `audience`,
 1 AS `planId`,
 1 AS `sessions`,
 1 AS `prerequisites`,
 1 AS `details`,
 1 AS `image`,
 1 AS `location`,
 1 AS `projectedCost`,
 1 AS `income`,
 1 AS `projectedIncome`,
 1 AS `typeText`,
 1 AS `subjectText`,
 1 AS `enrollerCount`,
 1 AS `entityFullName`,
 1 AS `enrollmentStatus`,
 1 AS `executionStatus`,
 1 AS `enrollmentStatusText`,
 1 AS `executionStatusText`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `programuserlist`
--

DROP TABLE IF EXISTS `programuserlist`;
/*!50001 DROP VIEW IF EXISTS `programuserlist`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `programuserlist` AS SELECT 
 1 AS `id`,
 1 AS `entityId`,
 1 AS `name`,
 1 AS `image`,
 1 AS `manager`,
 1 AS `type`,
 1 AS `cDate`,
 1 AS `enrollmentMethod`,
 1 AS `enrollmentStartDate`,
 1 AS `enrollmentEndDate`,
 1 AS `executionStartDate`,
 1 AS `executionEndDate`,
 1 AS `minCapacity`,
 1 AS `maxCapacity`,
 1 AS `registerFee`,
 1 AS `paymentMethod`,
 1 AS `level`,
 1 AS `subject`,
 1 AS `audienceLevel`,
 1 AS `audience`,
 1 AS `planId`,
 1 AS `sessions`,
 1 AS `prerequisites`,
 1 AS `details`,
 1 AS `location`,
 1 AS `cost`,
 1 AS `projectedCost`,
 1 AS `income`,
 1 AS `projectedIncome`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `religion`
--

DROP TABLE IF EXISTS `religion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `religion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_persian_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `resource`
--

DROP TABLE IF EXISTS `resource`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `resource` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` bigint(20) NOT NULL DEFAULT '0',
  `resourceId` char(50) COLLATE utf8_persian_ci NOT NULL DEFAULT '0',
  `resourceType` char(50) COLLATE utf8_persian_ci NOT NULL DEFAULT '0',
  `level` char(50) COLLATE utf8_persian_ci NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=41 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `university`
--

DROP TABLE IF EXISTS `university`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `university` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_persian_ci DEFAULT NULL,
  `province` int(11) DEFAULT NULL,
  `cDate` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8_persian_ci NOT NULL,
  `password` varchar(60) COLLATE utf8_persian_ci NOT NULL,
  `firstName` varchar(45) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'نام',
  `lastName` varchar(45) COLLATE utf8_persian_ci NOT NULL COMMENT 'فامیل',
  `nid` char(50) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'کدملی',
  `sid` char(20) COLLATE utf8_persian_ci DEFAULT NULL,
  `cDate` datetime DEFAULT NULL,
  `lastLoginDate` datetime DEFAULT NULL,
  `fatherName` varchar(45) COLLATE utf8_persian_ci DEFAULT NULL,
  `sex` char(3) COLLATE utf8_persian_ci NOT NULL,
  `address` varchar(150) COLLATE utf8_persian_ci DEFAULT NULL,
  `phone` char(20) COLLATE utf8_persian_ci DEFAULT NULL,
  `mobile` char(20) COLLATE utf8_persian_ci DEFAULT NULL,
  `email` varchar(50) COLLATE utf8_persian_ci DEFAULT NULL,
  `email2` varchar(50) COLLATE utf8_persian_ci DEFAULT NULL,
  `role_id` bigint(20) DEFAULT NULL,
  `birthdayDate` date DEFAULT NULL,
  `zip` char(13) COLLATE utf8_persian_ci DEFAULT NULL,
  `provinceId` bigint(20) DEFAULT NULL,
  `departmentId` bigint(20) DEFAULT NULL,
  `startTerm` bigint(20) DEFAULT NULL,
  `endTerm` bigint(20) DEFAULT NULL,
  `religion` char(255) COLLATE utf8_persian_ci DEFAULT NULL,
  `dormitory_al` tinyint(4) DEFAULT '1',
  `active` tinyint(4) DEFAULT '1',
  `user_type` char(255) COLLATE utf8_persian_ci DEFAULT NULL,
  `job_title` char(255) COLLATE utf8_persian_ci DEFAULT NULL,
  `countryId` int(11) DEFAULT NULL COMMENT 'کدکشور ملیت',
  `nationality` char(50) COLLATE utf8_persian_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`id`),
  UNIQUE KEY `username` (`username`),
  KEY `users_ibfk_4` (`provinceId`),
  KEY `users_ibfk_1` (`departmentId`),
  KEY `users_ibfk_3` (`endTerm`),
  KEY `users_ibfk_2` (`startTerm`)
) ENGINE=MyISAM AUTO_INCREMENT=8833812338 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Temporary view structure for view `userlist`
--

DROP TABLE IF EXISTS `userlist`;
/*!50001 DROP VIEW IF EXISTS `userlist`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `userlist` AS SELECT 
 1 AS `fullName`,
 1 AS `id`,
 1 AS `username`,
 1 AS `password`,
 1 AS `firstName`,
 1 AS `lastName`,
 1 AS `nid`,
 1 AS `sid`,
 1 AS `cDate`,
 1 AS `lastLoginDate`,
 1 AS `fatherName`,
 1 AS `sex`,
 1 AS `address`,
 1 AS `phone`,
 1 AS `mobile`,
 1 AS `email`,
 1 AS `email2`,
 1 AS `role_id`,
 1 AS `birthdayDate`,
 1 AS `zip`,
 1 AS `provinceId`,
 1 AS `departmentId`,
 1 AS `startTerm`,
 1 AS `endTerm`,
 1 AS `religion`,
 1 AS `dormitory_al`,
 1 AS `active`,
 1 AS `user_type`,
 1 AS `job_title`,
 1 AS `countryId`,
 1 AS `nationality`,
 1 AS `departemntText`,
 1 AS `collegeText`*/;
SET character_set_client = @saved_cs_client;

--
-- Dumping events for database 'mehr'
--

--
-- Dumping routines for database 'mehr'
--
/*!50003 DROP FUNCTION IF EXISTS `constantText` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `constantText`(`cc` CHAR(100), `cat` CHAR(100)) RETURNS char(100) CHARSET utf8 COLLATE utf8_persian_ci
BEGIN

declare rr char(100);

select text from constant where value=cc and category=cat into rr;

return rr;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `timePosition` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `timePosition`(`offset` DATETIME) RETURNS char(1) CHARSET utf8 COLLATE utf8_persian_ci
BEGIN DECLARE result CHAR(1); 

if offset is null then

return null;

end if;

IF offset< NOW() THEN 

SET result= 'p'; 

else 

set result='f';

END IF; RETURN result; END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `timeStage` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `timeStage`(`start` DATETIME, `end` DATETIME) RETURNS varchar(20) CHARSET utf8 COLLATE utf8_persian_ci
BEGIN DECLARE result CHAR(1); 

if start>end  or start is null or end is null then

return null;

end if;

IF end< NOW() THEN 

SET result= 'p'; 

elseif start>now() then 

set result='f';

else

set result='c';

END IF; RETURN result; END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Final view structure for view `councillist`
--

/*!50001 DROP VIEW IF EXISTS `councillist`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `councillist` AS select `council`.`id` AS `id`,`council`.`entityId` AS `entityId`,`council`.`name` AS `name`,`council`.`startDate` AS `startDate`,`council`.`endDate` AS `endDate`,`council`.`active` AS `active`,`council`.`enrollmentStartDate` AS `enrollmentStartDate`,`council`.`enrollmentEndDate` AS `enrollmentEndDate`,`council`.`electionStartDate` AS `electionStartDate`,`council`.`electionEndDate` AS `electionEndDate`,`council`.`note` AS `note`,`entitylist`.`fullName` AS `entityFullName`,`councilmember`.`userId` AS `userId`,concat(`user`.`firstName`,' ',`user`.`lastName`) AS `secretaryFullName`,`timeStage`(`council`.`electionStartDate`,`council`.`electionEndDate`) AS `electionStatus`,`constantText`(`timeStage`(`council`.`electionStartDate`,`council`.`electionEndDate`),'timeStage') AS `electionStatusText`,`timeStage`(`council`.`enrollmentStartDate`,`council`.`enrollmentEndDate`) AS `enrollmentStatus`,`constantText`(`timeStage`(`council`.`enrollmentStartDate`,`council`.`enrollmentEndDate`),'timeStage') AS `enrollmentStatusText`,`timeStage`(`council`.`startDate`,`council`.`endDate`) AS `timeStage(startDate,endDate)`,`constantText`(`timeStage`(`council`.`startDate`,`council`.`endDate`),'timeStage') AS `constantText(timeStage(startDate,endDate),'timeStage')` from (((`council` left join `councilmember` on((`council`.`id` = `councilmember`.`councilId`))) left join `user` on(((`councilmember`.`userId` = `user`.`id`) and (`councilmember`.`role` = 'secretary')))) left join `entitylist` on((`entitylist`.`id` = `council`.`entityId`))) order by `council`.`startDate` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `councilmemberlist`
--

/*!50001 DROP VIEW IF EXISTS `councilmemberlist`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `councilmemberlist` AS select `councilmember`.`id` AS `id`,`councilmember`.`userId` AS `userId`,`councilmember`.`councilId` AS `councilId`,`councilmember`.`role` AS `role`,`constant`.`text` AS `roleText`,`userlist`.`fullName` AS `fullName`,`userlist`.`sid` AS `sid` from ((`councilmember` left join `constant` on(((`constant`.`value` = `councilmember`.`role`) and (`constant`.`category` = 'councilMembership')))) left join `userlist` on((`councilmember`.`userId` = `userlist`.`id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `departmentlist`
--

/*!50001 DROP VIEW IF EXISTS `departmentlist`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `departmentlist` AS select `department`.`id` AS `id`,`department`.`level` AS `level`,`department`.`name` AS `name`,`department`.`collegeId` AS `collegeId`,`department`.`cDate` AS `cDate`,`college`.`id` AS `collgegId`,`college`.`name` AS `collegeName` from (`department` left join `college` on((`college`.`id` = `department`.`collegeId`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `enrollerlist`
--

/*!50001 DROP VIEW IF EXISTS `enrollerlist`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `enrollerlist` AS select `enroller`.`userId` AS `userId`,`enroller`.`programId` AS `programId`,`enroller`.`status` AS `status`,`enroller`.`cDate` AS `enrollmentDate`,`userlist`.`fullName` AS `fullName`,`userlist`.`id` AS `id`,`userlist`.`username` AS `username`,`userlist`.`password` AS `password`,`userlist`.`firstName` AS `firstName`,`userlist`.`lastName` AS `lastName`,`userlist`.`nid` AS `nid`,`userlist`.`sid` AS `sid`,`userlist`.`cDate` AS `cDate`,`userlist`.`lastLoginDate` AS `lastLoginDate`,`userlist`.`fatherName` AS `fatherName`,`userlist`.`sex` AS `sex`,`userlist`.`address` AS `address`,`userlist`.`phone` AS `phone`,`userlist`.`mobile` AS `mobile`,`userlist`.`email` AS `email`,`userlist`.`email2` AS `email2`,`userlist`.`role_id` AS `role_id`,`userlist`.`birthdayDate` AS `birthdayDate`,`userlist`.`zip` AS `zip`,`userlist`.`provinceId` AS `provinceId`,`userlist`.`departmentId` AS `departmentId`,`userlist`.`startTerm` AS `startTerm`,`userlist`.`endTerm` AS `endTerm`,`userlist`.`religion` AS `religion`,`userlist`.`dormitory_al` AS `dormitory_al`,`userlist`.`active` AS `active`,`userlist`.`user_type` AS `user_type`,`userlist`.`job_title` AS `job_title`,`userlist`.`countryId` AS `countryId`,`userlist`.`nationality` AS `nationality`,`userlist`.`departemntText` AS `departemntText`,`userlist`.`collegeText` AS `collegeText`,`constant`.`text` AS `statusText` from ((`userlist` join `enroller` on((`userlist`.`id` = `enroller`.`userId`))) left join `constant` on(((`constant`.`value` = `enroller`.`status`) and (`constant`.`category` = 'enrollmentStatus')))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `enrollerview`
--

/*!50001 DROP VIEW IF EXISTS `enrollerview`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `enrollerview` AS select `enroller`.`programId` AS `programId`,`enroller`.`userId` AS `userId`,`enroller`.`status` AS `status`,`enroller`.`cDate` AS `cDate`,`enroller`.`totalPayment` AS `totalPayment`,`constant`.`id` AS `id`,`constant`.`text` AS `text`,`constant`.`value` AS `value`,`constant`.`category` AS `category` from (`enroller` left join `constant` on(((`constant`.`value` = `enroller`.`status`) and (`constant`.`category` = 'enrollmentStatus')))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `entitycouncil`
--

/*!50001 DROP VIEW IF EXISTS `entitycouncil`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `entitycouncil` AS select `g`.`id` AS `id`,count(`council`.`id`) AS `councilCount` from (`entity` `g` left join `council` on((`council`.`entityId` = `g`.`id`))) group by `g`.`id` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `entitylist`
--

/*!50001 DROP VIEW IF EXISTS `entitylist`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `entitylist` AS select `entity`.`id` AS `id`,`entity`.`name` AS `name`,`entity`.`type` AS `type`,`entity`.`manager` AS `manager`,`entity`.`cDate` AS `cDate`,`entity`.`details` AS `details`,`entity`.`audience` AS `audience`,`entity`.`councilMembers` AS `councilMembers`,`entity`.`understudyConcuilMembers` AS `understudyConcuilMembers`,`entity`.`subscription` AS `subscription`,`entity`.`charter` AS `charter`,`constant`.`text` AS `typeText`,`entitycouncil`.`councilCount` AS `councilCount`,count(`entitymember`.`userId`) AS `memberCount`,concat(`constant`.`text`,' ',`entity`.`name`) AS `fullName` from (((`entity` left join `entitymember` on((`entity`.`id` = `entitymember`.`entityId`))) left join `constant` on(((`entity`.`type` = `constant`.`value`) and (`constant`.`category` = 'entityType')))) left join `entitycouncil` on((`entitycouncil`.`id` = `entity`.`id`))) group by `entity`.`id` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `entitymemberlist`
--

/*!50001 DROP VIEW IF EXISTS `entitymemberlist`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `entitymemberlist` AS select `entitymember`.`id` AS `id`,`entitymember`.`userId` AS `userId`,`entitymember`.`entityId` AS `entityId`,`entitymember`.`role` AS `role`,`constant`.`text` AS `roleText`,`userlist`.`firstName` AS `firstName`,`userlist`.`lastName` AS `lastName`,`userlist`.`fullName` AS `fullName`,`userlist`.`sid` AS `sid` from ((`entitymember` left join `constant` on(((`constant`.`value` = `entitymember`.`role`) and (`constant`.`category` = 'membership')))) left join `userlist` on((`entitymember`.`userId` = `userlist`.`id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `post`
--

/*!50001 DROP VIEW IF EXISTS `post`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `post` AS select `program`.`id` AS `id`,'program' AS `type`,`program`.`cDate` AS `cDate` from `program` union select `entity`.`id` AS `id`,'entity' AS `type`,`entity`.`cDate` AS `d` from `entity` order by `cDate` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `programlist`
--

/*!50001 DROP VIEW IF EXISTS `programlist`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `programlist` AS select `program`.`id` AS `id`,`program`.`entityId` AS `entityId`,`program`.`name` AS `name`,`program`.`manager` AS `manager`,`program`.`type` AS `type`,`program`.`cDate` AS `cDate`,`program`.`uDate` AS `uDate`,`program`.`enrollmentStartDate` AS `enrollmentStartDate`,`program`.`enrollmentEndDate` AS `enrollmentEndDate`,`program`.`enrollmentMethod` AS `enrollmentMethod`,`program`.`executionEndDate` AS `executionEndDate`,`program`.`executionStartDate` AS `executionStartDate`,`program`.`minCapacity` AS `minCapacity`,`program`.`maxCapacity` AS `maxCapacity`,`program`.`cost` AS `cost`,`program`.`registerFee` AS `registerFee`,`program`.`paymentMethod` AS `paymentMethod`,`program`.`subject` AS `subject`,`program`.`level` AS `level`,`program`.`audienceLevel` AS `audienceLevel`,`program`.`audience` AS `audience`,`program`.`planId` AS `planId`,`program`.`sessions` AS `sessions`,`program`.`prerequisites` AS `prerequisites`,`program`.`details` AS `details`,`program`.`image` AS `image`,`program`.`location` AS `location`,`program`.`projectedCost` AS `projectedCost`,`program`.`income` AS `income`,`program`.`projectedIncome` AS `projectedIncome`,(`constantText`(`program`.`type`,'programType') collate utf8_persian_ci) AS `typeText`,`constantText`(`program`.`subject`,'subjet') AS `subjectText`,count(`enroller`.`programId`) AS `enrollerCount`,`e`.`fullName` AS `entityFullName`,`timeStage`(`program`.`enrollmentStartDate`,`program`.`enrollmentEndDate`) AS `enrollmentStatus`,`timeStage`(`program`.`executionStartDate`,`program`.`executionEndDate`) AS `executionStatus`,`constantText`(`timeStage`(`program`.`enrollmentStartDate`,`program`.`enrollmentEndDate`),'timeStage') AS `enrollmentStatusText`,`constantText`(`timeStage`(`program`.`executionStartDate`,`program`.`executionEndDate`),'timeStage') AS `executionStatusText` from ((`program` left join `enroller` on((`program`.`id` = `enroller`.`programId`))) left join `entitylist` `e` on((`e`.`id` = `program`.`entityId`))) group by `program`.`id` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `programuserlist`
--

/*!50001 DROP VIEW IF EXISTS `programuserlist`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `programuserlist` AS select `program`.`id` AS `id`,`program`.`entityId` AS `entityId`,`program`.`name` AS `name`,`program`.`image` AS `image`,`program`.`manager` AS `manager`,`program`.`type` AS `type`,`program`.`cDate` AS `cDate`,`program`.`enrollmentMethod` AS `enrollmentMethod`,`program`.`enrollmentStartDate` AS `enrollmentStartDate`,`program`.`enrollmentEndDate` AS `enrollmentEndDate`,`program`.`executionStartDate` AS `executionStartDate`,`program`.`executionEndDate` AS `executionEndDate`,`program`.`minCapacity` AS `minCapacity`,`program`.`maxCapacity` AS `maxCapacity`,`program`.`registerFee` AS `registerFee`,`program`.`paymentMethod` AS `paymentMethod`,`program`.`level` AS `level`,`program`.`subject` AS `subject`,`program`.`audienceLevel` AS `audienceLevel`,`program`.`audience` AS `audience`,`program`.`planId` AS `planId`,`program`.`sessions` AS `sessions`,`program`.`prerequisites` AS `prerequisites`,`program`.`details` AS `details`,`program`.`location` AS `location`,`program`.`cost` AS `cost`,`program`.`projectedCost` AS `projectedCost`,`program`.`income` AS `income`,`program`.`projectedIncome` AS `projectedIncome` from ((`program` left join `enroller` on((`program`.`id` = `enroller`.`programId`))) left join `user` on((`user`.`id` = `enroller`.`userId`))) where ((`user`.`id` = 821662215) or isnull(`user`.`id`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `userlist`
--

/*!50001 DROP VIEW IF EXISTS `userlist`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `userlist` AS select concat(`user`.`firstName`,' ',`user`.`lastName`) AS `fullName`,`user`.`id` AS `id`,`user`.`username` AS `username`,`user`.`password` AS `password`,`user`.`firstName` AS `firstName`,`user`.`lastName` AS `lastName`,`user`.`nid` AS `nid`,`user`.`sid` AS `sid`,`user`.`cDate` AS `cDate`,`user`.`lastLoginDate` AS `lastLoginDate`,`user`.`fatherName` AS `fatherName`,`user`.`sex` AS `sex`,`user`.`address` AS `address`,`user`.`phone` AS `phone`,`user`.`mobile` AS `mobile`,`user`.`email` AS `email`,`user`.`email2` AS `email2`,`user`.`role_id` AS `role_id`,`user`.`birthdayDate` AS `birthdayDate`,`user`.`zip` AS `zip`,`user`.`provinceId` AS `provinceId`,`user`.`departmentId` AS `departmentId`,`user`.`startTerm` AS `startTerm`,`user`.`endTerm` AS `endTerm`,`user`.`religion` AS `religion`,`user`.`dormitory_al` AS `dormitory_al`,`user`.`active` AS `active`,`user`.`user_type` AS `user_type`,`user`.`job_title` AS `job_title`,`user`.`countryId` AS `countryId`,`user`.`nationality` AS `nationality`,`department`.`name` AS `departemntText`,`college`.`name` AS `collegeText` from ((`user` left join `department` on((`department`.`id` = `user`.`departmentId`))) left join `college` on((`college`.`id` = `department`.`collegeId`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2014-11-27  9:45:21
