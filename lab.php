<?php

$x=['s','sa'=>33];
$X= serialize($x);
var_dump($X);
var_dump(unserialize($X));



