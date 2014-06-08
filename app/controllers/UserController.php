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

    function readAction($params=null)
    {
        if(!$params){
            $params=$_REQUEST;
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
            return paginator($query,$params,'user');
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
}
