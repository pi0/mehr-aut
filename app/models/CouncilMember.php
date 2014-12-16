<?php
require_once __DIR__ . '/../config/services.php';

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
    public $note;
}

//$n=new CouncilMember();
//var_dump($n->findFirst()->toArray());