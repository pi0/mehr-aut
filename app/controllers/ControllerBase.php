<?php

class ControllerBase extends Phalcon\Mvc\Controller
{
    protected function initialize()
    {
//        var_dump($this->di['session']['user']);
//        if (isset($this->di['session']['user']))
//            $this->user = $this->di['session']['user'];
//        $this->view->setVar('BASE', $this->url->getBaseUri());
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