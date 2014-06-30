<?php
$router = new Phalcon\Mvc\Router(true);

$router->setDefaultController("index");
$router->setDefaultAction("index");

$router->add("/", array(
    'controller' => 'index',
    'action' => 'index'
));

$router->add('/help', array(
	'controller' => 'about',
	'action' => 'index'
));

$router->add('/s', array(
	'controller' => 'search',
	'action' => 'index',
));
$router->add('/s/{word}', array(
//$router->add('/s/(.+)', array(
	'controller' => 'search',
	'action' => 'index',
    'query' => 1
));

//$router->add('/search/([\pL\pZ\pM]+)', array(
$router->add('/search/{word}', array(
    'controller' => 'search',
    'action' => 'index',
    'query' => 1
));

$router->add('/search/autocomplete/:params', array(
    'controller' => 'search',
    'action' => 'autocomplete',
    'params' => 1
));
$router->add('/search/opensearch/:params', array(
    'controller' => 'search',
    'action' => 'opensearch',
    'params' => 1
));

$router->add('/:controller/:action/:params', array(
    'controller' => 1,
    'action' => 2,
    'params' =>3
));

return $router;