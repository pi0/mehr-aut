//Ext.Loader.loadScript('ahura/utility.js');
//Ext.ns(
//    "Mehr.v", // Global variables
//    "Mehr.combo",
//    "Mehr.cm",
//    'Mehr.cols',
//    'Mehr.column',
//    "Mehr.form",
//    "Mehr.formPanel",
//    "Mehr.grid",
//    "Mehr.handler",
//    "Mehr.menu",
//    "Mehr.renderer",
//    "Mehr.panel",
//    "Mehr.proxy",
//    "Mehr.store",
//    "Mehr.tabPanel",
//    "Mehr.window"
//);


Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'Mehr',
    appFolder: BASE + 'app',
    stores: ['User', 'Program','Entity'],
    models: ['User'],
    autoCreateViewport: true,
    paths: {
        'Ahura': 'http://localhost/aut/ahura',
        'Ext.ux': 'http://localhost/aut/vendor/ext-ux'
    },
    controllers: [
//        'Users',
//        'Audiences'
    ],
    launch: function () {
        Ext.state.Manager.setProvider(Ext.create('Ext.state.CookieProvider', {
            expires: new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * 7)) //7 days from now
        }));
        Ext.apply('Ext.form.field.VTypes', {
            password: function (val, field) {
                if (field.initialPassField) {
                    var pwd = Ext.getCmp(field.initialPassField);
                    return (val == pwd.getValue());
                }
                return true;
            },
            passwordText: 'مقدار وارد شده با با مقدار گذرواژه یکسان نیست.'
        });
    }

});
Ext.onReady(function () {
    Ext.create('Mehr.view.entity.List');
//    Ext.create('Mehr.view.user.List');
    Ext.grid.RowEditor.prototype.cancelBtnText = "لغو";
    Ext.grid.RowEditor.prototype.saveBtnText = "بهنگام‌سازی";

});


Ext.require('Ahura.form.button.Save');
Ext.require('Ahura.form.button.Cancel');
Ext.require('Mehr.view.program.List');
Ext.require('Ahura.form.date.Jalali');
Ext.require([
    'Ext.ux.Jalali',
    'Ext.ux.JalaliDate',
    'Ext.ux.JalaliDatePlugin',
    'Ext.ux.JalaliDatePlugin-fa_IR',
    'Ext.grid.RowEditor',
    'Ahura.form.field.Integer',
    'Ahura.form.Base'
]);


$$ = function (q) {
    return Ext.ComponentQuery.query(q)
}

Ahura.SaveToolbar = [];
//    {
//        text: 'ذخیره و بستن',
//        icon: icon('save'),
//        handler: function () {
//            this.up('window').down('button#saveBtn').handler();
//            this.up('window').down('button#cancelBtn').handler();
//
//        }
//    },
//    {
//        text: 'ذخیره و جدید',
//        icon: icon('save'),
//
//        handler: function () {
//
//        }
//    },
Ext.ns('Ahura.button');
Ahura.button.SaveForm = {
    itemId: 'saveBtn',
    text: 'ذخیره',
    icon: icon('save'),
    handler: function () {
        var c = [], d = [];
        var form = this.up('window').down('form').getForm();
        var win = this.up('window');
        if (form.isValid()) {
            // Submit the Ajax request and handle the response
            form.submit({
                submitEmptyText : false,
                params: {
                },
                success: function (form, action) {
//                            Ext.Msg.alert('Success', action.result.message);
                    Ext.MessageBox.show({
                        scope: win,
                        rtl: true,
                        title: 'موفقیت',
                        msg: 'دستور شما به درستی اجرا شد.',
//                            msg: 'اطلاعات به شکل موفقیت آمیز ذخیره شد.',
                        buttons: Ext.MessageBox.OK,
                        icon: Ext.MessageBox.INFO,
                        fn: function () {
                            this.close();
                        }
                    })
                },
                failure: function (form, action) {
//                            Ext.Msg.alert('Failed', action.result ? action.result.message : 'No response');
                    Ext.MessageBox.show({
                        rtl: true,
                        title: 'خطا',
                        msg: (action.result.message) ? 'در داده‌های وارد شده خطا وجود دارد.' : 'ارتباط با سرور برقرار نشد.',
//                            msg: 'خطایی در داده‌ها وجود دارد.',
                        buttons: Ext.MessageBox.OK,
                        icon: Ext.MessageBox.ERROR
                    });
                }
            });
        } else {
            var errors=[];
            form.getFields().each(function (field) {
                errors = errors.concat(Ext.Array.map(field.getErrors(), function (error) {
                    return { field: field.getName(), error: error }
                }));
            });
            console.log(errors);
            
            Ext.MessageBox.show({
                rtl: true,
                title: 'ورودی نامعتبر',
                msg: 'در داده‌های وارد شده خطا وجود دارد.',
                buttons: Ext.MessageBox.OK,
                icon: Ext.MessageBox.ERROR
            });

        }
    }
};
Ahura.button.CancelForm = {
    text: 'انصراف',
    itemId: 'cancelBtn',
    icon: icon('cancel'),
    handler: function () {
        this.up('window').close();
    }
};
