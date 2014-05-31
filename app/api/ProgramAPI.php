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
            $data = $this->db->fetchAll("select * from programlist", Phalcon\Db::FETCH_ASSOC);
            $total = $this->db->fetchAll("select count(*) from programlist ", Phalcon\Db::FETCH_NUM);
            return (['data' => $data, 'total' => $total[0][0]]);
        }
    }

    function write()
    {
        $data = $_REQUEST;
        formPreProcess($data);
        $data['audience'] = serialize($data['audience']);

        $p = new Program();
        if ($p->save($data)) {
            return extJson(true, $p->toArray());
        } else {
            return extJson(false, $p->toArray(), extErrors($p->getMessages()));
        }

//        var_dump($P->getModelsMetaData()->getAttributes($P));
    }
}
