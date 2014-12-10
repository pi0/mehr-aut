<?php
$router = new Phalcon\Mvc\Router(false);

$router->setDefaultController('index');
$router->setDefaultAction('index');
$router->removeExtraSlashes(true);

$router->notFound(['controller'=>'index','action'=>'notfound']);

$router->add("[/]", array(
    'controller' => 'index',
    'action' => 'index'
));

$router->add('/:controller', array(
    'controller' => 1
));

$router->add('/:controller/:action',array(
    'controller'=>1,
    'action'=>2,
));

$router->add('/:controller/:action/:params', array(
    'controller' => 1,
    'action' => 2,
    'params' =>3
));

return $router;