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
//        foreach ($this->session->getIterator() as $key => $value) {
//            var_dump($key);
//            var_dump($value);
//        };
//        die();
        if ($this->currentUser) {
            $u = $this->currentUser->toArray();
            $this->view->user = json_encode($u);
        }else{
            $this->view->user = 0;
        }
    }
}
