<?php
include_once "app/config/services.php";

//$di->get('')

//$builder = $this->modelsManager->createBuilder()
//    ->from('Table')
//    ->andWhere('name like :name:', array('name' => 'A%' ) );
//
//
//$paginator = new Phalcon\Paginator\Adapter\QueryBuilder(array(
//    "builder" => $builder,
//    "limit"=> 10,
//    "page" => 1
//));
//
//var_dump($paginator);

// Instantiate the Query
$query = new Phalcon\Mvc\Model\Query("SELECT * FROM User", $di);

// Execute the query returning a result if any
$cars = $query->execute();