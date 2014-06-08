<?php
error_reporting(E_ALL);
require_once __DIR__ . '/../config/services.php';

class CouncilApi extends Phalcon\DI\Injectable
{
    function read($params)
    {
        if (isset($params->id)) {
            $data = $this->db->fetchOne("select * from council where id=:id", Phalcon\Db::FETCH_ASSOC, ['id' => $params->id]);
            return (['data' => fromDB($data), 'success' => true]);
        } else {
            if (!isset($params->entityId)) {
                return ['success' => 'false', 'errors' => ['Incomplete Request']];
            }
            $data =  $this->db->fetchAll("select name,entityId,userId,council.id as id,role,firstName,lastName from council left join councilmember on council.id=councilId left join user on userId=user.id and role='head' where  entityId=:entityId order by startDate desc", Phalcon\Db::FETCH_ASSOC, ['entityId' => $params->entityId]);
            $total = $this->db->fetchAll("select count(*) from Council  where entityId=:entityId", Phalcon\Db::FETCH_NUM, ['entityId' => $params->entityId]);
            return (['data' => $data, 'total' => $total[0][0]]);
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
//            var_dump($p->getMessages());
//            return extJson(false, $p->toArray(), $p->getMessages());
        }
    }

    function destroy($params)
    {
        $result = $this->db->execute('delete from Council where userId=:user and programId=:program', ['program' => $params->programId, 'user' => $params->id]);
        if ($result > 0) {
            return extJson(true, [], []);
        } else {
            return extJson(false, [], []);
        }
    }
}
