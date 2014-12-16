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