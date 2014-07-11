<?php
    $acl = new Phalcon\Acl\Adapter\Memory();

//    $acl->setDefaultAction(Phalcon\Acl::ALLOW);
            $acl->setDefaultAction(Phalcon\Acl::DENY);

//Register roles
    $acl->addRole(new Phalcon\Acl\Role('guest'));
    $acl->addRole(new Phalcon\Acl\Role('member'), 'guest');
    $acl->addRole(new Phalcon\Acl\Role('admin'), 'member');

    $acl->addResource(new Phalcon\Acl\Resource('user'), array('index', 'register', 'start', 'end'));
    $acl->addResource(new Phalcon\Acl\Resource('index'), array('index', 'js'));
    $acl->addResource(new Phalcon\Acl\Resource('mehr'), array('js'));
//            $acl->addResource(new Phalcon\Acl\Resource('session'), array('index', 'register', 'start', 'end'));

    $acl->allow('guest', 'index', array('index', 'js'));
    $acl->allow('guest', '*', '*');
    $acl->allow('guest', 'user', array('index', 'register', 'start', 'end'));


try {
} catch (\Phalcon\Exception $e) {
      var_dump($e->getMessage());
      var_dump($e->getTrace());
}


//echo $acl->isAllowed('guest','sddd','d');
var_dump([]==null);