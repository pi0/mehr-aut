<?php

class IndexController extends ControllerBase
{
    public function initialize()
    {
        $this->view->setTemplateAfter('main');
        parent::initialize();
    }

    public function indexAction()
    {
    }

    public function notFoundAction()
    {
    }

    public function jsAction()
    {
        $this->view->constants = json_encode($this->di['db']->fetchAll('select text as t, category as c, value as v from constant', Phalcon\Db::FETCH_ASSOC), JSON_UNESCAPED_UNICODE);
        $this->view->user = $this->session['auth'] ? 'true' : 'false';
    }

    public function paymentAction()
    {
        $bank = $this->di['bank'];
        if ($_POST['ResCode'] == 0) {
            $r = $bank->verify($_POST['SaleReferenceId'], $_POST['SaleOrderId']);
            var_dump($r);
        } else {
            echo $bank->messages[$_POST['ResCode']];
        }
    }
}
