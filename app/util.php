<?php
require_once '../vendor/jdf.php';
require_once '../app/config/services.php';
/**
 * Created by PhpStorm.
 * User: Reza
 * Date: 5/11/14
 * Time: 9:46 PM
 */

function extJson($success = true, array $data = null, $errors = [])
{
    $extError=[];
    foreach ($errors as $e) {
        $extError[$e->getField()]=$e->getMessage();
    }

    return ['success' => $success, 'data' => $data, 'errors' => $extError,''];
}

function toJsArray(array $arr)
{
    $result = [];
    foreach ($arr as $k => $v) {
        $result[] = '["' . $v['value'] . '","' . $v['text'] . '"]';
    }
//    var_dump($arr);die();
    return '[' . implode(',', $result) . ']';
}

function jalaliToIso($time)
{
    $time = '2003-1-1';
    $formatter = IntlDateFormatter::create('ir_FA@calendar=Persian', IntlDateFormatter::FULL,
        IntlDateFormatter::FULL, 'Asia/Tokyo', IntlDateFormatter::TRADITIONAL, 'y/m/d');

//    echo "before: ", $formatter->format($time), "\n";

    /* note that the calendar's locale is not used! */
    $formatter->setCalendar(IntlCalendar::createInstance(
        "Asia/Tehran", "en_UST@calendar=gregorian"));

    return $formatter->format($time);
//    $d = preg_split('#[^\d]+#', $date);
//    print_r($d);
//    $dd = jalali_to_gregorian($d[0], $d[1], $d[2]);
//    print_r($dd);
//    return $dd[0] . '-' . ($dd[1]) . '-' . ($dd[2]) . ' ' . @$d[3] . ' ' . @$d[4];
}

function isoToJalali($time = null)
{
    $time=new DateTime($time);
    $formatter = IntlDateFormatter::create('fa_IR@', IntlDateFormatter::FULL,
        IntlDateFormatter::FULL, 'Asia/Tokyo',null,'yy-MMMMM-dd');

//    var_dump($formatter->format(0));
//    var_dump($formatter->getErrorMessage());

    /* note that the calendar's locale is not used! */
    $formatter->setCalendar(IntlCalendar::createInstance(
        "Asia/Tehran", "en_US@calendar=Persian"));

    return $formatter->format($time);
//    $date = new DateTime($date);
//    $d = gregorian_to_jalali($date->format('Y'), $date->format('m'), $date->format('d'));
//    return $d[0] . '/' . str_pad($d[1], 2, '0', STR_PAD_LEFT) . '/' . str_pad($d[2], 2, '0', STR_PAD_LEFT) . ' ' . $date->format('H' . ':' . $date->format('i'));
}

function fromDB($data)
{
    foreach ($data as $k => $v) {
        if (preg_match('#Date$#', $k) && $v) {
            $data[$k] = date('m/d/Y', strtotime($v));
//            $data[$k] = isoToJalali($v);
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
            //TODO convert time from Solar to Gregorian
            $data[$k] = null;
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

echo isoToJalali('1393/3/15');
//echo jalaliToIso('1393/3/15');

function jsonResponse($response,$type='application/json')
{
    header('Content-Type: '.$type);
    echo json_encode($response);
}