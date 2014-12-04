<?php

class SystemApi extends BaseApi{
    function update(){

        file_put_contents(__DIR__ . '/settings.json',json_encode($_REQUEST));

        $this->moveFile('background','background.jpg');

        return extJson(true,$_REQUEST);
    }

    function read(){
        return extJson(true,file_get_contents(__DIR__ . '/settings.json'));
    }
}