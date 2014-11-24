-- MySQL dump 10.13  Distrib 5.6.19, for Win64 (x86_64)
--
-- Host: localhost    Database: mehr2
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
) ENGINE=MyISAM AUTO_INCREMENT=116 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci ROW_FORMAT=DYNAMIC;
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
  `enrollmentStartDate` date DEFAULT NULL,
  `enrollmentEndDate` date DEFAULT NULL,
  `electionStartDate` date DEFAULT NULL,
  `electionEndDate` date DEFAULT NULL,
  `note` text COLLATE utf8_persian_ci,
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
 1 AS `name`,
 1 AS `entityId`,
 1 AS `userId`,
 1 AS `id`,
 1 AS `secretaryFullName`*/;
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
 1 AS `role`,
 1 AS `birthdayDate`,
 1 AS `zip`,
 1 AS `provinceId`,
 1 AS `departmentId`,
 1 AS `startTerm`,
 1 AS `endTerm`,
 1 AS `religion`,
 1 AS `dormitory_al`,
 1 AS `active`,
 1 AS `level`,
 1 AS `roleTitle`,
 1 AS `countryId`,
 1 AS `nationality`,
 1 AS `departemntText`,
 1 AS `collegeText`,
 1 AS `statusText`*/;
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
) ENGINE=MyISAM AUTO_INCREMENT=67 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Temporary view structure for view `entitylist`
--

DROP TABLE IF EXISTS `entitylist`;
/*!50001 DROP VIEW IF EXISTS `entitylist`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `entitylist` AS SELECT 
 1 AS `id`,
 1 AS `TYPE`,
 1 AS `typeText`,
 1 AS `name`,
 1 AS `fullName`,
 1 AS `councilCount`*/;
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
) ENGINE=MyISAM AUTO_INCREMENT=852552287 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci ROW_FORMAT=DYNAMIC;
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
-- Table structure for table `program`
--

DROP TABLE IF EXISTS `program`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `program` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `entityId` int(20) NOT NULL,
  `name` varchar(255) COLLATE utf8_persian_ci NOT NULL,
  `image` char(250) COLLATE utf8_persian_ci NOT NULL,
  `manager` bigint(20) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `cDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `enrollmentMethod` char(10) COLLATE utf8_persian_ci DEFAULT NULL,
  `enrollmentStartDate` datetime DEFAULT NULL,
  `enrollmentEndDate` datetime DEFAULT NULL,
  `executionStartDate` datetime DEFAULT NULL,
  `executionEndDate` datetime DEFAULT NULL,
  `minCapacity` int(4) unsigned DEFAULT NULL,
  `maxCapacity` int(4) unsigned DEFAULT NULL,
  `cost` bigint(3) unsigned DEFAULT NULL,
  `paymentMethod` char(1) COLLATE utf8_persian_ci DEFAULT NULL,
  `level` char(255) COLLATE utf8_persian_ci DEFAULT NULL,
  `subject` char(255) COLLATE utf8_persian_ci DEFAULT NULL,
  `audienceLevel` char(255) COLLATE utf8_persian_ci DEFAULT NULL,
  `audience` varchar(5000) COLLATE utf8_persian_ci DEFAULT NULL,
  `planId` int(20) DEFAULT NULL,
  `sessions` int(3) unsigned DEFAULT '1',
  `prerequisites` varchar(45) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'ندارد',
  `details` text COLLATE utf8_persian_ci,
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
 1 AS `cost`,
 1 AS `paymentMethod`,
 1 AS `level`,
 1 AS `subject`,
 1 AS `audienceLevel`,
 1 AS `audience`,
 1 AS `planId`,
 1 AS `sessions`,
 1 AS `prerequisites`,
 1 AS `details`,
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
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8_persian_ci DEFAULT NULL,
  `password` char(60) COLLATE utf8_persian_ci DEFAULT NULL,
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
  `role` bigint(20) DEFAULT NULL,
  `birthdayDate` date DEFAULT NULL,
  `zip` char(13) COLLATE utf8_persian_ci DEFAULT NULL,
  `provinceId` bigint(20) DEFAULT NULL,
  `departmentId` bigint(20) DEFAULT NULL,
  `startTerm` bigint(20) DEFAULT NULL,
  `endTerm` bigint(20) DEFAULT NULL,
  `religion` char(50) COLLATE utf8_persian_ci DEFAULT NULL,
  `dormitory_al` tinyint(4) DEFAULT '1',
  `active` tinyint(4) DEFAULT '1',
  `level` char(50) COLLATE utf8_persian_ci DEFAULT NULL,
  `roleTitle` char(50) COLLATE utf8_persian_ci DEFAULT NULL,
  `countryId` int(11) DEFAULT NULL COMMENT 'کدکشور ملیت',
  `nationality` char(50) COLLATE utf8_persian_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  KEY `users_ibfk_4` (`provinceId`),
  KEY `users_ibfk_1` (`departmentId`),
  KEY `users_ibfk_3` (`endTerm`),
  KEY `users_ibfk_2` (`startTerm`)
) ENGINE=MyISAM AUTO_INCREMENT=8833812345 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci ROW_FORMAT=DYNAMIC;
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
 1 AS `role`,
 1 AS `birthdayDate`,
 1 AS `zip`,
 1 AS `provinceId`,
 1 AS `departmentId`,
 1 AS `startTerm`,
 1 AS `endTerm`,
 1 AS `religion`,
 1 AS `dormitory_al`,
 1 AS `active`,
 1 AS `level`,
 1 AS `roleTitle`,
 1 AS `countryId`,
 1 AS `nationality`,
 1 AS `departemntText`,
 1 AS `collegeText`*/;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `councillist`
--

/*!50001 DROP VIEW IF EXISTS `councillist`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `councillist` AS select `council`.`name` AS `name`,`council`.`entityId` AS `entityId`,`councilmember`.`userId` AS `userId`,`council`.`id` AS `id`,concat(`user`.`firstName`,' ',`user`.`lastName`) AS `secretaryFullName` from ((`council` left join `councilmember` on((`council`.`id` = `councilmember`.`councilId`))) left join `user` on(((`councilmember`.`userId` = `user`.`id`) and (`councilmember`.`role` = 'secretary')))) order by `council`.`startDate` desc */;
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
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `enrollerlist` AS select `enroller`.`userId` AS `userId`,`enroller`.`programId` AS `programId`,`enroller`.`status` AS `status`,`enroller`.`cDate` AS `enrollmentDate`,`userlist`.`fullName` AS `fullName`,`userlist`.`id` AS `id`,`userlist`.`username` AS `username`,`userlist`.`password` AS `password`,`userlist`.`firstName` AS `firstName`,`userlist`.`lastName` AS `lastName`,`userlist`.`nid` AS `nid`,`userlist`.`sid` AS `sid`,`userlist`.`cDate` AS `cDate`,`userlist`.`lastLoginDate` AS `lastLoginDate`,`userlist`.`fatherName` AS `fatherName`,`userlist`.`sex` AS `sex`,`userlist`.`address` AS `address`,`userlist`.`phone` AS `phone`,`userlist`.`mobile` AS `mobile`,`userlist`.`email` AS `email`,`userlist`.`email2` AS `email2`,`userlist`.`role` AS `role`,`userlist`.`birthdayDate` AS `birthdayDate`,`userlist`.`zip` AS `zip`,`userlist`.`provinceId` AS `provinceId`,`userlist`.`departmentId` AS `departmentId`,`userlist`.`startTerm` AS `startTerm`,`userlist`.`endTerm` AS `endTerm`,`userlist`.`religion` AS `religion`,`userlist`.`dormitory_al` AS `dormitory_al`,`userlist`.`active` AS `active`,`userlist`.`level` AS `level`,`userlist`.`roleTitle` AS `roleTitle`,`userlist`.`countryId` AS `countryId`,`userlist`.`nationality` AS `nationality`,`userlist`.`departemntText` AS `departemntText`,`userlist`.`collegeText` AS `collegeText`,`constant`.`text` AS `statusText` from ((`userlist` join `enroller` on((`userlist`.`id` = `enroller`.`userId`))) left join `constant` on(((`constant`.`value` = `enroller`.`status`) and (`constant`.`category` = 'enrollmentStatus')))) */;
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
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `entitylist` AS select `entity`.`id` AS `id`,`entity`.`type` AS `TYPE`,`constant`.`text` AS `typeText`,`entity`.`name` AS `name`,concat(`constant`.`text`,' ',`entity`.`name`) AS `fullName`,count(`council`.`id`) AS `councilCount` from ((`entity` left join `council` on((`council`.`entityId` = `entity`.`id`))) left join `constant` on(((`entity`.`type` = `constant`.`value`) and (`constant`.`category` = 'entityType')))) group by `entity`.`id` */;
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
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `entitymemberlist` AS select `entitymember`.`id` AS `id`,`entitymember`.`userId` AS `userId`,`entitymember`.`entityId` AS `entityId`,`entitymember`.`role` AS `role`,`constant`.`text` AS `roleText`,`userlist`.`firstName` AS `firstName`,`userlist`.`lastName` AS `lastName`,`userlist`.`fullName` AS `fullName`,`userlist`.`sid` AS `sid` from ((`entitymember` left join `constant` on(((`constant`.`value` = `entitymember`.`role`) and (`constant`.`category` = 'membership')))) left join `userlist` on((`entitymember`.`userId` = `userlist`.`id`))) */;
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
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `programlist` AS select `program`.`id` AS `id`,`program`.`entityId` AS `entityId`,`program`.`name` AS `name`,`program`.`image` AS `image`,`program`.`manager` AS `manager`,`program`.`type` AS `type`,`program`.`cDate` AS `cDate`,`program`.`enrollmentMethod` AS `enrollmentMethod`,`program`.`enrollmentStartDate` AS `enrollmentStartDate`,`program`.`enrollmentEndDate` AS `enrollmentEndDate`,`program`.`executionStartDate` AS `executionStartDate`,`program`.`executionEndDate` AS `executionEndDate`,`program`.`minCapacity` AS `minCapacity`,`program`.`maxCapacity` AS `maxCapacity`,`program`.`cost` AS `cost`,`program`.`paymentMethod` AS `paymentMethod`,`program`.`level` AS `level`,`program`.`subject` AS `subject`,`program`.`audienceLevel` AS `audienceLevel`,`program`.`audience` AS `audience`,`program`.`planId` AS `planId`,`program`.`sessions` AS `sessions`,`program`.`prerequisites` AS `prerequisites`,`program`.`details` AS `details`,`ct`.`text` AS `typeText`,`cs`.`text` AS `subjectText`,count(`enroller`.`programId`) AS `enrollerCount`,`e`.`fullName` AS `entityFullName`,if(isnull(`program`.`enrollmentStartDate`),NULL,if((now() > `program`.`enrollmentEndDate`),'a',if((now() < `program`.`enrollmentStartDate`),'b','c'))) AS `enrollmentStatus`,if(isnull(`program`.`executionStartDate`),NULL,if((now() > `program`.`executionEndDate`),'a',if((now() < `program`.`executionStartDate`),'b','c'))) AS `executionStatus`,`ets`.`text` AS `enrollmentStatusText`,`ts`.`text` AS `executionStatusText` from ((((((`program` left join `enroller` on((`program`.`id` = `enroller`.`programId`))) left join `constant` `ct` on((`program`.`type` = `ct`.`value`))) left join `constant` `cs` on((`program`.`subject` = `cs`.`value`))) left join `entitylist` `e` on((`e`.`id` = `program`.`entityId`))) left join `constant` `ets` on(if((isnull(`program`.`enrollmentStartDate`) or isnull(`program`.`enrollmentStartDate`)),NULL,((if((now() > `program`.`enrollmentEndDate`),'a',if((now() < `program`.`enrollmentStartDate`),'b','c')) = `ets`.`value`) and (`ets`.`category` = 'timeStage'))))) left join `constant` `ts` on(if((isnull(`program`.`executionEndDate`) or isnull(`program`.`executionStartDate`)),NULL,((if((now() > `program`.`executionEndDate`),'a',if((now() < `program`.`executionStartDate`),'b','c')) = `ts`.`value`) and (`ts`.`category` = 'timeStage'))))) where (((`ct`.`category` = 'programType') or isnull(`ct`.`category`)) and ((`cs`.`category` = 'subject') or isnull(`cs`.`category`))) group by `program`.`id` */;
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
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `userlist` AS select concat(`user`.`firstName`,' ',`user`.`lastName`) AS `fullName`,`user`.`id` AS `id`,`user`.`username` AS `username`,`user`.`password` AS `password`,`user`.`firstName` AS `firstName`,`user`.`lastName` AS `lastName`,`user`.`nid` AS `nid`,`user`.`sid` AS `sid`,`user`.`cDate` AS `cDate`,`user`.`lastLoginDate` AS `lastLoginDate`,`user`.`fatherName` AS `fatherName`,`user`.`sex` AS `sex`,`user`.`address` AS `address`,`user`.`phone` AS `phone`,`user`.`mobile` AS `mobile`,`user`.`email` AS `email`,`user`.`email2` AS `email2`,`user`.`role` AS `role`,`user`.`birthdayDate` AS `birthdayDate`,`user`.`zip` AS `zip`,`user`.`provinceId` AS `provinceId`,`user`.`departmentId` AS `departmentId`,`user`.`startTerm` AS `startTerm`,`user`.`endTerm` AS `endTerm`,`user`.`religion` AS `religion`,`user`.`dormitory_al` AS `dormitory_al`,`user`.`active` AS `active`,`user`.`level` AS `level`,`user`.`roleTitle` AS `roleTitle`,`user`.`countryId` AS `countryId`,`user`.`nationality` AS `nationality`,`department`.`name` AS `departemntText`,`college`.`name` AS `collegeText` from ((`user` left join `department` on((`department`.`id` = `user`.`departmentId`))) left join `college` on((`college`.`id` = `department`.`collegeId`))) */;
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

-- Dump completed on 2014-07-11 13:15:31
