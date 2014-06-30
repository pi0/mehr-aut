<?php

class UserController extends ControllerBase
{
    public function initialize()
    {
        $this->view->setTemplateAfter('main');
        Phalcon\Tag::setTitle('واژه');
//        Phalcon\Tag::setTitle('| واژه: فرهنگ فارسی به فارسی');
        parent::initialize();
    }

    public function indexAction()
    {
    }

    function readAction($params = null)
    {
        if (!$params) {
            $params = $_REQUEST;
        }
//        var_dump($params);
//        die();
//        die($params->sort[0]->property.' '.$params->sort[0]->direction);
        $u = new User();
        if (isset($params->id)) {
            $data = $u->findFirst("id=" . $params->id)->toArray();
            return (['data' => $data, 'success' => true]);
        } else {
            $query = $u->query();
//            $data = $u->getModelsManager()->createBuilder()->where('firstName like :q: ')->bind(['q' => ($params->query) . '%'])->orderBy($sort)->execute();
//            echo $data = $u->query()->where('firstName like "علی"')->bind(['q'=>($params->query)])->limit($params->limit,$params->start)->orderBy($sort)->getPhql();
            return paginator($query, $params, 'user');
        }
    }

    function createAction()
    {
        $data = $_REQUEST;
        formPreProcess($data);
        $p = new Council();
        if ($p->save($data)) {
            return extJson(true, $p->toArray());
        } else {
            print_r($p->getMessages());
            return extJson(false, $p->toArray(), $p->getMessages());
        }

//        var_dump($P->getModelsMetaData()->getAttributes($P));
    }

    function loginAction()
    {
        $this->view->disable();
        {
            $request = (array)$this->request->getJsonRawBody();
            $data = $this->di['db']->fetchOne('select id, password,active from user where username=:username', Phalcon\Db::FETCH_ASSOC,
                ['username' => $request['username']]);
            if (password_verify($request['password'], $data['password'])) {
                $user = $this->di['db']->fetchOne('select id from user where username=:username', Phalcon\Db::FETCH_ASSOC,
                    ['username' => $request['username']]);
                $this->getDI()['session']->set('auth', $user['id']);

//                $this->getDI()['session']->set('user', $user);
                jsonResponse($user);
            } else {
                http_response_code(401);
                jsonResponse(['message' => 'شناسه و/یا گذرواژه وارد شده معتبر نمی‌باشد. ']);
            }
        }
    }

    function logoutAction()
    {
        $this->session->destroy();
        $this->response->redirect();
    }

    function passwordAction()
    {
        $jr = $this->jr;
        $this->view->disable();
        $new = $jr->newPassword;
        if (!password_verify($jr->password, $this->user->password)) {
            http_response_code(422);
            jsonResponse(['message' => 'گذرواژه فعلی درست نیست.']);
        } elseif ($jr->newPassword !== $jr->confirmPassword) {
            http_response_code(422);
            jsonResponse(['message' => 'گذرواژه جدید به تایید آن برابر نیست!']);

//        } elseif (strlen($new) < 6) {
//            http_response_code(422);
//            jsonResponse(['message' => 'گذرواژه انتخابی به اندازه کافی قوی نیست!']);
        } else {
            $this->user->password = password_hash($new, PASSWORD_BCRYPT);
            $this->user->save();
            jsonResponse([]);
        }
//        $data = $this->di['db']->fetchOne('select id, password,active from user where username=:username', Phalcon\Db::FETCH_ASSOC,
    }
}

