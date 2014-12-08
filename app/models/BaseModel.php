<?php
require_once __DIR__ . '/../config/services.php';

class BaseModel extends Phalcon\Mvc\Model
{
    public function getSource()
    {
        return strtolower(get_called_class());
    }

    public function  initialize()
    {
        $this->skipAttributes(['uDate','cDate']);
    }
}

