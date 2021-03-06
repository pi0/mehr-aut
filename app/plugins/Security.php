<?php

class Security extends Phalcon\Mvc\User\Plugin
{
    /**
     * @var Phalcon\Acl\Adapter\Memory
     */
    protected $_acl;

    public function __construct($dependencyInjector)
    {
        $this->_dependencyInjector = $dependencyInjector;
    }

    public function getAcl()
    {
        if (!$this->_acl) {
            try {
                $acl = new Phalcon\Acl\Adapter\Memory();

                $acl->setDefaultAction(Phalcon\Acl::DENY);

                //Register roles
                $acl->addRole(new Phalcon\Acl\Role('guest'));
                $acl->addRole(new Phalcon\Acl\Role('member'), 'guest');
                $acl->addRole(new Phalcon\Acl\Role('staff'), 'member');
                $acl->addRole(new Phalcon\Acl\Role('admin'), 'staff');

                $permission = [
                    'guest' => [
                        'index' => '*',
                        'user' => ['login', 'logout'],
                        'mehr' => ['js'],
                        'program' => '*',
                        'entity' => '*',
                        'api' => '*'
                    ],
                    'member' => [
                        'user' => '*',
                        'credit' => '*',
                    ],
                    'staff' => [
                        'mehr' => '*',
                        'user' => '*'
                    ],
                    'admin' => [
                        '*' => '*'
                    ]
                ];

                foreach ($permission as $role => $resources) {
                    if (!$acl->isRole('$k')) {
                        $acl->addRole(new Phalcon\Acl\Role($role));
                    }
                    foreach ($resources as $resource => $accesses) {
                        if ($resource <> '*') $acl->addResource(new Phalcon\Acl\Resource($resource), $accesses);
                        $acl->allow($role, $resource, $accesses);
                    }
                }
                $this->_acl = $acl;
            } catch (\Phalcon\Exception $e) {
                echo($e->getMessage());
                xdebug_break();
                die();
            }


        }

        return $this->_acl;
    }

    /**
     * This action is executed before execute any action in the application
     */
    public function beforeDispatch(Phalcon\Events\Event $event, Phalcon\Mvc\Dispatcher $dispatcher)
    {
        if ($this->session->auth and !isset($this->currentUser)) {
            $this->getDI()->setShared('currentUser', function () {
                $user = User::findFirst($this->session->auth);
                return $user;
            });
        }

        $controller = $dispatcher->getControllerName();
        $action = $dispatcher->getActionName();
        $acl = $this->getAcl();
        $role = $this->getCurrentRole();
        $this->session->set('role', $role);

        $allowed = $acl->isAllowed($role, $controller, $action);
        if ($allowed != Phalcon\Acl::ALLOW) {
            $this->response->redirect('');
            die("$controller/$action is not allowed for role:  $role");
        }

    }

    public function getCurrentRole()
    {
        $auth = $this->session->get('auth');
        if (!isset($this->session->auth)) {
            return 'guest';
        } elseif ($this->currentUser->type == 'a') {
            return 'admin';
        } else {
            return 'member';
        }
    }

    public function aclAllow()
    {
        $acl = $this->getAcl();
    }

}

