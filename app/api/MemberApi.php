<?php
error_reporting(E_ALL);
require_once __DIR__ . '/../config/services.php';

class MemberApi extends Phalcon\DI\Injectable
{
    function read($params)
    {
        if (!isset($params->programId)) {
            return ['success' => 'false', 'errors' => ['No Program Specified!']];
        }
        if (isset($params->id)) {
//            $data = $u->findFirst("id=" . $params->id)->toArray();
            return (['data' => $data, 'success' => true]);
        } else {
            $data = $this->db->fetchAll("select id,programId,userId,firstName,lastName,nid,sid,sex,status,statusText from memberlist where programId=:programId", Phalcon\Db::FETCH_ASSOC, ['programId' => $params->programId]);
            $total = $this->db->fetchAll("select count(*) from memberlist where programId=:programId", Phalcon\Db::FETCH_NUM, ['programId' => $params->programId]);
            return (['data' => $data, 'total' => $total[0][0]]);
        }
    }

    function create($params)
    {
        $result = $this->db->execute('insert ignore member (userId,programId,status) values (:user,:program, :status) on duplicate key update status=:status ', ['program' => $params->programId, 'user' => $params->id,'status'=>$params->status]);
        $affected=$this->db->affectedRows();
        if ($affected > 0) {
            return extJson(true, [], []);
        } else {
            return extJson(false, [], ['این فرد هم‌اکنون در لیست این برنامه هست.']);
        }
    }

    function destroy($params)
    {
        $result = $this->db->execute('delete from member where userId=:user and programId=:program', ['program' => $params->programId, 'user' => $params->id]);
        if ($result > 0) {
            return extJson(true, [], []);
        } else {
            return extJson(false, [], []);
        }
    }
}
