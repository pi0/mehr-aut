<?php

class ControllerBase extends Phalcon\Mvc\Controller
{

    protected function initialize()
    {
        if($this->session->has('auth')){
            $this->user=User::findFirst($this->session->auth);
        }
//        var_dump($this->session);
        $this->jr=$this->request->getJsonRawBody();
//        die();
        $this->view->setVar('BASE',$this->url->getBaseUri());
//        Phalcon\Tag::prependTitle('Vajje.com | ');
    }

    protected function forward($uri){
    	$uriParts = explode('/', $uri);
    	return $this->dispatcher->forward(
    		array(
    			'controller' => $uriParts[0], 
    			'action' => $uriParts[1]
    		)
    	);
    }
}
