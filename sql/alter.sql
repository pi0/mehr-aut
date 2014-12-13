CREATE TABLE `vote` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`userId` INT NOT NULL DEFAULT '0',
	`candidateId` INT NOT NULL DEFAULT '0',
	`councilId` INT NOT NULL DEFAULT '0',
	`cDate` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`)
)
COLLATE='utf8_persian_ci'
ENGINE=InnoDB;

ALTER ALGORITHM = UNDEFINED DEFINER=`root`@`localhost` VIEW `entitylist` AS SELECT `entity`.`id` AS `id`,`entity`.`name` AS `name`,`entity`.`type` AS `type`,`entity`.`manager` AS `manager`,`entity`.`cDate` AS `cDate`,
`entity`.`details` AS `details`,`entity`.`audience` AS `audience`,`entity`.`councilMembers` AS `councilMembers`,
`entity`.`understudyConcuilMembers` AS `understudyCouncilMembers`,`entity`.`subscription` AS `subscription`,`entity`.`charter` AS `charter`,
`constant`.`text` AS `typeText`,`entitycouncil`.`councilCount` AS `councilCount`, COUNT(`entitymember`.`userId`) AS `memberCount`,
 CONCAT(`constant`.`text`,' ',`entity`.`name`) AS `fullName`,`entity`.`image` AS `image`,
 (SELECT `council`.`id` FROM `council` WHERE `council`.`entityId`=`entity`.`id` ORDER BY `id` DESC LIMIT 1) AS `activeCouncilId`
FROM (((`entity`
LEFT JOIN `entitymember` ON((`entity`.`id` = `entitymember`.`entityId`)))
LEFT JOIN `constant` ON(((`entity`.`type` = `constant`.`value`) AND (`constant`.`category` = 'entityType'))))
LEFT JOIN `entitycouncil` ON((`entitycouncil`.`id` = `entity`.`id`)))
GROUP BY `entity`.`id` ;