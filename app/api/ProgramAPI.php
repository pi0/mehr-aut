<?php

require_once __DIR__ . '/../config/services.php';

class Enroller extends Phalcon\Mvc\Model
{
}

class ProgramList extends Phalcon\Mvc\Model
{
    public function getSource()
    {
        return "programlist";
    }
}


class ProgramApi extends BaseApi
{
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
            $p = new Program();
            $response = $p->findFirst("id=$id")->toArray();
            formPostProcess($response);
            $aud = unserialize($response['audience']);
            foreach ($aud as $k => $v) {
                if (is_array($v)) {
                    $response['audience[' . $k . '][]'] = $v;
                } else {
                    $response['audience[' . $k . ']'] = $v;
                }
            }

            return (['data' => $response, 'success' => true]);
        } else {
            $query = $this->queryBuilder('ProgramList')->orderBy('executionStartDate desc');
            if (isset($params['userId'])) {
                $query->join('Enroller', 'ProgramList.id=programId')->where('userId=?0', [$params['userId']]);
//                $params[] = ['type' => 'numeric', 'value' => $params['userId'], 'comparison' => 'eq', 'field' => 'userId'];
            };
            $response = $this->extFilter($query, $params);
            return ($response);
        }
    }

    function create()
    {
        $data = $_REQUEST;
        formPreProcess($data);
        $data['audience'] = serialize($data['audience']);
        $p = new Program();
        if ($p->save($data)) {
            return extJson(true, $p->toArray());
        } else {
            return extJson(false, $p->toArray(), (array)($p->getMessages()));
        }

//        var_dump($P->getModelsMetaData()->getAttributes($P));
    }
}
