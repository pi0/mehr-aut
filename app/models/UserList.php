<?php
//$di = new Phalcon\DI\FactoryDefault();
//$db=new Phalcon\Db\Adapter\Pdo\Mysql([
//    'dbname'=>'mehr2',
//    'username'=>'root',
//    'password'=>'1111'
//]);
//$di->set('db',$db);
require_once __DIR__ . '/../config/services.php';


class UserList extends BaseModel
{
    public function getSource()
    {
        return "userlist";
    }

}


//$u=new User;
//var_dump($u->findFirst()->toArray());;

//var_dump($u->getModelsMetaData()->getAttributes($u));