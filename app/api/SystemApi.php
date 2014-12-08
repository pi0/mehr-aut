<?php

class SystemApi extends BaseApi
{

    function update()
    {
        file_put_contents($this->getDI('config')->setting->path, json_encode($_REQUEST));
        $this->moveFile('background', 'background.jpg');
        return extJson(true, $_REQUEST);
    }

    function read(){
        return extJson(true,(array)json_decode(file_get_contents(__DIR__ . '/settings.json')));
    }
}
