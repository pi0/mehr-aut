Ext.Loader.loadScript('ahura/utility.js');
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
Ext.ns('Ahura.store');


Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'Mehr',
    paths: {
        'Ahura': 'ahura/',
        'Ext.ux': 'vendor/ext-ux/'
    },
    appFolder: 'app',
    autoCreateViewport: true,
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

        // turn on validation errors beside the field globally
        //        Ext.form.Field.prototype.msgTarget = 'side';

    }

});
Ext.onReady(function () {
    Ext.create('Mehr.view.program.Edit');
//    Ext.create('Mehr.view.user.Edit');
//    Ext.create('Ext.window.Window', {width:200,height:300,layout: 'fit', autoShow: true, items: [Ext.create('Mehr.view.audience.Panel')]});

//    Ext.create('Ext.window.Window', {
////        rtl: true,
//        autoShow: true,
//        height: 400,
//        width: 1000,
//        layout: 'fit',
//        items: Ext.create('Mehr.view.audience.Panel')
//    });
});


Ext.require('Ahura.form.button.Save');
Ext.require('Ahura.form.button.Cancel');
Ext.require('Mehr.view.program.List');
Ext.require('Ahura.form.date.Jalali');
Ext.require([
    'Ext.ux.Jalali',
    'Ext.ux.JalaliDate',
    'Ext.ux.JalaliDatePlugin',
    'Ext.ux.JalaliDatePlugin-fa_IR'
]);

Ext.grid.RowEditor.prototype.cancelBtnText = "لغو";
Ext.grid.RowEditor.prototype.saveBtnText = "بهنگام‌سازی";

$=function(q){
    return Ext.ComponentQuery.query(q)
}