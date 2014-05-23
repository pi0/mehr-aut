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




//echo(json_encode($data));