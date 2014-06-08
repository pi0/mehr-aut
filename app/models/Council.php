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


class Council extends Phalcon\Mvc\Model
{
    public function initialize()
    {
        $this->hasMany('id', 'CouncilMember', 'councilId');
    }
}

//$u = Council::findFirst(1);
//var_dump($u->getCouncilMember()->toArray());;

//$v=new Council();
//$v->entityId=3;
// $v->save();
//var_dump($v);