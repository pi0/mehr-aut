ALTER TABLE `user`
CHANGE COLUMN `provinceId` `provinceId` INT NULL DEFAULT NULL AFTER `zip`,
CHANGE COLUMN `departmentId` `department` INT NULL DEFAULT NULL AFTER `provinceId`,
ADD COLUMN `college` INT NULL DEFAULT NULL AFTER `department`,
ADD COLUMN `course` CHAR(50) NULL DEFAULT NULL AFTER `college`;
