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
        ExtDirect::$form_handlers = array( 'ProgramApi::write','UserApi::write','EntityApi::write' );
        ExtDirect::provide(['ProgramApi','UserApi','EntityApi']);
    }
    public function jsAction(){
        $db=$this->getDI()->get('db');

        $degrees=toJsArray($db->query('select id,name from degree where `level` is not null order by id')->fetchAll());
        $this->view->degree=$degrees;

        $programType=toJsArray($db->query('select `value`,text from constant where category="programType"')->fetchAll());
        $this->view->programType=$programType;

        $religion=toJsArray($db->query('select `value`,text from constant where category="religion"')->fetchAll());
        $this->view->religion=$religion;

        $entityType=toJsArray($db->query('select `value`,text from constant where category="entityType"')->fetchAll());
        $this->view->entityType=$entityType;

        $subject=toJsArray($db->query('select `value`,text from constant where category="subject"')->fetchAll());
        $this->view->subject=$subject;

        $audienceLevel=toJsArray($db->query('select `value`,text from constant where category="audienceLevel"')->fetchAll());
        $this->view->audienceLevel=$audienceLevel;

        $membership=toJsArray($db->query('select `value`,text from constant where category="membership"')->fetchAll());
        $this->view->membership=$membership;
    }
}