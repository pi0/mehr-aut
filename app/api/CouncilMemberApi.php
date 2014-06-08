<?php
error_reporting(E_ALL);
require_once __DIR__ . '/../config/services.php';

class CouncilMemberApi extends Phalcon\DI\Injectable
{
    function read($params)
    {
        if (isset($params->id)) {
//            $data = $u->findFirst("id=" . $params->id)->toArray();
//            return (['data' => $data, 'success' => true]);
        } else {
            $data = $this->db->fetchAll("select * from councilmemberlist where councilId=:councilId", Phalcon\Db::FETCH_ASSOC, ['councilId' => $params->councilId]);
            $total = $this->db->fetchOne("select count(*) from councilmember  where councilId=:councilId", Phalcon\Db::FETCH_NUM, ['councilId' => $params->councilId]);
            return (['data' => $data, 'total' => $total[0]]);
        }
    }

    function create($params)
    {
        if ($params->role == 'secretary') {
            $secretary = $this->db->fetchOne("select *,count(*) as count from councilmember  where councilId=:councilId and role='secretary'   ", Phalcon\Db::FETCH_ASSOC, ['councilId' => $params->councilId]);
            if ($secretary['count'] > 0 and $secretary['userId'] != $params->userId) {
                return extJson(false, [], ['یک نهاد تنها می‌تواند یک دبیر داشته باشد.']);
            }

        }
        $result = $this->db->execute('insert councilmember (id,userId,councilId,role) values (:id,:userId,:councilId, :role) on duplicate key update role=:role ', ['id' => $params->id, 'councilId' => $params->councilId, 'userId' => $params->userId, 'role' => $params->role]);
        $affected = $this->db->affectedRows();
        if ($result) {
//            var_dump($this->db->lastInsertId() );
            $row = $this->db->fetchOne('select * from councilmemberlist where id=:id', Phalcon\Db::FETCH_ASSOC, ['id' => $this->db->lastInsertId()]);
            return extJson(true, $row, []);
        } else {
            return extJson(false, [], []);
        }
    }

    function destroy($params)
    {
        $result = $this->db->execute('delete from councilmember where userId=:userId and councilId=:councilId', ['councilId' => $params->councilId, 'userId' => $params->userId]);
        if ($result > 0) {
            return extJson(true, [], []);
        } else {
            return extJson(false, [], []);
        }
    }
}
