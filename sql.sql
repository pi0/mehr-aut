SET GLOBAL log_output = 'TABLE';
SET GLOBAL general_log = 'ON';

select event_time,argument from mysql.general_log
where command_type="Query" and user_host like 'mehr%'
 order by event_time desc limit 10