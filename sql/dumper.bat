mysqldump -d --routines --triggers --events  -u root mehr                                         > schema.sql
mysqldump --no-create-info                   -u root mehr constant country degree                 > data-fresh-install.sql
mysqldump --no-create-info                   -u root mehr                                         > data-all.sql
