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

    public function notFoundAction()
    {
        $this->response->setStatusCode(404, 'Not Found');
//        $this->view->pick('404/404');
    }

    public function jsAction()
    {
        $this->view->constants = json_encode($this->di['db']->fetchAll('SELECT text AS t, category AS c, value AS v FROM constant', Phalcon\Db::FETCH_ASSOC), JSON_UNESCAPED_UNICODE);
        $this->view->user = $this->session['auth'] ? 'true' : 'false';
    }
}
