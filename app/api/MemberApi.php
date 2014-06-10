<?php
error_reporting(E_ALL);
require_once __DIR__ . '/../config/services.php';

class MemberApi extends Phalcon\DI\Injectable
{
    function read($params)
    {
        if (!isset($params->entityId)) {
            return ['success' => 'false', 'errors' => ['No entity Specified!']];
        }
        if (isset($params->id)) {
//            $data = $u->findFirst("id=" . $params->id)->toArray();
            return (['data' => $data, 'success' => true]);
        } else {
            $data = $this->db->fetchAll("select * from entitymemberlist where entityId=:entityId", Phalcon\Db::FETCH_ASSOC, ['entityId' => $params->entityId]);
            $total = $this->db->fetchOne("select count(*) from entitymemberlist where entityId=:entityId", Phalcon\Db::FETCH_NUM, ['entityId' => $params->entityId]);
            return (['data' => $data, 'total' => $total[0]]);
        }
    }

    function create($params)
    {
        $result = $this->db->execute('insert entitymember (userId,entityId,role) values (:user,:entity, :role) on duplicate key update role=:role ', ['entity' => $params->entityId, 'user' => $params->userId,'role'=>$params->role]);
        $affected=$this->db->affectedRows();
        if ($affected > 0) {
            return extJson(true, [], []);
        } else {
            return extJson(false, [], ['این فرد هم‌اکنون در لیست این برنامه هست.']);
        }
    }

    function destroy($params)
    {
        $result = $this->db->execute('delete from entitymember where userId=:user and entityId=:entity', ['entity' => $params->entityId, 'user' => $params->userId]);
        if ($result > 0) {
            return extJson(true, [], []);
        } else {
            return extJson(false, [], []);
        }
    }
}
