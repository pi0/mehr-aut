<?php
require_once __DIR__ . '/../config/services.php';
require_once __DIR__ . '/BaseModel.php';
require_once __DIR__ . '/Council.php';

class EntityMember extends BaseModel
{
    public function getSource()
    {
        return "entitymember";
    }

    static function getMembership($entityId,$userId )
    {
        $result = self::query()->where("user=$userId")->andWhere("entity=$entityId")->execute()->getFirst();
        if ($result) {
            return $result;
        }
        return false;
    }
}