SET GLOBAL log_output = 'TABLE';
SET GLOBAL general_log = 'ON';
select * from mysql.general_log order by event_time desc