<?php
$router = new Phalcon\Mvc\Router(true);

//$router->removeExtraSlashes(true);
//$router->setDefaultController('index');
//$router->setDefaultAction('index');
//

//$router->add("[/]", array(
//    'controller' => 'index',
//    'action' => 'index'
//));

//$router->add('/:controller', array(
//    'controller' => 1,
//    'action' => 'index'
//));
//
//$router->add('/:controller/:action', array(
//    'controller' => 1,
//    'action' => 2,
//));

//$router->add('/:controller/[:action][/:params]', array(
//    'controller' => 1,
//    'action' => 2,
//    'params' => 3
//));
//
//$router->notFound(['controller' => 'index', 'action' => 'notfound']);
return $router;
