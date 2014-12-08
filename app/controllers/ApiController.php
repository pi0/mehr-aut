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

    protected function programEnrollmentStatus($program, $uid)
    {
        $status = null;
        if ($program->executionStatus == 'p') {
            $status = 'executed';
        } elseif ($program->enrollmentStatus == 'f') {
            $status = 'enrollmentInFuture';
        } elseif ($program->enrollmentStatus == 'c' || ($program->enrollmentStatus == 'p' and $program->executoinStatus == 'f')) {
            if (!isset($this->di['session']['auth'])) {
                $status = 'guest'; // need to log in
            } else {
                $enroller = Enroller::findFirst(['conditions' => 'userId=?0 and programId=?1', 'bind' => [$uid, $program->id]]);
                if ($enroller) {
                    $status = 'enrolled';
                    $program->enroller = $enroller->toArray();
                } elseif ($this->inAudience($uid, $program->audience)) {
                    if ($program->enrollmentStatus == 'c') {
                        if ($program->enrollerCount && $program->maxCapacity <= $program->enrollerCount) {
                            $status = 'full';
                        } else {
                            $status = 'ok';
                        }
                    }
                } else {
                    $status = 'notEligible';
                }
            }
        } elseif ($program->enrollmentStatus == null) {
            $status = 'unknown';
        }
        return $status;
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
                ->getQuery()
                ->execute()
                ->toArray();
            $items = array_map(function ($v) use ($p) {
                $v['postType'] = $p;
                return $v;
            }, $items);

            $posts = array_merge($posts, $items);
        }

        $tid = 1; // temp id()
        foreach ($posts as &$p) {
            if(isset($p['details']))
                $p['details'] = ellipsis($p['details']);
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
            $programArray = $program->toArray();
            $programArray['userEnrollmentStatus'] = $this->programEnrollmentStatus($program, $uid);
            if ($programArray['userEnrollmentStatus'] == 'enrolled') {
                $programArray['enroller'] = Enroller::findFirst(['conditions' => 'userId=?0 and programId=?1', 'bind' => [$uid, $program->id]]);
            }
            jsonResponse($programArray);
        });
        $app->patch('/api/program/{id}', function ($id = null) {
            $request = $this->request->getJsonRawBody();
            $program = ProgramList::findFirstById($id);
            $uid = $this->di['session']['auth'];
            $userEnrollmentStatus = $this->programEnrollmentStatus($program, $uid);
            $programArray = $program->toArray();
            $programArray['userEnrollmentStatus'] = $userEnrollmentStatus;
            if (isset($request->unenroll) && $userEnrollmentStatus == 'enrolled') {
                $enroller = Enroller::findFirst(['conditions' => 'userId=?0 and programId=?1', 'bind' => [$uid, $program->id]]);
                $enroller->delete();
                $programArray['userEnrollmentStatus'] = $this->programEnrollmentStatus($program, $uid);
                jsonResponse($programArray);
            } elseif (isset($request->enroll) && in_array($userEnrollmentStatus, ['ok', 'full'])) {
                if ($program->registerFee > 0) {

                } else {
                    $enroller = new Enroller();
                    $enroller->userId = $uid;
                    $enroller->programId = $id;
                    $enroller->status = ($userEnrollmentStatus == 'ok') ? 'final' : 'reserved';
                    if ($enroller->save()) {
                        $programArray['userEnrollmentStatus'] = $this->programEnrollmentStatus($program, $uid);
                        $programArray['enroller'] = $enroller->toArray();
                        jsonResponse($programArray);
                    } else {
                        jsonResponse($enroller->getMessages());
                    }
                }
            }
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
                $data[$k]['image'] = ($data[$k]['image']!=null)?File::getHashName($data[$k]['image']):false;
                $data[$k]['details'] = ellipsis(strip_tags($v['details']));
                $data[$k]['postType'] = 'entity';
            }
            jsonResponse($data);
        });
        $app->get('/api/entity/{id}', function ($id = null) {
            $entity = EntityList::findFirst(['id'=>$id]);
            $entity->image = ($entity->image!=null)?File::getHashName($entity->image):false;
            jsonResponse($entity);
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
                if (isset($v['image']))
                    $data[$k]['image'] =($data[$k]['image'] != null) ? ($data[$k]['image'] . '/' . File::getName($data[$k]['image'])) : 0;
                $data[$k]['details'] = ellipsis(strip_tags($v['details']));
                $data[$k]['postType'] = 'news';
            }
            jsonResponse($data);
        });
        $app->get('/api/news/{id}', function ($id = null) {
            $news = News::findFirst($id);
            $news->image = ($news->image != null) ? (File::getHashName($news->image)) : 0;
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