<?php
require_once __DIR__ . '/../config/services.php';

class CouncilApi extends BaseApi
{
    function read($params)
    {
        $params = (array)$params;
        if (isset($params['id'])) {
            $data = $this->db->fetchOne("SELECT * FROM council WHERE id=:id", Phalcon\Db::FETCH_ASSOC, ['id' => $params['id']]);
            return (['data' => fromDB($data), 'success' => true]);
        } else {
            $whitList = [];
            $query = $this->queryBuilder('CouncilList');
            if (isset($params['userId'])) {
                $query->join('CouncilMember', ' CouncilList.id=entityId ')->where('CouncilList.userId=?0', [$params['userId']]);
            } elseif (isset($params['userId'])) {
                $query->where('entityId=?0', [$params['entityId']]);
            };
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
        $result = $this->db->execute('DELETE FROM Council WHERE userId=:user AND programId=:program', ['program' => $params->programId, 'user' => $params->id]);
        if ($result > 0) {
            return extJson(true, [], []);
        } else {
            return extJson(false, [], []);
        }
    }
}
