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
        $this->view->user = $this->session['auth'] ? 'true' : 'false';
    }
}
