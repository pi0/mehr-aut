REM mysqldump -d --skip-add-drop-table --routines --triggers --events -u root mehr   > schema-if-not-exist.sql --ignore-table=mehr.programlist 
mysqldump -d                       --routines --triggers --events -u root mehr   > schema.sql
mysqldump --no-create-info   -u root mehr constant country degree               > constant-tables.sql
mysqldump --no-create-info   -u root mehr                > all-tables.sql
