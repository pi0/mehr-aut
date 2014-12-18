ALTER TABLE `entitymember`
	ADD COLUMN `cDate` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP AFTER `role`,
	ADD COLUMN `uDate` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP AFTER `cDate`;

ALTER ALGORITHM = UNDEFINED DEFINER=`root`@`localhost` VIEW `entitylist` AS SELECT `entity`.`id` AS `id`,`entity`.`name` AS `name`,`entity`.`type` AS `type`,`entity`.`manager` AS `manager`,`entity`.`cDate` AS `cDate`,`entity`.`details` AS `details`,`entity`.`audience` AS `audience`,`entity`.`councilMembers` AS `councilMembers`,`entity`.`understudyConcuilMembers` AS `understudyCouncilMembers`,`entity`.`subscription` AS `subscription`,`entity`.`charter` AS `charter`,`constant`.`text` AS `typeText`,`entitycouncil`.`councilCount` AS `councilCount`, COUNT(`entitymember`.`user`) AS `memberCount`, CONCAT(`constant`.`text`,' ',`entity`.`name`) AS `fullName`,`entity`.`image` AS `image`,
(SELECT `id` FROM `council` WHERE entity=entity.id ORDER BY id LIMIT 1) AS council
FROM (((`entity`
LEFT JOIN `entitymember` ON((`entity`.`id` = `entitymember`.`entity`)))
LEFT JOIN `constant` ON(((`entity`.`type` = `constant`.`value`) AND (`constant`.`category` = 'entityType'))))
LEFT JOIN `entitycouncil` ON((`entitycouncil`.`id` = `entity`.`id`)))
GROUP BY `entity`.`id` ;

ALTER TABLE `file`
	CHANGE COLUMN `cDate` `cDate` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP AFTER `hash`;

ALTER TABLE `program`
	ADD COLUMN `imageFile` VARCHAR(50) NULL DEFAULT NULL AFTER `projectedIncome`;


ALTER ALGORITHM = UNDEFINED DEFINER=`root`@`localhost` VIEW `programlist` AS SELECT `program`.`id` AS `id`,`program`.`entity` AS `entity`,`program`.`name` AS `name`,`program`.`manager` AS `manager`,`program`.`type` AS `type`,`program`.`cDate` AS `cDate`,`program`.`uDate` AS `uDate`,`program`.`enrollmentStartDate` AS `enrollmentStartDate`,`program`.`enrollmentEndDate` AS `enrollmentEndDate`,`program`.`enrollmentMethod` AS `enrollmentMethod`,`program`.`executionEndDate` AS `executionEndDate`,`program`.`executionStartDate` AS `executionStartDate`,`program`.`minCapacity` AS `minCapacity`,`program`.`maxCapacity` AS `maxCapacity`,`program`.`cost` AS `cost`,`program`.`registerFee` AS `registerFee`,`program`.`paymentMethod` AS `paymentMethod`,`program`.`subject` AS `subject`,`program`.`level` AS `level`,`program`.`audienceLevel` AS `audienceLevel`,`program`.`audience` AS `audience`,`program`.`planId` AS `planId`,`program`.`sessions` AS `sessions`,`program`.`prerequisites` AS `prerequisites`,`program`.`details` AS `details`,`program`.`image` AS `image`,`program`.`location` AS `location`,`program`.`projectedCost` AS `projectedCost`,`program`.`income` AS `income`,`program`.`projectedIncome` AS `projectedIncome`, COUNT(`n`.`user`) AS `enrollerCount`,`e`.`fullName` AS `entityFullName`,`timeStage`(`program`.`enrollmentStartDate`,`program`.`enrollmentEndDate`) AS `enrollmentStatus`,`timeStage`(`program`.`executionStartDate`,`program`.`executionEndDate`) AS `executionStatus`
,`program`.`imageFile` AS `imageFile`
FROM ((`program`
LEFT JOIN `enroller` `n` ON((`program`.`id` = `n`.`program`)))
LEFT JOIN `entitylist` `e` ON((`e`.`id` = `program`.`entity`)))
GROUP BY `program`.`id` ;
