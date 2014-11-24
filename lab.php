<?php
require_once 'app/config/services.php';
$p = $di['db'];
//echo password_hash('1', PASSWORD_BCRYPT);
//$p->update('user',['password'],[password_hash('1', PASSWORD_DEFAULT)],'username="naderfar"');
var_dump((string)password_verify('1','$2y$10$9VydXuvlGjlHDQiVqybES.q84I3/HzcywFu400l6I1JXVCTBF9ady'));
