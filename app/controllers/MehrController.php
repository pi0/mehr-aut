<?php
require __DIR__.'/../../vendor/ExtDirect/ExtDirect.php';

class MehrController extends ControllerBase
{
    public function initialize()
    {
        $this->view->setTemplateAfter('main');
        Phalcon\Tag::setTitle('واژه');
//        Phalcon\Tag::setTitle('| واژه: فرهنگ فارسی به فارسی');
        parent::initialize();
    }

    public function indexAction()
    {
    }
    public function apiAction()
    {
        $this->view->disable();
        ExtDirect::$namespace = 'RPC';
        ExtDirect::$url = 'mehr/api';
        ExtDirect::$debug=true;
        ExtDirect::$descriptor = 'RPC.REMOTING_API';
        ExtDirect::$form_handlers = array( 'ProgramApi::write' );
        ExtDirect::provide(['ProgramApi']);
    }
    public function jsAction(){
        $db=$this->getDI()->get('db');

        $programType=toJsArray($db->query('select * from programType')->fetchAll());
        $this->view->programType=$programType;

        $degrees=toJsArray($db->query('select id,name from degree where `level` is not null')->fetchAll());
        $this->view->degree=$degrees;
    }
}
