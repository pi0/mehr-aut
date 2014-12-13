<?php

class CreditController extends ControllerBase
{
    public function indexAction()
    {
        $this->view->disable();
        $request = $this->request->getJsonRawBody();
        if ($this->request->isPost() && isset($request->amount) && $request->amount >= 1000) {
            $amount = (int)$request->amount;
            $bank = $this->di['bank'];
            $orderId = rand(1, 10e8);
            $redirect = $bank->redirect($amount, $orderId, 0);
            if (isset($redirect['refId'])) {
                $payment = new Payment();
                $payment->refId = $redirect['refId'];
                $payment->orderId = $orderId;
                $payment->amount = $amount;
                $payment->user = $this->uid;
                $payment->save();
            }
            jsonResponse($redirect);
        } else {
            $credit = Credit::sum([
                'column' => 'amount',
                'conditions' => "user=" . $this->uid
            ]);
            jsonResponse(['credit'=>$credit]);
        }
    }

    public function chargeAction()
    {

    }

    public function verifyAction()
    {
        $refId = $this->request->getPost('RefId');
        if (!$refId) {
            $this->view->status = 'noRefId';
            return;
        }
        $bank = $this->di['bank'];
        $payment = Payment::findFirstByRefId($refId);
        if (!$payment) {
            $this->view->status = 'notFound';
            return;
        }
        if ($this->request->getPost('ResCode') == 0) {
            $payment->assign([
                'resCode' => $_POST['ResCode'],
                'saleOrderId' => (int)$_POST['SaleOrderId'],
                'saleReferenceId' => (int)$_POST['SaleReferenceId'],
                'cardHolderInfo' => $_POST['CardHolderInfo'],
                'cardHolderPan' => $_POST['CardHolderPan'],
            ]);
            $r = $bank->verify($_POST['SaleReferenceId'], $_POST['SaleOrderId']);
            if ($r['success'] == true) {
                $payment->save();
                $this->view->status = 'ok';
                $this->view->saleReferenceId = $_POST['SaleOrderId'];
                $credit = new Credit();
                $credit->assign([
                    'user' => $payment->user,
                    'payment' => $payment->id,
                    'amount' => $payment->amount,
                    'details' => 'شارژ از طریق اینترنت بانک',
                ]);
                if (!$credit->save()) {
                    die('هزینه کسر شده اما برای شما منظور نشده است. لطفا با مدیر سامانه تماس بگیرید.');
                }

            } else {
                $payment->delete();
                $this->view->status = 'failed';
                $this->view->message = $r['message'];
            }
        } else {
            $payment->delete();
            $this->view->status = 'failed';
            $this->view->message = $bank->messages[$_POST['ResCode']];
        }
    }
}
