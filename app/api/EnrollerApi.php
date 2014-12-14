<?php
require_once __DIR__ . '/../config/services.php';

class EnrollerApi extends BaseApi
{
    function read($params)
    {
        if (!isset($params->program)) {
            return ['success' => 'false', 'errors' => ['No Program Specified!']];
        }
        if (isset($params->id)) {
//            $data = $u->findFirst("id=" . $params->id)->toArray();
            return (['data' => $data, 'success' => true]);
        } else {
            $data = $this->db->fetchAll("select id,program,user,firstName,lastName,nid,sid,sex,status,statusText from enrollerlist where program=:program", Phalcon\Db::FETCH_ASSOC, ['program' => $params->program]);
            $total = $this->db->fetchAll("select count(*) from enrollerlist where program=:program", Phalcon\Db::FETCH_NUM, ['program' => $params->program]);
            return (['data' => $data, 'total' => $total[0][0]]);
        }
    }

    function create($params)
    {
        $result = $this->db->execute('insert ignore enroller (user,program,status) values (:user,:program, :status) on duplicate key update status=:status ', ['program' => $params->program, 'user' => $params->id,'status'=>$params->status]);
        $affected=$this->db->affectedRows();
        if ($affected > 0) {
            return extJson(true, [], []);
        } else {
            return extJson(false, [], ['این فرد هم‌اکنون در لیست این برنامه هست.']);
        }
    }

    function destroy($params)
    {
        $result = $this->db->execute('delete from enroller where user=:user and program=:program', ['program' => $params->program, 'user' => $params->id]);
        if ($result > 0) {
            return extJson(true, [], []);
        } else {
            return extJson(false, [], []);
        }
    }
}
