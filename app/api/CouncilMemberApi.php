<?php
require_once __DIR__ . '/../config/services.php';

class CouncilMemberApi extends BaseApi
{
    function read($params)
    {
        if (isset($params->id)) {
            $data = $this->db->fetchAll("SELECT * FROM councilmemberlist WHERE council=:council", Phalcon\Db::FETCH_ASSOC, ['council' => $params->id]);
            $total = $this->db->fetchOne("SELECT count(*) FROM councilmember  WHERE council=:council", Phalcon\Db::FETCH_NUM, ['council' => $params->id]);
            return (['data' => $data, 'total' => $total[0]]);
        }
    }

    function create($params)
    {
        isset($params->id) || $params->id = null;
        if ($params->role == 'secretary') {
            $secretary = $this->db->fetchOne("SELECT *,count(*) AS count FROM councilmember  WHERE council=:council AND role='secretary'   ", Phalcon\Db::FETCH_ASSOC, ['council' => $params->council]);
            if ($secretary['count'] > 0 and $secretary['user'] != $params->user) {
                return extJson(false, [], ['یک نهاد تنها می‌تواند یک دبیر داشته باشد.']);
            }
        }
        $member = CouncilMember::findFirst($params->id);
        $member->assign(['id' => $params->id, 'council' => $params->council, 'user' => $params->user, 'role' => $params->role]);
        $member->save();
        extJson($member->toArray());
    }

    function destroy($params)
    {
        $result = $this->db->execute('DELETE FROM councilmember WHERE user=:user AND council=:council', ['council' => $params->council, 'user' => $params->user]);
        if ($result > 0) {
            return extJson(true, [], []);
        } else {
            return extJson(false, [], []);
        }
    }
}
