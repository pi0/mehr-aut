<?php
require_once __DIR__ . '/../config/services.php';

class CouncilMemberApi extends BaseApi
{
    function read($params)
    {
        if (isset($params->id)) {
//            $data = $u->findFirst("id=" . $params->id)->toArray();
//            return (['data' => $data, 'success' => true]);
        } else {
            $data = $this->db->fetchAll("SELECT * FROM councilmemberlist WHERE councilId=:councilId", Phalcon\Db::FETCH_ASSOC, ['councilId' => $params->councilId]);
            $total = $this->db->fetchOne("SELECT count(*) FROM councilmember  WHERE councilId=:councilId", Phalcon\Db::FETCH_NUM, ['councilId' => $params->councilId]);
            return (['data' => $data, 'total' => $total[0]]);
        }
    }

    function create($params)
    {
        isset($params->id) || $params->id = null;
        if ($params->role == 'secretary') {
            $secretary = $this->db->fetchOne("SELECT *,count(*) AS count FROM councilmember  WHERE councilId=:councilId AND role='secretary'   ", Phalcon\Db::FETCH_ASSOC, ['councilId' => $params->councilId]);
            if ($secretary['count'] > 0 and $secretary['user'] != $params->user) {
                return extJson(false, [], ['role' => 'یک نهاد تنها می‌تواند یک دبیر داشته باشد.']);
            }

        }
        $result = $this->db->execute('insert councilmember (id,user,councilId,role) values (:id,:user,:councilId, :role) on duplicate key update role=:role ', ['id' => $params->id, 'councilId' => $params->councilId, 'user' => $params->user, 'role' => $params->role]);
        $affected = $this->db->affectedRows();
        if ($result) {
//            var_dump($this->db->lastInsertId() );
            $row = $this->db->fetchOne('SELECT * FROM councilmemberlist WHERE id=:id', Phalcon\Db::FETCH_ASSOC, ['id' => $this->db->lastInsertId()]);
            return extJson(true, $row, []);
        } else {
            return extJson(false, [], []);
        }
    }

    function destroy($params)
    {
        $result = $this->db->execute('DELETE FROM councilmember WHERE user=:user AND councilId=:councilId', ['councilId' => $params->councilId, 'user' => $params->user]);
        if ($result > 0) {
            return extJson(true, [], []);
        } else {
            return extJson(false, [], []);
        }
    }
}
