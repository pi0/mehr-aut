Ext.ns('Ahura.validation');
Ahura.info = function (title, msg, fn, scope) {
    Ext.Msg.show({
        title: title,
        msg: msg,
        buttons: this.OK,
        fn: fn,
        scope: scope,
        icon: Ext.MessageBox.INFO,
        minWidth: this.minWidth
    });
    return this;
}
Ahura.warning = function (title, msg, fn, scope) {
    Ext.Msg.show({
        title: title,
        msg: msg,
        buttons: this.OK,
        fn: fn,
        scope: scope,
        icon: Ext.MessageBox.WARNING,
        minWidth: this.minWidth
    });
    return this;
}
Ahura.error = function (title, msg, fn, scope) {
    Ext.Msg.show({
        title: title,
        msg: msg,
        buttons: this.OK,
        fn: fn,
        scope: scope,
        icon: Ext.MessageBox.ERROR,
        minWidth: this.minWidth
    });
    return this;
}
Ext.ns("Ahura.handler");
Ahura.handler.Save = function (url, formPanel, window, postAction) {
    Mehr.formPanel.UserEdit.getForm().submit({
        //    formPanel.getForm().submit({
        submitEmptyText: false,
        waitMsg: "در حال اجرای دستور",
        url: url,
        timeout: 2
        //        success:function(form,action){
        //            Mehr.info('موفقیت', action.result.msg);
        //            if(postAction=='new'){
        //                formPanel.getForm().reset();
        //            }
        //            else if(postAction=='close'){
        //                window.hide();
        //            }
        //        },
        //        failure:function(form,action){
        //            if (action.failureType === Ext.form.Action.CONNECT_FAILURE) {
        //                Mehr.error('خطا در اتصال',
        //                    'Status:'+action.response.status+': '+
        //                    action.response.statusText);
        //                return false;
        //            }
        //            //                        if (action.failureType === Ext.form.Action.SERVER_INVALID)
        //            else{
        //                // server responded with success = false
        //                Mehr.warning('عدم اعتبار', "لطفا خطاهای مشخص شده را تصحیح کنید. تمام زبانه‌های را برای وجود خطا بررسی کنید.");
        //                return false;
        //            }
        //        }
    });
};
Ahura.validation.checkMelliCode = function (varmellicode) {
    var meli_code;
    meli_code = varmellicode.value;
    if (meli_code.length == 10) {
        if (meli_code == '1111111111' ||
            meli_code == '0000000000' ||
            meli_code == '2222222222' ||
            meli_code == '3333333333' ||
            meli_code == '4444444444' ||
            meli_code == '5555555555' ||
            meli_code == '6666666666' ||
            meli_code == '7777777777' ||
            meli_code == '8888888888' ||
            meli_code == '9999999999') {
            alert("کد ملی صحیح نمی باشد");
            objcode.focus();
            return false;
        }
        c = parseInt(meli_code.charAt(9));
        n = parseInt(meli_code.charAt(0)) * 10 +
            parseInt(meli_code.charAt(1)) * 9 +
            parseInt(meli_code.charAt(2)) * 8 +
            parseInt(meli_code.charAt(3)) * 7 +
            parseInt(meli_code.charAt(4)) * 6 +
            parseInt(meli_code.charAt(5)) * 5 +
            parseInt(meli_code.charAt(6)) * 4 +
            parseInt(meli_code.charAt(7)) * 3 +
            parseInt(meli_code.charAt(8)) * 2;
        r = n - parseInt(n / 11) * 11;
        if ((r == 0 && r == c) || (r == 1 && c == 1) || (r > 1 && c == 11 - r)) {
            return true;
        }
        else {
            alert("کد ملی صحیح نمی باشد");
            objcode.focus();
            return true;
        }
    }
    else {
        return true;
    }
}

function icon(name, size) {
    if (!size) {
        return 'assets/img/16p/' + name+'.png';
    }
    return 'assets/img/' + size + 'p/' + name+'.png';
}

function requestFullScreen(element) {
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}