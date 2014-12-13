<?php
require_once 'Mellat.php';
$m = new Mellat(1581085, 'ahura773', 23060009, 'http://192.69.208.194/pgu/vendor/Payment/test.php');
$request = $m->redirect(1000, rand(1, 444));

echo $request;