<?php

require_once __DIR__ . '/../config/services.php';

class Enroller extends Phalcon\Mvc\Model
{
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

    function canEnroll($userId,$programId){
        $program = ProgramList::findFirst("id=$programId");
        if($program->executionStatus!='f'){
            return 'isPast' . $program->executionStatus;
        }
        $audience = $program->audience;
        $query = $this->queryBuilder('UserList')->columns(['UserList.id']);
        $audience = unserialize($audience);
        foreach ($audience as $k => $v) {
            switch ($k) {
                case 'entityMember':
                    $query->join('EntityMember', 'EntityMember.userId=UserList.id');
                    $query->inWhere('entityId', $v);
                    break;
                case 'sex':
                    if ($v == 'm' or $v == 'f') {$query->andWhere('sex=?0', [$v]);}
                    break;
                case 'educationStatus':
                    if ($v == 'current')
                        $query->andWhere('endTerm is null');
                    if ($v == 'finished')
                        $query->andWhere('endTerm is not null');
                    break;
                case 'religion':
                case 'nationality':
                case 'degree':
                case 'course':
                case 'college':
                case 'department':
                    $extraFilter[] = ['type' => 'list', 'field' => $k, 'value' => $v];
                    break;
            }
        }
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
