<?php
require_once __DIR__ . '/../config/services.php';
require_once __DIR__ . '/../models/User.php';

class UserApi extends BaseApi
{
    function read($params)
    {
        if (isset($params->id)) {
            $u = new User();
            $data = $u->findFirst("id=" . $params->id)->toArray();
            unset($data['password']);
            $r = $this->pdo->prepare('SELECT resourceId FROM resource WHERE userId=?');
            $r->execute([$params->id]);
            $data['entityAdmin[]'] = $r->fetchAll(PDO::FETCH_COLUMN, 0);
            return (['data' => $data, 'success' => true]);
        } else {
            $extraFilter = [];
//            $whitList = ['id', 'firstName', 'lastName', 'nid', 'sid', 'sex', 'address', 'phone', 'mobile', 'email', 'role_id', 'birthdayDate', 'zip', 'provinceId', 'departmentId', 'startTerm', 'endTerm', 'religion', 'dormitory_al', 'active', 'user_type', 'job_title', 'countryId', 'nationality',];
            $query = $this->queryBuilder('UserList'); //->columns('id,firstName,lastName,sid,sex');
            if (!isset($params->filters)) $params->filters = [];
            if (isset($params->query)) {
                $q = ['q' => ($params->query) . '%'];
                $query
                    ->where('firstName like :q: ', $q)
                    ->orWhere('lastName like :q:', $q)
                    ->orWhere('nid like :q:', $q)
                    ->orWhere('sid like :q:', $q);
            }
            if (isset($params->audience)) {
                parse_str($params->audience, $formValues);
                if (isset($formValues['audience'])) {
                    $audiences = array_filter($formValues['audience']);
                    foreach ($audiences as $k => $v) {
                        if ($v <> [''] and $v) {
                            switch ($k) {
                                case 'sex':
                                    if ($v == 'm' or $v == 'f') $query->andWhere('sex=?0', [$v]);
                                    break;
                                case 'entityMember':
                                    $query->join('EntityMember', 'EntityMember.userId=User.id');
                                    $query->inWhere('entityId', $v);
                                    break;
                                case 'educationStatus':
                                    if ($v == 'current')
                                        $query->where('endTerm is null');
                                    if ($v == 'finished')
                                        $query->where('endTerm is not null');
                                    break;
                                case 'religion':
                                case 'nationality':
                                case 'degree':
                                case 'course':
                                case 'college':
                                case 'department':
                                    $query->inWhere($k, $v);
                                    break;
                            }

                        }
                    }
                }
            }
//            var_dump($query->getPhql());
//            var_dump($query->limit(4)->columns('UserList.id')->getQuery()->execute()->toArray());
            $response = $this->extFilter($query, $params, [], $extraFilter);
            return $response;
//            return paginator($query, $params, 'user');
        }
    }

    function create()
    {
        $data = $_REQUEST;
        $user = new User();
        if ($data['id']) {
            $user = User::findFirst($data['id']);
        }
        // Processing password
        if ($data['password'] == '') unset($data['password']);
        elseif ($data['password'] === $data['passwordVerify']) $data['password'] = password_hash($data['password'], PASSWORD_BCRYPT);

        formPreProcess($data);
        if ($user->save($data)) {
            $this->db->delete('resource', 'userId=?', [$user->id]);
            foreach ($data['entityAdmin'] as $entity) {
                $this->db->execute('INSERT INTO resource SET userId=?,resourceId=?,resourceType="entity",level="w"', [$user->id, $entity]);
            }
            if ($data['entityAdmin']) {
            }
            return extJson(true, $user->toArray());
        } else {
            return extJson(false, $user->toArray(), (array)$user->getMessages());
        }
    }
}