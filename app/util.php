<?php
require_once '../vendor/jdf.php';
require_once '../app/config/services.php';
/**
 * Created by PhpStorm.
 * User: Reza
 * Date: 5/11/14
 * Time: 9:46 PM
 */

function extJson($success = true, array $data = null, $errors = null)
{
    return ['success' => $success, 'data' => $data, 'errors' => $errors];
}

function toJsArray(array $arr)
{
    header('content-type:application/javascript; charset=utf-8');

    $result = [];
    foreach ($arr as $k => $v) {
        $result[] = '["' . $v[0] . '","' . $v[1] . '"]';
    }
    return '[' . implode(',', $result) . ']';
}

function jalaliToIso($date)
{
    $d = preg_split('#[^\d]#', $date);
//    print_r($d);
    $dd = jalali_to_gregorian($d[0], $d[1], $d[2]);
    return $dd[0] . '-' . ($dd[1] + 1) . '-' . ($dd[2] + 2) . ' ' . $d[3] . ' ' . $d[4];
}

function isoToJalali($date = null)
{
    $date = new DateTime($date);
    $d = gregorian_to_jalali($date->format('Y'), $date->format('m'), $date->format('d'));
    return $d[0] . '/' . str_pad($d[1], 2, '0', STR_PAD_LEFT) . '/' . str_pad($d[2], 2, '0', STR_PAD_LEFT) . ' ' . $date->format('H' . ':' . $date->format('i'));
}

function toDB($data)
{
    foreach ($data as $k => $v) {
        if (preg_match('#Date$#', $k)) {
            $data[$k] = jalaliToIso($v);
        }
    }
    return $data;
}

function fromDB($data)
{
    foreach ($data as $k => $v) {
        if (preg_match('#Date$#', $k)) {
            $data[$k] = isoToJalali($v);
        }
    }
    return $data;
}

function formPreProcess(&$data)
{
    foreach ($data as $k => $v) {
        if ($v === '') {
            $data[$k] = null;
        }
        if ($v && preg_match('#Date$#u', $k)) {
//            $data[$k] = jalaliToIso($v);
        }
    }
}

function extErrors($msgs)
{
    $output = [];
    foreach ($msgs as $msg) {
        $output[$msg->getField()] = $msg->getMessage();
    }
    return $output;
}

function paginator($query, $params, $type = null)
{
    $params = (object)array_merge(['query' => null, 'limit' => 100, 'start' => 0], (array)$params);

    if ($params->query && $type == 'user') {
        $query
            ->where('firstName like :q: ')->orWhere('lastName like :q:')
            ->orWhere('nid like :q:')
            ->orWhere('sid like :q:')
            ->columns('id,firstName,lastName,sid,sex')
            ->bind(['q' => ($params->query) . '%']);
    }

    $total = $query->execute()->count();

    if (isset($params->sort)) {
        $query->orderBy($params->sort[0]->property . ' ' . $params->sort[0]->direction);
    }
    $data = $query->limit($params->limit, $params->start)->execute();
    return ['data' => $data->toArray(), 'total' => $total];
}

//echo(json_encode($data));