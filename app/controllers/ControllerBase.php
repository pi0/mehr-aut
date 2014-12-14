<?php

class ControllerBase extends Phalcon\Mvc\Controller
{
    protected function initialize()
    {
    }

    protected function forward($uri)
    {
        $uriParts = explode('/', $uri);
        return $this->dispatcher->forward(
            array(
                'controller' => $uriParts[0],
                'action' => $uriParts[1]
            )
        );
    }

    protected  function inAudience($id, $audience)
    {
        $query = $this->modelsManager->createBuilder()->from('User')->columns('User.id');
        $query->andWhere('User.id=:id:', ['id' => $id]);
        applyAudience($query, $audience);
        return $result = $query->getQuery()->execute()->count();
    }

}