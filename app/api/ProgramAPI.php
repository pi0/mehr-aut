<?php

class ProgramApi
{

    function read()
    {
        $p=new Program();
        return (['data' => $p->findFirst()->toArray(), 'success' => true]);
    }

    function write($title)
    {
        $data=$_REQUEST;
        foreach($data as $k=>$v){
            if($v===''){
                $data[$k]=null;
            }
        }
        $p = new Program();
        $p->save($data);
//        var_dump($P->getModelsMetaData()->getAttributes($P));
        return extJson('true',$p->toArray());
    }
}
