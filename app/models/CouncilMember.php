<?php
require_once __DIR__ . '/../config/services.php';
require_once __DIR__ . '/BaseModel.php';
require_once __DIR__ . '/Council.php';

class CouncilMember extends BaseModel
{
    public function getSource()
    {
        return "councilmember";
    }

    public function initialize()
    {
//        $this->hasMany('id','councilmember','councilId');
    }

    static function isInActiveCouncil($userId, $entityId)
    {
        $result = CouncilMember::query()->join('Council','Council.id=CouncilMember.council')->where("user=$userId")->andWhere("entity=$entityId")->andWhere('active')->execute()->getFirst();
        if($result){
            return $result->role;
        }
        return false;
    }
}