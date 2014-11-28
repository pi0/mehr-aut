<?php

class ControllerBase extends Phalcon\Mvc\Controller
{
    static $user = null;

    protected function initialize()
    {
        $this->view->setVar('BASE', $this->url->getBaseUri());
//        Phalcon\Tag::prependTitle('Vajje.com | ');
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
}
