<?php
require_once __DIR__ . '/../config/services.php';
require_once __DIR__ . '/BaseModel.php';
require_once __DIR__ . '/Department.php';
require_once __DIR__ . '/Dormitory.php';
require_once __DIR__ . '/Degree.php';

class User extends BaseModel{
    public static $yas = [
        'firstName',                                                        // 0
        'lastName',                                                         // 1
        'sex',                                                              // 2
        'fatherName',                                                       // 3
        'birthdayDate',                                                     // 4
        'nid',                                                   // 5
        ['ignore','shenasname'],                                                       // 6
        'birthdayPlace',                                                    // 7
        ['table'=>'department','column'=>'name','to'=>'department'],        // 8
        ['table'=>'degree','column'=>'name','to'=>'degree'],                // 9
        'sid',                                                              // 10
        'course',
        ['table'=>'dormitory','column'=>'name','to'=>'dormitory'],
        'phone',
        'mobile',
        'address',
        'takenUnits',
        'passedUnits',
        'average',
        'conditionalTerms'
    ];

    static function _getIdFromTable($col,$value){
        $model = ucfirst($col['table']);
        $colName = $col['column'];
        $functionName = 'findFirstBy' . $colName;
        $m = $model::$functionName($value);
        if($m){
            return $m->id;
        } else {
            $m = new $model;
            $m->$colName = $value;
            $m->save();
            return $m->id;
        }
    }

    static function import($filePath,$system = 'yas'){
        $file = @fopen($filePath, 'r');
        if (!$file)
            return false;

        $success = 0;
        while (($fileLine = fgets($file)) != false) {
            $fields = explode('	', $fileLine);
            $user = User::findFirstBySid($fields[array_search('sid', User::$$system )]);
            $user = (!$user)? new User:$user;
            foreach (User::$$system as $i => $column) {
                if (gettype($column) == 'string') {
                    $user->$column = $fields[$i];
                } else if (gettype($column) == 'array') {
                    if(isset($column[0]) && $column[0] == 'ignore')
                        continue;
                    $to = $column['to'];
                    $user->$to = User::_getIdFromTable($column, $fields[$i]);
                }
            }
            $success += (int)$user->save();
        }
        return $success;
    }
}