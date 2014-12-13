<?php


require_once '../../app/config/services.php';
echo $_SERVER['HTTP_HOST'].$di['config']['phalcon']['baseUri'];
require_once '../../app/models/BaseModel.php';
require_once '../../app/models/Payment.php';

$payment=Payment::findFirstByRefId((string)'AB0434C73D467F55');
$payment->set(['id'=>3]);
var_dump($payment->toArray());