<?php

class IndexController extends ControllerBase
{
    public function initialize()
    {
        $this->view->setTemplateAfter('main');
        parent::initialize();
    }

    public function indexAction()
    {
    }

    public function jsAction()
    {
        $this->view->constants = json_encode($this->di['db']->fetchAll('select text as t, category as c, value as v from constant',Phalcon\Db::FETCH_ASSOC),JSON_UNESCAPED_UNICODE);
        $this->view->user = $this->session['auth'] ? 'true' : 'false';
    }
}
