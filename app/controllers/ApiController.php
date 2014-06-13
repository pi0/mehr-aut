<?php

class ApiController extends Phalcon\Mvc\Controller
{

    protected function initialize()
    {
        $this->view->setVar('BASE', $this->url->getBaseUri());
//        Phalcon\Tag::prependTitle('Vajje.com | ');
    }

    public function postAction()
    {
        $app = new Phalcon\Mvc\Micro();
        $app->setDI($this->di);
//
        $app->get('/api/post', function ($id = null) use ($app) {
            $data = $this->di['db']->fetchAll('select * from program',Phalcon\Db::FETCH_ASSOC);
            jsonResponse($data);
        });

        $app->get('/api/post/{id}', function ($id = null) {
            echo "<h1>Welcome $id!</h1>";
        });

        $app->notFound(function () use ($app) {
            $app->response->setStatusCode(404, "Not Found")->sendHeaders();
            echo 'This is crazy, but this page was not found!';
        });
        $app->handle();
    }
}


