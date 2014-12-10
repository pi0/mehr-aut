ALTER TABLE `user`
CHANGE COLUMN `provinceId` `provinceId` INT NULL DEFAULT NULL AFTER `zip`,
CHANGE COLUMN `departmentId` `department` INT NULL DEFAULT NULL AFTER `provinceId`,
ADD COLUMN `college` INT NULL DEFAULT NULL AFTER `department`,
ADD COLUMN `course` CHAR(50) NULL DEFAULT NULL AFTER `college`;

// adding image to the entity table
ALTER TABLE `entity`
	ADD COLUMN `image` CHAR(50) NULL AFTER `charter`;

//adding image to the `entitylist` view
ALTER ALGORITHM = UNDEFINED DEFINER=`root`@`localhost` VIEW `entitylist` AS select `entity`.`id` AS `id`,`entity`.`name` AS `name`,`entity`.`type` AS `type`,`entity`.`manager` AS `manager`,`entity`.`cDate` AS `cDate`,`entity`.`details` AS `details`,`entity`.`audience` AS `audience`,`entity`.`councilMembers` AS `councilMembers`,`entity`.`understudyConcuilMembers` AS `understudyConcuilMembers`,`entity`.`subscription` AS `subscription`,`entity`.`charter` AS `charter`,`constant`.`text` AS `typeText`,`entitycouncil`.`councilCount` AS `councilCount`,count(`entitymember`.`userId`) AS `memberCount`,concat(`constant`.`text`,' ',`entity`.`name`) AS `fullName`,`entity`.`image` AS `image` from (((`entity` left join `entitymember` on((`entity`.`id` = `entitymember`.`entityId`))) left join `constant` on(((`entity`.`type` = `constant`.`value`) and (`constant`.`category` = 'entityType')))) left join `entitycouncil` on((`entitycouncil`.`id` = `entity`.`id`))) group by `entity`.`id`  ;

// ghalat emlaE
ALTER ALGORITHM = UNDEFINED DEFINER=`root`@`localhost` VIEW `entitylist` AS select `entity`.`id` AS `id`,`entity`.`name` AS `name`,`entity`.`type` AS `type`,`entity`.`manager` AS `manager`,`entity`.`cDate` AS `cDate`,`entity`.`details` AS `details`,`entity`.`audience` AS `audience`,`entity`.`councilMembers` AS `councilMembers`,`entity`.`understudyConcuilMembers` AS `understudyCouncilMembers`,`entity`.`subscription` AS `subscription`,`entity`.`charter` AS `charter`,`constant`.`text` AS `typeText`,`entitycouncil`.`councilCount` AS `councilCount`,count(`entitymember`.`userId`) AS `memberCount`,concat(`constant`.`text`,' ',`entity`.`name`) AS `fullName`,`entity`.`image` AS `image` from (((`entity` left join `entitymember` on((`entity`.`id` = `entitymember`.`entityId`))) left join `constant` on(((`entity`.`type` = `constant`.`value`) and (`constant`.`category` = 'entityType')))) left join `entitycouncil` on((`entitycouncil`.`id` = `entity`.`id`))) group by `entity`.`id`  ;

// new fields of user table
ALTER TABLE `user`
	ADD COLUMN `takenUnits` TINYINT NULL DEFAULT NULL AFTER `college`,
	ADD COLUMN `passedUnits` TINYINT NULL DEFAULT NULL AFTER `takenUnits`,
	ADD COLUMN `average` FLOAT NULL DEFAULT NULL AFTER `passedUnits`,
	ADD COLUMN `conditionalTerms` FLOAT NULL DEFAULT NULL COMMENT 'ترم های مشروطی' AFTER `average`,
	CHANGE COLUMN `dormitory_al` `dormitory` INT NULL DEFAULT '1' AFTER `religion`;

	// latin names and image fields of user TABLE
	ALTER TABLE `user`
	ADD COLUMN `latinFirstName` VARCHAR(45) NULL DEFAULT NULL AFTER `firstName`,
	ADD COLUMN `latinLastName` VARCHAR(45) NOT NULL AFTER `lastName`,
	ADD COLUMN `image` VARCHAR(45) NOT NULL AFTER `latinLastName`;

	// making image field of user table NULLABLE
	ALTER TABLE `user`
	ALTER `image` DROP DEFAULT;
ALTER TABLE `user`
	CHANGE COLUMN `image` `image` VARCHAR(45) NULL COLLATE 'utf8_persian_ci' AFTER `latinLastName`;

// letting other fields of the user table (recently added fields) be NULL
 ALTER TABLE `user`
	ALTER `latinLastName` DROP DEFAULT;
ALTER TABLE `user`
	CHANGE COLUMN `latinLastName` `latinLastName` VARCHAR(45) NULL COLLATE 'utf8_persian_ci' AFTER `lastName`;

	// adding educational status to the user TABLE
	ALTER TABLE `user`
	ADD COLUMN `educationalStatus` TINYINT NULL DEFAULT NULL COMMENT 'وضعیت تحصیلی دانشجو' AFTER `endTerm`;

// adding birthday plkace to the user TABLE
ALTER TABLE `user`
	ADD COLUMN `birthdayPlace` VARCHAR(50) NULL DEFAULT NULL AFTER `birthdayDate`;

	ALTER TABLE `user`
	ADD COLUMN `maritalStatus` CHAR(50) NULL DEFAULT NULL AFTER `religion`;

	ALTER TABLE `user`
	CHANGE COLUMN `maritalStatus` `maritalStatus` CHAR(2) NULL DEFAULT NULL COLLATE 'utf8_persian_ci' AFTER `religion`;

	ALTER TABLE `user`
	ADD COLUMN `lastUniversity` CHAR(50) NULL DEFAULT NULL AFTER `nationality`,
	ADD COLUMN `lastDepartment` CHAR(50) NULL DEFAULT NULL AFTER `lastUniversity`;

	ALTER TABLE `user`
	ADD COLUMN `lastDegree` CHAR(2) NULL DEFAULT NULL AFTER `lastDepartment`;

