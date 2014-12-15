<?php
date_default_timezone_set('Asia/Tehran');

class Tejarat
{
    public function __construct($merchantId, $username, $password, $revertURL)
    {
        $this->wsdl = 'https://kica.shaparak.ir/epay/services/merchant.wsdl';
        $this->gateway = 'https://kica.shaparak.ir/epay/info';

        $this->soap = new SoapClient($this->wsdl);
        $this->username = $username;
        $this->password = $password;
        $this->merchantId = $merchantId;
        $this->revertURL = $revertURL;
        $this->messages = array(
            '100' => 'موفقیت تراکنش',
            '110' => 'انصراف دارنده کارت',
            '120' => 'موجودی حساب کافی نیست',
            '130' => 'اطلاعات کارت اشتباه است',
            '131' => 'رمز کارت اشتباه است',
            '132' => 'کارت مسدود شده است',
            '133' => 'کارت منقضی شده است',
            '140' => 'زمان موردنظر به پایان رسیده است',
            '150' => 'خطای داخلی بانک',
            '160' => 'خطا در اطلاعات CVV2 یا تاریخ انقضا',
            '166' => 'بانک صادر کننده کارت شما مجوز انجام تراکنش را صادر نکرده است',
            '200' => 'مبلغ تراکنش بیشتر از سقف مجاز در هر تراکنش می باشد',
            '201' => 'مبلغ تراکنش بیشتر از سقف مجاز در روز می باشد',
            '202' => 'مبلغ تراکنش بیشتر از سقف مجاز در ماه می باشد',
            '-20' => 'وجود کاراکترهای غیرمجاز در درخواست',
            '-30' => 'تراکنش قبلا برگشت خورده است',
            '-50' => 'طول رشته درخواست غیرمجاز است',
            '-51' => 'خطا در درخواست',
            '-80' => 'تراکنش مورد نظر یافت نشد',
            '-81' => 'خطای داخلی بانک',
            '-90' => 'تراکنش قبلا تایید شده است',
        );
    }

    public function redirect($amount, $paymentId, $customerId = 0)
    {
        $form = <<<EOF
        اتصال به درگاه بانک....
        <form id="gateway" method="post" action='$this->gateway'>
    <input type="hidden" name="merchantId" value="$this->merchantId"/>
    <input type="hidden" name="amount" value="$amount"/>
    <input type="hidden" name="paymentId" value="$paymentId"/>
    <input type="hidden" name="revertURL" value="$this->revertURL"/>
    <input type="hidden" name="customerId" value="$customerId"/>
</form>
<script type="text/javascript">
    document.getElementById('gateway').submit();l
</script>
EOF;

        echo $form;
    }
}

$m = new Mellat(1581085, 'ahura773', 23060009, 'test');
var_dump($m->soap->__getFunctions());
var_dump($m->PayRequestAction(1000, rand(1, 444)));

