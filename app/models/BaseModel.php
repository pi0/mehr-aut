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
//        $this->skipAttributes(['uDate', 'cDate']);
        $this->addBehavior(new Phalcon\Mvc\Model\Behavior\Timestampable(
            array(
                'beforeCreate' => array(
                    'field' => 'cDate',
                    'format' => 'Y-m-d h:i'
                )
            )
        ));
        $this->addBehavior(new Phalcon\Mvc\Model\Behavior\Timestampable(
            array(
                'beforeUpdate' => array(
                    'field' => 'uDate',
                    'format' => 'Y-m-d h:i'
                )
            )
        ));
    }
}

