<?php

require_once __DIR__ . '/../config/services.php';

class EntityApi extends BaseApi
{
    function __construct()
    {
        $this->db = $this->getDI()['db'];
    }

    function audience()
    {

        $db = $this->getDI()['db'];

        $colleges = $db->query('SELECT * FROM college');
        $colleges = $colleges->fetchAll();

        $departments = $db->query('SELECT * FROM department');
        $departments = $departments->fetchAll();

        $data = [];
        foreach ($colleges as $c) {
            foreach ($departments as $k => $d)
                if ($d['collegeId'] == $c['id']) {
                    $children[] = ['id' => $d['id'], 'leaf' => true, 'text' => $d['name'], 'checked' => false];
                    unset($departments[$k]);
                }
            $data[] = ['id' => $c['id'], 'text' => $c['name'], 'checked' => false, 'children' => $children];
            $children = [];
        }
        return $data;
    }

    function read($params)
    {
        $params = (array)$params;
        $id = @$params['id'];
        if ($id) {
            $p = new Entity();
            $data = $p->findFirst("id=$id")->toArray();
            formPostProcess($data);
            $data['audience'] = unserialize($data['audience']);
            return (['data' => $data, 'success' => true]);
        } else {
            $whitList = [];
            $query = $this->queryBuilder('EntityList');
            if (isset($params['user'])) {
                $query->join('EntityMember', ' EntityList.id=entity ')->where('user=?0', [$params['user']]);
            };
            $response = $this->extFilter($query, $params, $whitList);
            return ($response);
        }
    }

    function create()
    {
        $data = $_REQUEST;
        formPreProcess($data);
        $data['audience'] = serialize($data['audience']);
        $data['image'] = $this->handleUpload('image');
        $p = new Entity();
        if ($p->save($data)) {
            return extJson(true, $p->toArray());
        } else {
            return extJson(false, $p->toArray(), extErrors($p->getMessages()));
        }

//        var_dump($P->getModelsMetaData()->getAttributes($P));
    }

    function combo($params)
    {
        if (!isset($params->query)) {
            $params->query = '';
        }
        $data = $this->db->fetchAll("SELECT id ,concat(typeText,' ',name) AS text FROM entitylist WHERE fullName LIKE :query LIMIT 20", Phalcon\Db::FETCH_ASSOC, ['query' => '%' . $params->query . '%']);
        return ($data);
    }

    function destroy(){}
}
