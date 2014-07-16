<?php
require_once 'vendor/IntlDateTime/IntlDateTime.php';
$date = new IntlDateTime('1380-01-02', 'Asia/Tehran', 'persian');
$date->setCalendar('gregorian');
echo  $date->format('y-MM-dd'); // it should be 2001-03-22 but it returns 2001-03-21$date = new IntlDateTime('1380-01-02', 'Asia/Tehran', 'persian');

echo PHP_EOL;

$date = new IntlDateTime('1393-04-24', 'Asia/Tehran', 'persian');
$date->setCalendar('gregorian');
echo  $date->format('y-MM-dd'); // it works.