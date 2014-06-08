<?php
//$di = new Phalcon\DI\FactoryDefault();
//$db=new Phalcon\Db\Adapter\Pdo\Mysql([
//    'dbname'=>'mehr2',
//    'username'=>'root',
//    'password'=>'1111'
//]);
//$di->set('db',$db);
require_once __DIR__ . '/../config/services.php';


class CouncilMember extends Phalcon\Mvc\Model
{
    public function getSource()
    {
        return "councilmember";
    }

    public function initialize()
    {
//        $this->hasMany('id','councilmember','councilId');
    }
    public $note;
}

//$n=new CouncilMember();
//var_dump($n->findFirst()->toArray());