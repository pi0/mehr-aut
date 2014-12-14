<?php

require_once __DIR__ . '/../config/services.php';

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

    function canEnroll($userId,$programId){
        $program = ProgramList::findFirst("id=$programId");
        if($program->executionStatus!='f'){
            return 'isPast' . $program->executionStatus;
        }
        $audience = $program->audience;
        $query = $this->queryBuilder('UserList')->columns(['UserList.id']);
        applyAudience($query,$audience);
        $query->andWhere('UserList.id=?0',[$userId]);
        if($query->getQuery()->execute()->count() == 0)
            return 'notValid';
        if($program->enrollmentStatus == 'c' && $program->enrollerCount >= $program->maxCapacity)
            return 'enroll';
        else
            return 'reserved';


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
            if (isset($params['user'])) {
                $query->join('Enroller', 'ProgramList.id=program')->where('user=?0', [$params['user']]);
//                $params[] = ['type' => 'numeric', 'value' => $params['user'], 'comparison' => 'eq', 'field' => 'user'];
            } else if(isset($params['entity']))
                $query->where('entity=?0',[$params['entity']]);

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
    }
}
