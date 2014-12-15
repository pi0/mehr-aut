<?php
require_once __DIR__ . '/../config/services.php';

class CouncilApi extends BaseApi
{
    function read($params)
    {
        $params = (array)$params;
        if (isset($params['id']) && !isset($params['type'])) {
            $data = $this->db->fetchOne("SELECT * FROM council WHERE id=:id", Phalcon\Db::FETCH_ASSOC, ['id' => $params['id']]);
            return (['data' => fromDB($data), 'success' => true]);
        } else {
            $whitList = [];
            $query = $this->queryBuilder('CouncilList');
            if (isset($params['type']) && $params['type'] == 'user') {
                $query->join('CouncilMember', ' CouncilList.id=entity ')->where('CouncilList.user=?0', [$params['id']]);
            } elseif (isset($params['type']) && $params['type'] == 'entity') {
                $query->where('entity=?0', [$params['id']]);
            }
            $response = $this->extFilter($query, $params, $whitList);
            return ($response);
        }
    }

    function create()
    {
        $data = $_REQUEST;
        formPreProcess($data);
        $p = new Council();
        if ($p->save($data)) {
            return extJson(true, $p->toArray());
        } else {
            return extJson(false, $p->toArray(), $p->getMessages());
        }
    }

    function destroy($params)
    {
        $result = $this->db->execute('DELETE FROM Council WHERE user=:user AND program=:program', ['program' => $params->program, 'user' => $params->id]);
        if ($result > 0) {
            return extJson(true, [], []);
        } else {
            return extJson(false, [], []);
        }
    }
}
