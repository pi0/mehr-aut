<?php

class UserController extends ControllerBase
{
    public function initialize()
    {
        $this->view->setTemplateAfter('main');
        parent::initialize();
    }


    function readAction($params = null)
    {
        if (!$params) {
            $params = $_REQUEST;
        }
        $u = new User();
        if (isset($params->id)) {
            $data = $u->findFirst("id=" . $params->id)->toArray();
            return (['data' => $data, 'success' => true]);
        } else {
            $query = $u->query();
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

    function currentUserAction()
    {
        $this->view->disable();
        if ($this->session['auth']) {
            $this->getSafeUserData();
        } else {
            jsonResponse('Please log in!');
        }
    }

    function loginAction()
    {
        $this->view->disable();
        {
            $request = (array)$this->request->getJsonRawBody();
            if (isset($request['username'])) {
                $user = User::findFirstByUsername($request['username']);
                if ($user && password_verify($request['password'], $user->password)) {
                    $this->getDI()['session']->set('auth', $user->id);
                }
            }
            if ($this->session['auth']) {
                $this->getSafeUserData();
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
        $user = $this->currentUser;
        $request = $this->request->getJsonRawBody();
        $this->view->disable();
        $new = $request->newPassword;
        if (!password_verify($request->password, $user->password)) {
            http_response_code(422);
            jsonResponse(['message' => 'گذرواژه فعلی درست نیست.']);
        } elseif ($request->newPassword !== $request->confirmPassword) {
            http_response_code(422);
            jsonResponse(['message' => 'گذرواژه جدید به تایید آن برابر نیست!']);
        } elseif (strlen($new) < 6) {
            http_response_code(422);
            jsonResponse(['message' => 'لطفا گذرواژه پیچیده‌تری با حداقل شش نویسه(حرف یا عدد) وارد نمایید.']);
        } else {
            $user->password = password_hash($new, PASSWORD_BCRYPT);
            $user->save();
            jsonResponse([]);
        }
    }

    private function getSafeUserData()
    {
        $user = $this->currentUser;
        $view = Util\Arr\subset($user->toArray(), ['firstName', 'lastName', 'id']);
        if ($user->type == 'a') $view['admin'] = true;
        jsonResponse($view);
    }

}

