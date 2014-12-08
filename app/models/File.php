<?php
class File extends BaseModel{

    /*
     * first([0]) element of the array is '.' and the second one([1]) is '..'. so we use the third one
     * to get the only file in the folder
     */
    static function getName($hash){
        return scandir(dirname(__FILE__) . '\..\..\public\file-server\\'.$hash)[2];
    }
    static function getHashName($hash){
        return $hash . '/' . self::getName($hash);
    }
}