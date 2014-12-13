<?php
require_once 'Mellat.php';
$m = new Mellat(1581085, 'ahura773', 23060009, 'http://192.69.208.194/pgu/vendor/Mellat/test.php');

if ($_POST['ResCode'] == 0) {
    $r = $m->verify($_POST['SaleReferenceId'], $_POST['SaleOrderId']);
    var_dump($r);
} else {
    echo $m->messages[$_POST['ResCode']];
}