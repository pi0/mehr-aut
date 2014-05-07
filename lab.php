<?php
/**
 * Created by PhpStorm.
 * User: Reza
 * Date: 3/11/14
 * Time: 9:22 PM
 */

$db = new PDO('mysql:dbname=mehr;host=127.0.0.1', 'root', '1111');

$r = $db->query('select discipline_id, (concat(title," ■ ",degree_title," ■ ",course_title)) as title from disciplines_ext order by title');
//var_dump($db->errorInfo());
$s = $r->fetchAll(PDO::FETCH_KEY_PAIR);

function phpArrayToJsArray($array)
{
    $o = [];
    foreach ($array as $k => $v) {
        $o[] = '{' . $k . ':"' . $v . '"}';
    }
    return '[' . implode(',', $o) . ']';

}

echo phpArrayToJsArray($s);


