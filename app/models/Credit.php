<?php
//$di = new Phalcon\DI\FactoryDefault();
//$db=new Phalcon\Db\Adapter\Pdo\Mysql([
//    'dbname'=>'mehr2',
//    'username'=>'root',
//    'password'=>'1111'
//]);
//$di->set('db',$db);
require_once __DIR__ . '/../config/services.php';
require_once __DIR__ . '/../models/BaseModel.php';

class Credit extends BaseModel
{
    static function currentCredit($uid)
    {
        return self::sum([
            'column' => 'amount',
            'conditions' => "user=" . $uid
        ]);
    }
}


