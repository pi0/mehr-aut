Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'Mehr',
    appFolder: BASE + 'app',
    stores: ['User', 'Program', 'Entity', 'Enroller', 'CouncilMember', 'Council', 'Member'],
    models: ['User', 'Enroller', 'CouncilMember', 'Council', 'Member'],
    autoCreateViewport: true,
    paths: {
        'Ahura': '/ahura',
        'Ext.ux': '/vendor/ext-ux'
    },
    controllers: [
//        'Users',
//        'Audiences'
    ],
    launch: function () {
//        var win = Ext.create('Mehr.view.user.Role');
//        var win = Ext.create("Mehr.view.program.Edit", {
//            info: {
//                get: function () {
//                    return 9;
//                }
//            }
//        });


    }

});
Ext.onReady(function () {
//    var grid = win.down('grid');
//    var entityId = 1;
//    grid.setProgramId(programId);
//    grid.getStore().getProxy().setExtraParam('entityId', entityId);
//    grid.getStore().load();

//    Ext.create('Mehr.view.program.List');
//    Ext.create('Mehr.view.user.List');
    init();
});

Ext.require([
    'Ext.ux.Jalali',
    'Ext.ux.JalaliDate',
    'Ext.ux.JalaliDatePlugin',
    'Ext.ux.JalaliDatePlugin-fa_IR',
    'Ext.grid.RowEditor',
    'Ahura.form.field.Integer',
    'Ahura.form.Base',
    'Ahura.form.button.Save',
    'Ahura.form.button.Cancel',
    'Ahura.form.date.Jalali',
    'Mehr.view.program.List',
    'Ext.form.*'
]);
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
                submitEmptyText: false,
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
                    var msg = 'ارتباط با سرور برقرار نشد.';
                    if (action.result) {
                        if (action.result.message) msg = action.result.message;
                        msg = 'در داده‌های وارد شده خطا وجود دارد.'
                    }
                    Ext.MessageBox.show({
                        rtl: true,
                        msg: msg,
                        title: 'خطا',
                        buttons: Ext.MessageBox.OK,
                        icon: Ext.MessageBox.ERROR
                    });
                }
            });
        } else {
            var errors = [];
            form.getFields().each(function (field) {
                errors = errors.concat(Ext.Array.map(field.getErrors(), function (error) {
                    return { field: field.getName(), error: error }
                }));
            });
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


$$ = function (q) {
    return Ext.ComponentQuery.query(q)
}


function init() {
    Ext.apply(Ext.form.field.VTypes, {
        daterange: function (val, field) {
            var date = field.parseDate(val);

            if (!date) {
                return false;
            }
            if (field.startDateField && (!this.dateRangeMax || (date.getTime() != this.dateRangeMax.getTime()))) {
                var start = field.up('form').down('[name=' + field.startDateField + ']');
                start.setMaxValue(date);
                start.validate();
                this.dateRangeMax = date;
            }
            else if (field.endDateField && (!this.dateRangeMin || (date.getTime() != this.dateRangeMin.getTime()))) {
                var end = field.up('form').down('[name=' + field.endDateField + ']');
                end.setMinValue(date);
                end.validate();
                this.dateRangeMin = date;
            }
            /*
             * Always return true since we're only using this vtype to set the
             * min/max allowed values (these are tested for after the vtype test)
             */
            return true;
        },

        daterangeText: 'Start date must be less than end date',

        password: function (val, field) {
            if (field.initialPassField) {
                var pwd = field.up('form').down('[name=' + field.initialPassField + ']');
                return (val === pwd.getValue());
            }
            return true;
        },
        passwordText: 'مقدار وارد شده با با مقدار گذرواژه یکسان نیست.'
    });
    Ext.grid.RowEditor.prototype.cancelBtnText = "لغو";
    Ext.grid.RowEditor.prototype.saveBtnText = "بهنگام‌سازی";
    Ext.state.Manager.setProvider(Ext.create('Ext.state.CookieProvider', {
        expires: new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * 7)) //7 days from now
    }));
}