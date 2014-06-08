<?php
error_reporting(E_ALL);
require_once __DIR__ . '/../config/services.php';

class UserApi extends Phalcon\DI\Injectable
{
    function read($params)
    {
        $u = new User();
        if (isset($params->id)) {
            $data = $u->findFirst("id=" . $params->id)->toArray();
            return (['data' => $data, 'success' => true]);
        } else {
            $query = $u->query();
            return paginator($query,$params,'user');
        }
    }

    function create()
    {
        $data = $_REQUEST;
        formPreProcess($data);
        $p = new User();
        if ($p->save($data)) {
            return extJson(true, $p->toArray());
        } else {
            var_dump($p->getMessages());
            return extJson(false, $p->toArray(), $p->getMessages());
        }
    }
}
