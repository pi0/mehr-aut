<?php
$router = new Phalcon\Mvc\Router();

$router->removeExtraSlashes(true);
$router->setDefaultController('index');
$router->setDefaultAction('index');

$router->addGet('/rest/:controller', array(
    'controller' => 1,
    'action' => 'readAll',
));

$router->addGet('/rest/:controller/:int', array(
    'controller' => 1,
    'action' => 'read',
    'id' => 2
));

$router->addPost('/rest/:controller', array(
    'controller' => 1,
    'action' => 'create',
));

$router->addPut('/rest/:controller/:int', array(
    'controller' => 1,
    'action' => 'create',
    'id' => 2
));


//$router->addPatch('/rest/:controller/:id/:op', array(
//    'controller' => 1,
//    'action' => 'op',
//    'int' => 2,
//    'op' => 3
//));
//

$router->addPatch('/rest/:controller/:int', array(
    'controller' => 1,
    'action' => 'op',
    'id' => 2,
));

$router->addPatch('/rest/:controller', array(
    'controller' => 1,
    'action' => 'read',
));

$router->add('/logout', array(
    'controller' => 'user',
    'action' => 'logout',
));
//$router->notFound(['controller' => 'index', 'action' => 'notfound']);
return $router;
