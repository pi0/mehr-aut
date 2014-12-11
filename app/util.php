<?php
require_once '../vendor/IntlDateTime/IntlDateTime.php';
require_once '../app/config/services.php';
/**
 * Created by PhpStorm.
 * User: Reza
 * Date: 5/11/14
 * Time: 9:46 PM
 */

function extJson($success = true, array $data = null, $errors = [])
{
    $extError = [];

    foreach ($errors as $k => $e) {
        if ($e instanceof Phalcon\Mvc\Model\MessageInterface) {
            $extError[$e->getField()] = $e->getMessage();
        } else {
            $extError[$k] = $e;
        }
    }

    return ['success' => $success, 'data' => $data, 'errors' => $extError, ''];
}

function toJsArray(array $arr)
{
    $result = [];
    foreach ($arr as $k => $v) {
        $vv = array_values($v);
        $result[] = '["' . $vv[0] . '","' . $vv[1] . '"]';
    }
    return '[' . implode(',', $result) . ']';
}


function jalaliToIso($time)
{
    $date = new IntlDateTime($time, 'Asia/Tehran', 'persian');
    return $date->classicFormat('Y-m-d H:i:s');
}

function isoToJalali($time = null, $split = false)
{
    $date = new IntlDateTime($time, 'Asia/Tehran');
    $date->setCalendar('persian');
    if ($split) return ['time' => $date->format('H:mm:ss'), 'date' => $date->format('YYYY-MM-dd')];
    return $date->format('YYYY-MM-dd H:mm:ss');
}

//var_dump(
//isoToJalali('2014-07-15 10:11:00',true)
//);


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

function formPostProcess(&$data)
{
    foreach ($data as $k => $v) {
        if ($v && preg_match('#(.+)Date$#u', $k, $m)) {
            $date = new IntlDateTime($v, 'Asia/Tehran');
            $date->setCalendar('persian');
            $data[$k] = $date->format('y/MM/dd');
            $data[$m[1] . 'Time'] = $date->format('HH:mm');
        }
    }
}

function formPreProcess(&$data)
{
    $audience = [];
    foreach ($data as $k => $v) {
        if ($v === '') {
            $data[$k] = null;
        }
        if ($v && preg_match('#audience_(.+)$#u', $k, $m)) {
            $audience[$m[1]] = $v;
        }
        if ($v && preg_match('#(.+)Date$#u', $k, $m)) {
            $date = new IntlDateTime($v, 'Asia/Tehran', 'persian');
            $date->setCalendar('gregorian');
//            $data[$k] = $date->format('y-MM-dd');
            $data[$k] = $date->classicFormat('Y-m-d');
            if (isset($data[$m[1] . 'Time'])) {
                $data[$k] = $data[$k] . ' ' . $data[$m[1] . 'Time'];
                unset($data[$m[1] . 'Time']);
            }
        }
//        var_dump($audience);
//           die();
    }
}


//$a = [
//    'xDate' => '1380-01-02',//2001-03-22
//    'xTime' => '10:00',
//];
//formPreProcess($a);
////formPostProcess($a);
//print_r($a);

//echo jalaliToIso(isoToJalali('2010-01-02 10:00'));

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

function jsonResponse($response, $type = 'application/json')
{
    header('Content-Type: ' . $type);
    echo json_encode($response, JSON_UNESCAPED_UNICODE);
}

function ellipsis($text, $max = 500, $append = '…')
{
//    if (strlen($text) <= $max) return $text;
//    $str = explode("\n", wordwrap($text, $max));
//    return $str = $str[0] . '...';
    $text = strip_tags($text);

    if (strlen($text) <= $max)
        return $text;
//    $out = mb_substr($text, 0, $max);
//    if (strpos($text, ' ') === FALSE) return $out . $append;
//    return preg_replace('/\w+$/', '', $out) . $append;
    return mb_substr($text, 0, $max) . $append;
}

function applyAudience(&$query, $audience)
{
    $aud = array_filter(unserialize($audience));
    foreach ($aud as $k => $v) {
        if ($v <> [''] and $v) {
            switch ($k) {
                case 'sex':
                    if ($v == 'm' or $v == 'f') $query->andWhere('sex=:sex:', ['sex' => $v]);
                    break;
                case 'entityMember':
                    $query->join('EntityMember', 'EntityMember.userId=User.id');
                    $query->inWhere('entityId', $v);
                    break;
                case 'educationStatus':
                    if ($v == 'current')
                        $query->where('endTerm is null');
                    if ($v == 'finished')
                        $query->where('endTerm is not null');
                    break;
                case 'religion':
                case 'nationality':
                case 'degree':
                case 'course':
                case 'college':
                case 'department':
                    $query->inWhere($k, $v);
                    break;
            }
        }
    }
}