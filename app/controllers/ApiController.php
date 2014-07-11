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
        $app->get('/api/post', function ($id = null) use ($app) {
            $filter = $_REQUEST;
//            var_dump($filter);die();
            @$filter['postType'] || $filter['postType'] = 'program';
            $table = ucfirst($filter['postType']);
            $query = $this->modelsManager->createBuilder()
                ->from($table)//                ->limit(3)
            ;

            if (isset($filter['subject']) && $filter['subject'] != null) {
                $query->where($table . '.subject = :s:', ['s' => $filter['subject']]);
            }
            if (isset($filter['type']) && $filter['type'] != null) {
                $query->where($table . '.type = :s:', ['s' => $filter['type']]);
            }

            $data = $query->getQuery()->execute()->toArray();
            try{
            foreach ($data as $k => $v) {
                $data[$k]['details'] = ellipsis(strip_tags($v['details']));
            }
            }
            catch(\Phalcon\Exception $e){
                var_dump($e);
            }

//            var_dump($data);
//            die();

//        $resultset->to
//            var_dump($resultset->toArray());
//            die();

            if ($filter['postType'] == 'program') {
//                $data = $this->di['db']->fetchAll('select * from program', Phalcon\Db::FETCH_ASSOC);
            } elseif ($filter['postType'] == 'membership') {

            } elseif ($filter['postType'] == 'election') {

            }
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

    public function programAction()
    {
        $app = new Phalcon\Mvc\Micro();
        $app->setDI($this->di);
//
        $app->get('/api/program', function ($id = null) use ($app) {

            $data = $this->di['db']->fetchAll('select * from program', Phalcon\Db::FETCH_ASSOC);
            jsonResponse($data);
        });

        $app->get('/api/program/{id}', function ($id = null) {
            $data = $this->di['db']->fetchOne('select * from programList where id=:id', Phalcon\Db::FETCH_ASSOC, ['id' => $id]);
            jsonResponse($data);
        });

        $app->notFound(function () use ($app) {
            $app->response->setStatusCode(404, "Not Found")->sendHeaders();
            echo 'This is crazy, but this page was not found!';
        });
        $app->handle();
    }

    public function membershipAction()
    {
        $app = new Phalcon\Mvc\Micro();
        $app->setDI($this->di);
//
        $app->get('/api/membership', function ($id = null) use ($app) {
            $data = $this->di['db']->fetchAll('select * from entityList', Phalcon\Db::FETCH_ASSOC);
            jsonResponse($data);
        });

        $app->get('/api/membership/{id}', function ($id = null) {
            $data = $this->di['db']->fetchOne('select * from entityList where id=:id', Phalcon\Db::FETCH_ASSOC, ['id' => $id]);
            jsonResponse($data);
        });

        $app->notFound(function () use ($app) {
            $app->response->setStatusCode(404, "Not Found")->sendHeaders();
            echo 'This is crazy, but this page was not found!';
        });
        $app->handle();
    }
}


