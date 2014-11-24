<?php
//$di = new Phalcon\DI\FactoryDefault();
//$db=new Phalcon\Db\Adapter\Pdo\Mysql([
//    'dbname'=>'mehr2',
//    'username'=>'root',
//    'password'=>'1111'
//]);
//$di->set('db',$db);
require_once __DIR__ . '/../config/services.php';
require_once 'CouncilMember.php';


class CouncilList extends BaseModel
{
    public function getSource()
    {
        return "councillist";
    }
}
