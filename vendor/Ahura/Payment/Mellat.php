<?php
date_default_timezone_set('Asia/Tehran');

class Mellat
{
    public function __construct($terminalId, $username, $password, $callbackUrl)
    {
        $this->gateway = 'https://pgw.bpm.bankmellat.ir/pgwchannel/startpay.mellat';
        $this->wsdl = 'https://bpm.shaparak.ir/pgwchannel/services/pgw?wsdl';
        $this->soap = new SoapClient($this->wsdl);

        $this->username = $username;
        $this->password = $password;
        $this->termnialId = $terminalId;
        $this->callbackUrl = $callbackUrl;
        $this->messages = [
            0 => "تراكنش با موفقيت انجام شد",
            11 => "شماره كارت نامعتبر است",
            12 => "موجودي كافي نيست",
            13 => "رمز نادرست است",
            14 => "تعداد دفعات وارد كردن رمز بيش از حد مجاز است",
            15 => "كارت نامعتبر است",
            16 => "دفعات برداشت وجه بيش از حد مجاز است",
            17 => "كاربر از انجام تراكنش منصرف شده است",
            18 => "تاريخ انقضاي كارت گذشته است",
            19 => "مبلغ برداشت وجه بيش از حد مجاز است",
            111 => "صادر كننده كارت نامعتبر است",
            112 => "خطاي سوييچ صادر كننده كارت",
            113 => "پاسخي از صادر كننده كارت دريافت نشد",
            114 => "دارنده كارت مجاز به انجام اين تراكنش نيست",
            21 => "پذيرنده نامعتبر است",
            23 => "خطاي امنيتي رخ داده است",
            24 => "اطلاعات كاربري پذيرنده نامعتبر است",
            25 => "مبلغ نامعتبر است",
            31 => "پاسخ نامعتبر است",
            32 => "فرمت اطلاعات وارد شده صحيح نمي باشد",
            33 => "حساب نامعتبر است",
            34 => "خطاي سيستمي",
            35 => "تاريخ نامعتبر است",
            41 => "شماره درخواست تكراري است",
            42 => "يافت نشد Sale تراكنش",
            43 => "قبلا درخواستVerifyداده شده است",
            44 => "درخواستVerfiy يافت نشد",
            45 => "تراكنشSettle شده است",
            46 => "تراكنشSettle نشده است",
            47 => "تراكنشSettle يافت نشد",
            48 => "تراكنشReverse شده است",
            49 => "تراكنشRefund يافت نشد",
            412 => "شناسه قبض نادرست است",
            413 => "شناسه پرداخت نادرست است",
            414 => "سازمان صادر كننده قبض نامعتبر است",
            415 => "زمان جلسه كاري به پايان رسيده است",
            416 => "خطا در ثبت اطلاعات",
            417 => "شناسه پرداخت كننده نامعتبر است",
            418 => "اشكال در تعريف اطلاعات مشتري",
            419 => "تعداد دفعات ورود اطلاعات از حد مجاز گذشته است",
            421 => "IPنامعتبر است",
            51 => "تراكنش تكراري است",
            54 => "تراكنش مرجع موجود نيست",
            55 => "تراكنش نامعتبر است",
            61 => "خطا در واريز",
        ];
    }

    public function payRequestAction($amount, $orderId, $payerId = 0)
    {

        $response = $this->soap->bpPayRequest(array(
            'orderId' => $orderId,
            'amount' => $amount,
            'terminalId' => $this->termnialId,
            'userName' => $this->username,
            'userPassword' => $this->password,
            'localDate' => date('Ymd'),
            'localTime' => date('his'),
            'callBackUrl' => $this->callbackUrl,
            'payerId' => $payerId
        ));
        $response = explode(',', $response->return);
        if ($response[0] == 0) {
            return ['success' => true, 'refId' => $response[1]];
        } else {
            return ['success' => false, 'error' => $response[0], 'message' => $this->messages[$response[0]]];
        }
    }

    public function redirect($amount, $orderId, $payerId = 0)
    {
        $request = $this->payRequestAction($amount, $orderId, $payerId);
        if ($request['success']) {
            $refId = $request['refId'];

            $request['form'] = <<<EOF
<i class='fa fa-spinner fa-spin'/>
</i>
 اتصال به درگاه بانک...
        <form id="gateway" method="post" action='$this->gateway'>
    <input type="hidden" name="RefId" value="$refId"/>
</form>
<script type="text/javascript">
    document.getElementById('gateway').submit();
</script>
EOF;
        }
        return $request;
    }

    public function verify($saleReferenceId, $orderId)
    {
        // Verifying
        $verification = $this->soap->bpVerifyRequest(array(
            'terminalId' => $this->termnialId,
            'userName' => $this->username,
            'userPassword' => $this->password,
            'orderId' => $orderId,
            'saleOrderId' => $orderId,
            'saleReferenceId' => $saleReferenceId,
        ))->return;

        if ($verification == 0) {
            // Settling
            $response = $this->soap->bpSettleRequest(array(
                'terminalId' => $this->termnialId,
                'userName' => $this->username,
                'userPassword' => $this->password,
                'orderId' => $orderId,
                'saleOrderId' => $orderId,
                'saleReferenceId' => $saleReferenceId,
            ))->return;

            if ($response == 0) {
                return ['success' => true];
            } else {
                return [
                    'success' => false,
                    'error' => $verification,
                    'message' => $this->messages[$response]
                ];
            }
        } else {
            return [
                'success' => false,
                'error' => $verification,
                'message' => $this->messages[$verification]
            ];
        }
    }
}

