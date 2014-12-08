<?php

class SystemApi extends BaseApi
{

    function update()
    {
        die(2);
        file_put_contents($this->getDI('config')->setting->path, json_encode($_REQUEST));
        $this->moveFile('background', 'background.jpg');
        return extJson(true, $_REQUEST);
    }

    function read()
    {
        return extJson(true, file_get_contents($this->path));
    }
}
