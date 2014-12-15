<?php
require_once __DIR__ . '/../config/services.php';

class MemberApi extends BaseApi
{
    function read($params)
    {
        if (!isset($params->entity)) {
            return ['success' => 'false', 'errors' => ['No entity Specified!']];
        }
        if (isset($params->id)) {
//            $data = $u->findFirst("id=" . $params->id)->toArray();
            return (['data' => $data, 'success' => true]);
        } else {
            $data = $this->db->fetchAll("select * from entitymemberlist where entity=:entity", Phalcon\Db::FETCH_ASSOC, ['entity' => $params->entity]);
            $total = $this->db->fetchOne("select count(*) from entitymemberlist where entity=:entity", Phalcon\Db::FETCH_NUM, ['entity' => $params->entity]);
            return (['data' => $data, 'total' => $total[0]]);
        }
    }

    function create($params)
    {
        $result = $this->db->execute('insert entitymember (user,entity,role) values (:user,:entity, :role) on duplicate key update role=:role ',
            ['entity' => $params->entity, 'user' => $params->user,'role'=>$params->role]);
        $affected=$this->db->affectedRows();
        if ($affected > 0) {
            return extJson(true, [], []);
        } else {
            return extJson(false, [], ['این فرد هم‌اکنون در لیست این برنامه هست.']);
        }
    }

    function destroy($params)
    {
        $result = $this->db->execute('delete from entitymember where user=:user and entity=:entity', ['entity' => $params->entity, 'user' => $params->user]);
        if ($result > 0) {
            return extJson(true, [], []);
        } else {
            return extJson(false, [], []);
        }
    }
}
