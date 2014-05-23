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
    appFolder: BASE+'app',
    stores: ['Program','User'],
    models: ['User'],
    autoCreateViewport: true,
    paths: {
        'Ahura': 'http://localhost/aut/ahura',
        'Ext.ux':'http://localhost/aut/vendor/ext-ux'
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
    Ext.create('Mehr.view.user.List');
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
    'Ext.grid.RowEditor'
]);


$$ = function (q) {
    return Ext.ComponentQuery.query(q)
}

Ahura.saveCancelBtn = [
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
    {
        itemId: 'saveBtn',
        on: {
            click: function () {
                alert(3);
            }
        },
        text: 'ذخیره',
        icon: icon('save'),
        handler: function () {
            var c = [], d = [];
            var form = this.up('window').down('form').getForm();
            var win = this.up('window');
            win.down('treepanel').getChecked().forEach(function (v) {
                if (v.get('type') == 'college') {
                    c.push(v.get('id'));
                } else if (v.get('type') == 'department') {
                    d.push(v.get('id'));
                }

            });

            if (form.isValid()) {
                // Submit the Ajax request and handle the response
                form.submit({
                    params: {
                        'audience[departments]': d,
                        'audience[colleges]': c
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
                Ext.MessageBox.show({
                    rtl: true,
                    title: 'خطا',
                    msg: 'در داده‌های وارد شده خطا وجود دارد.',
                    buttons: Ext.MessageBox.OK,
                    icon: Ext.MessageBox.ERROR
                });

            }
        }
    },
    {
        text: 'انصراف',
        itemId: 'cancelBtn',
        icon: icon('cancel'),
        handler: function () {
            this.up('window').close();
//                $('[text=ذخیره]')[0].up('window').down('form').load();
//                Mehr.window.ProgramEdit.hide();
        }
    },
//        {
//            text: 'مخاطبان',
//            id: 'audiencesBtn',
//            icon: icon('group'),
//            handler: function () {
//                Ext.create("Mehr.view.audience.Window");
////                id = Mehr.formPanel.ProgramEdit.getForm().findField('program_id').getValue();
////                Mehr.formPanel.Audiences.load({
////                    url: '/program/json-Get-Programe-audiences',
////                    params: {
////                        program_id: id
////                        //                            program_id: Mehr.formPanel.ProgramEdit.find('name','program_id').getValue()
////                    },
////                    failure: function (form, action) {
////                        Ext.Msg.alert("Load failed", action.result.errorMessage);
////                    }
////                });
////                Mehr.window.Audiences.show('audiencesBtn');
//            }
//        },
]
