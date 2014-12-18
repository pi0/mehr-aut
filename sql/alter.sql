ALTER TABLE `user`
	CHANGE COLUMN `course` `course` VARCHAR(5) NULL DEFAULT NULL COMMENT 'دوره (روزانه - شبانه)' COLLATE 'utf8_persian_ci' AFTER `conditionalTerms`;


ALTER TABLE `user`
	CHANGE COLUMN `course` `course` VARCHAR(10) NULL DEFAULT NULL COMMENT 'دوره (روزانه - شبانه)' COLLATE 'utf8_persian_ci' AFTER `conditionalTerms`;

CREATE TABLE `dormitory` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(50) NOT NULL DEFAULT '0',
	`cDate` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
	`uDate` TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`)
)
COLLATE='utf8_persian_ci'
ENGINE=InnoDB
;

