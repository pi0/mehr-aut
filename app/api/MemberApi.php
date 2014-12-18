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
            $extraFilter = [];
            $query = $this->queryBuilder('entitymemberlist');
            if (!isset($params->filters)) $params->filters = [];
            $query->where('entitymemberlist.entity=?0',[$params->entity]);
            $response = $this->extFilter($query, $params, [], $extraFilter);
            return $response;

//            $data = $this->db->fetchAll("SELECT * FROM entitymemberlist WHERE entity=:entity", Phalcon\Db::FETCH_ASSOC, ['entity' => $params->entity]);
//            $total = $this->db->fetchOne("SELECT count(*) FROM entitymemberlist WHERE entity=:entity", Phalcon\Db::FETCH_NUM, ['entity' => $params->entity]);
//            return (['data' => $data, 'total' => $total[0]]);
        }
    }

    function create($params)
    {
        $result = $this->db->execute('insert entitymember (user,entity,role) values (:user,:entity, :role) on duplicate key update role=:role ',
            ['entity' => $params->entity, 'user' => $params->user, 'role' => $params->role]);
        $affected = $this->db->affectedRows();
        if ($affected > 0) {
            return extJson(true, [], []);
        } else {
            return extJson(false, [], ['این فرد هم‌اکنون در لیست این برنامه هست.']);
        }
    }

    function destroy($params)
    {
        $result = $this->db->execute('DELETE FROM entitymember WHERE user=:user AND entity=:entity', ['entity' => $params->entity, 'user' => $params->user]);
        if ($result > 0) {
            return extJson(true, [], []);
        } else {
            return extJson(false, [], []);
        }
    }
}
