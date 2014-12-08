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