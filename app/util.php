<?php
/**
 * Created by PhpStorm.
 * User: Reza
 * Date: 5/11/14
 * Time: 9:46 PM
 */

function extJson($success = true, array $data = null)
{
    return json_encode(['success' => $success, 'data' => $data]);
}

function toJsArray(array $arr)
{
    header('content-type:application/javascript; charset=utf-8');

    $result = [];
    foreach ($arr as $k => $v) {
        $result[] = '[' . $v['id'] . ',"' . $v['name'] . '"]';
    }
    return '[' . implode(',', $result) . ']';
}