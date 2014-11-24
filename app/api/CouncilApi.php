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
            if (!isset($params['userId']) and !isset($params['entityId'])) {
                return ['success' => 'false', 'errors' => ['Incomplete Request']];
            }
            $whitList = [];
            $query = $this->queryBuilder('CouncilList');
            if (isset($params['userId'])) {
                $query->join('CouncilMember', ' CouncilList.id=entityId ')->where('CouncilList.userId=?0', [$params['userId']]);
            } else {
                $query->where('entityId=?0', [$params['entityId']]);
            };
            $response = $this->extFilter($query, $params, $whitList);
            return ($response);
//            $data =  $this->db->fetchAll("select * from councillist where  entityId=:entityId   ", Phalcon\Db::FETCH_ASSOC, ['entityId' => $params->entityId]);
//            $total = $this->db->fetchAll("select count(*) from Council  where entityId=:entityId", Phalcon\Db::FETCH_NUM, ['entityId' => $params->entityId]);
//            return (['data' => $data, 'total' => $total[0][0]]);
        }
    }

    function create()
    {
        $data = $_REQUEST;
//        print_r($data);
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
