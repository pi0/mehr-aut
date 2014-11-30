<?php

class ApiController extends ControllerBase
{
    private function inAudience($id, $audience)
    {
        $query = $this->modelsManager->createBuilder()->from('User')->columns('User.id');
        $query->andWhere('User.id=:id:', ['id' => $id]);
        applyAudience($query, $audience);
        return $result = $query->getQuery()->execute()->count();
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
            @$filter['postType'] || $filter['postType'] = 'program';
            $table = ucfirst($filter['postType']);
            $query = $this->modelsManager->createBuilder()
                ->from($table)
                ->orderBy('executionStartDate desc');

            if (isset($filter['text']) && $filter['text'] != null)
                $query->andWhere($table . '.details like :s: OR name like :t:',
                    ['s' => '%' . $filter['text'] . '%', 't' => '%' . $filter['text'] . '%']);

            if (isset($filter['subject']) && $filter['subject'] != null) {
                $query->andWhere($table . '.subject = :s:', ['s' => $filter['subject']]);
            }
            if (isset($filter['type']) && $filter['type'] != null) {
                $query->andWhere($table . '.type = :s:', ['s' => $filter['type']]);
            }

            $data = $query->getQuery()->execute()->toArray();
            try {
                foreach ($data as $k => $v) {
                    $data[$k]['details'] = ellipsis(strip_tags($v['details']));
                }
            } catch (\Phalcon\Exception $e) {
                var_dump($e);
            }

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
//            jsonResponse($data);
        });
        $app->get('/api/program/{id}', function ($id = null) {
            $program = ProgramList::findFirstById($id);
            $uid = $this->di['session']['auth'];
            if ($program->executionStatus == 'p') {
                $program->status = 'executed';
            } elseif ($program->enrollmentStatus == 'f') {
                $program->status = 'enrollmentInFuture';
            } elseif ($program->enrollmentStatus == 'c' || ($program->enrollmentStatus = 'p' and $program->executoinStatus = 'f')) {
                if (!isset($this->di['session']['auth'])) {
                    $program->status = 'guest'; // need to log in
                } elseif ($this->inAudience($uid, $program->audience)) {
                    if ($program->enrollmentStatus == 'c') {
                        if ($program->enrollerCount && $program->maxCapacity <= $program->enrollerCount) {
                            $program->status = 'full';
                        } else {
                            $program->status = 'ok';
                        }
                    } else {
                        $program->status = 'notEligible';
                    }
                }
            }
            jsonResponse($program);
        });

        $app->notFound(function () use ($app) {
            $app->response->setStatusCode(404, "Not Found")->sendHeaders();
            echo 'This is crazy, but this page was not found!';
        });
        $app->handle();
    }

    public
    function membershipAction()
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


