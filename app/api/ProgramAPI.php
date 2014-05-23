<?php

require_once __DIR__.'/../config/services.php';

class ProgramApi extends Phalcon\DI\Injectable
{
    function audience()
    {

        $db = $this->getDI()['db'];

        $colleges = $db->query('select * from college');
        $colleges = $colleges->fetchAll();

        $departments = $db->query('select * from department');
        $departments = $departments->fetchAll();


        $data = [];
        foreach ($colleges as $c) {
            foreach ($departments as $k => $d)
                if ($d['collegeId'] == $c['id']) {
                    $children[] = ['id' => $d['id'], 'leaf' => true, 'text' => $d['name'],'checked'=>false];
                    unset($departments[$k]);
                }
            $data[] = ['id' => $c['id'], 'text' => $c['name'], 'checked' => false, 'children' => $children];
            $children = [];
        }
        return $data;
    }

    function read($params)
    {
        $id = @$params->id;
        if ($id) {
            $p = new Program();
            $data = $p->findFirst("id=$id")->toArray();
            $data['audience'] = unserialize($data['audience']);
            return (['data' => $data, 'success' => true]);
        } else {
            $p = new Program();
            return ['data' => $p->find()->toArray(), 'success' => true,'total'=>$p->count()];
        }
    }

    function write()
    {
        $data = $_REQUEST;
        foreach ($data as $k => $v) {
            if ($v === '') {
                $data[$k] = null;
            }
            if ($v && preg_match('#Date$#u', $k)) {
                $data[$k] = jalaliToIso($v);
            }
        }
        $data['audience'] = serialize($data['audience']);

        $p = new Program();
        if ($p->save($data)) {
            return extJson(true, $p->toArray());
        } else {
            return extJson(false, $p->toArray(), $p->getMessages());
        }

//        var_dump($P->getModelsMetaData()->getAttributes($P));
    }
}
