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
        $posts = [];

        $allIDs = $this->modelsManager->createBuilder()
            ->from('Post')
            ->limit(50)
            ->columns(['id', 'type'])
            ->getQuery()->execute()->toArray();

        foreach (['news', 'program', 'entity'] as $p) {
            $ids = array_filter(array_map(
                function ($val) use ($p) {
                    if ($val['type'] == $p) return $val['id'];
                },
                $allIDs));

            // If not item of a specific type found go for the new type
            if (!sizeof($ids)) continue;

            $tables = [
                'news' => 'News',
                'program' => 'ProgramList',
                'entity' => 'EntityList'
            ];

            $items = $this->modelsManager->createBuilder()
                ->orderBy('cDate desc')
                ->inWhere('id', $ids)
                ->from($tables[$p])
                ->getQuery()->execute()->toArray();
            $items = array_map(function ($v) use ($p) {
                $v['postType'] = $p;
                return $v;
            }, $items);

            $posts = array_merge($posts, $items);
        }

        $tid = 1; // temp id
        foreach ($posts as &$p) {
            $p['tic'] = $tid++;
        }

        usort($posts, function ($v, $w) {
            return strtotime($v['cDate']) < strtotime($w['cDate']);
        });


        jsonResponse($posts);
    }

    public function programAction()
    {
        $app = new Phalcon\Mvc\Micro();
        $app->setDI($this->di);
        $app->get('/api/program', function ($id = null) use ($app) {
            $query = $this->modelsManager->createBuilder()
                ->orderBy('cDate desc')
                ->from('ProgramList');
            if (isset($filter['text']) && $filter['text'] != null)
                $query->andWhere('.details like :s: OR name like :t:',
                    ['s' => '%' . $filter['text'] . '%', 't' => '%' . $filter['text'] . '%']);
            if (isset($filter['subject']) && $filter['subject'] != null) {
                $query->andWhere('.subject = :s:', ['s' => $filter['subject']]);
            }
            if (isset($filter['type']) && $filter['type'] != null) {
                $query->andWhere('.type = :s:', ['s' => $filter['type']]);
            }
            $data = $query->getQuery()->execute()->toArray();
            foreach ($data as $k => $v) {
                $data[$k]['details'] = ellipsis(strip_tags($v['details']));
                $data[$k]['postType'] = 'program';
            }
            jsonResponse($data);
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

    public function entityAction()
    {
        $app = new Phalcon\Mvc\Micro();
        $app->setDI($this->di);
        $app->get('/api/entity', function ($id = null) use ($app) {
            $query = $this->modelsManager->createBuilder()
                ->orderBy('cDate desc')
                ->from('EntityList');
            if (isset($filter['text']) && $filter['text'] != null)
                $query->andWhere('.details like :s: OR name like :t:',
                    ['s' => '%' . $filter['text'] . '%', 't' => '%' . $filter['text'] . '%']);
            if (isset($filter['subject']) && $filter['subject'] != null) {
                $query->andWhere('.subject = :s:', ['s' => $filter['subject']]);
            }
            if (isset($filter['type']) && $filter['type'] != null) {
                $query->andWhere('.type = :s:', ['s' => $filter['type']]);
            }
            $data = $query->getQuery()->execute()->toArray();
            foreach ($data as $k => $v) {
                $data[$k]['details'] = ellipsis(strip_tags($v['details']));
                $data[$k]['postType'] = 'entity';
            }
            jsonResponse($data);
        });
        $app->get('/api/entity/{id}', function ($id = null) {
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

    public function newsAction()
    {
        $app = new Phalcon\Mvc\Micro();
        $app->setDI($this->di);
        $app->get('/api/news', function ($id = null) use ($app) {
            $query = $this->modelsManager->createBuilder()
                ->orderBy('cDate desc')
                ->from('News');
            if (isset($filter['text']) && $filter['text'] != null)
                $query->andWhere('.details like :s: OR name like :t:',
                    ['s' => '%' . $filter['text'] . '%', 't' => '%' . $filter['text'] . '%']);
            if (isset($filter['subject']) && $filter['subject'] != null) {
                $query->andWhere('.subject = :s:', ['s' => $filter['subject']]);
            }
            if (isset($filter['type']) && $filter['type'] != null) {
                $query->andWhere('.type = :s:', ['s' => $filter['type']]);
            }
            $data = $query->getQuery()->execute()->toArray();
            foreach ($data as $k => $v) {
                if(isset($v['image']))
                    $data[$k]['image'] = $v['image'] .'/'. File::getName($v['image']);
                $data[$k]['details'] = ellipsis(strip_tags($v['details']));
                $data[$k]['postType'] = 'news';
            }
            jsonResponse($data);
        });
        $app->get('/api/news/{id}', function ($id = null) {
            $news = News::findFirst($id);
            $news->image = $news->image . '/' . File::getName($news->image);
            jsonResponse($news);
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


