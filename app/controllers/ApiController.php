<?php

class ApiController extends ControllerBase
{
    private function inAudience($id, $audience)
    {
        $audiences = array_filter($audience);
        foreach ($audiences as $k => $v) {
            switch ($k) {
                case 'sex':
                    if ($v == 'm' or $v == 'f') $query->where('sex=?0', [$v]);
                    break;
                case 'entityMember':
                    $query->join('EntityMember', 'EntityMember.userId=UserList.id');
                    $query->inWhere('entityId', $v);
                    break;
                case 'educationStatus':
                    if ($v == 'current')
                        $query->where('endTerm is null');
                    if ($v == 'finished')
                        $query->where('endTerm is not null');
                    break;
                case 'religion':
                case 'nationality':
                case 'degree':
                case 'course':
                case 'college':
                case 'department':
                    $extraFilter[] = ['type' => 'list', 'field' => $k, 'value' => $v];
                    break;
            }
        }
    }

    protected function initialize()
    {
        $this->view->setVar('BASE', $this->url->getBaseUri());
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
                ->from($table)
                ->orderBy('executionStartDate desc');

            if (isset($filter['text']) && $filter['text'] != null)
                $query->where($table . '.details like :s: OR name like :t:',
                    ['s' => '%' . $filter['text'] . '%', 't' => '%' . $filter['text'] . '%']);

            if (isset($filter['subject']) && $filter['subject'] != null) {
                $query->where($table . '.subject = :s:', ['s' => $filter['subject']]);
            }
            if (isset($filter['type']) && $filter['type'] != null) {
                $query->where($table . '.type = :s:', ['s' => $filter['type']]);
            }

            $data = $query->getQuery()->execute()->toArray();
            try {
                foreach ($data as $k => $v) {
                    $data[$k]['details'] = ellipsis(strip_tags($v['details']));
                }
            } catch (\Phalcon\Exception $e) {
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
        $app->get('/api/program', function ($id = null) use ($app) {
            $query = $this->modelsManager->createBuilder()->from('ProgramEnroller')
                ->where('userId=?0', [$this->user->id]);
            var_dump($this->user->id);
//            $data = $this->di['db']->fetchAll('select * from programenroller', Phalcon\Db::FETCH_ASSOC);
            jsonResponse($data);
        });
        $app->get('/api/program/{id}', function ($id = null) {
            $data = $this->di['db']->fetchOne('SELECT * FROM programList WHERE id=:id', Phalcon\Db::FETCH_ASSOC, ['id' => $id]);
            $pApi = new ProgramApi;
            if (isset($this->di['session'])) {
                $data['status'] = 'guest'; // need to log in
            } else {
                die($this->inAudience($this->di['session']['user']->id,$id));
//                $data['status'] = $pApi->canEnroll($this->di['session']['user']->id, $id);
            }
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
            $data = $this->di['db']->fetchAll('SELECT * FROM entityList', Phalcon\Db::FETCH_ASSOC);
            jsonResponse($data);
        });
        $app->get('/api/membership/{id}', function ($id = null) {
            $data = $this->di['db']->fetchOne('SELECT * FROM entityList WHERE id=:id', Phalcon\Db::FETCH_ASSOC, ['id' => $id]);
            jsonResponse($data);
        });
        $app->notFound(function () use ($app) {
            $app->response->setStatusCode(404, "Not Found")->sendHeaders();
            echo 'This is crazy, but this page was not found!';
        });
        $app->handle();
    }
}


