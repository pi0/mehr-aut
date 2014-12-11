SET GLOBAL log_output = 'TABLE';
SET GLOBAL general_log = 'ON';

select event_time,argument from mysql.general_log
where command_type="Query" and user_host like 'mehr%'
 order by event_time desc limit 10;


SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = 'mehr2' AND TABLE_NAME = 'user';


# query to find a specific column of a table in a database
SELECT DISTINCT TABLE_NAME
    FROM INFORMATION_SCHEMA.COLUMNS
    WHERE COLUMN_NAME ='maritalStatus'
        AND TABLE_SCHEMA='mehr3';