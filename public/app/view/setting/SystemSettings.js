'use strict';
(function(){

    Ext.define('Mehr.view.setting.SystemSettings',{
        extend: 'Ahura.window.Base',
        title: 'تنظیمات سامانه',
        width: 800,
        height: 400,
        fbar: [Ahura.button.CancelForm, Ahura.button.SaveForm],
        //initComponent: function(){
        //    this.callParent(arguments);
        //    this.down('form').getForm().load();
        //},
        items: {
            xtype: 'form',
            layout: 'fit',
            paramsAsHash: true,
            api: {
                submit: RPC.SystemApi.update,
                load: RPC.SystemApi.read
            },
            items:{
                xtype: 'tabpanel',
                tabPosition: 'top',
                items: [
                    {
                        title: 'پرداخت الکترونیک',
                        layout: 'form',
                        bodyStyle: 'padding: 5px',
                        items: [
                            {
                                name: 'bank',
                                xtype: 'combo',
                                fieldLabel: 'بانک مورد نظر',
                                store: [
                                    ['1','ملی'],
                                    ['2','ملت'],
                                    ['3','تجارت'],
                                    ['4','صادرات']
                                ]

                            },
                            {
                                name:'username',
                                xtype: 'textfield',
                                fieldLabel: 'شناسه کاربری'

                            },
                            {
                                name: 'password',
                                xtype: 'textfield',
                                inputType: 'password',
                                fieldLabel: 'رمز عبور'

                            },
                            {
                                name: 'terminalId',
                                xtype: 'textfield',
                                fieldLabel: 'شناسه پذیرنده'
                            }
                        ]
                    },
                    {
                        title: 'سامانه پیامک'
                    },
                    {
                        title: 'تنظیمات ظاهری',
                        layout: 'form',
                        items: [
                            {
                                xtype: 'panel',
                                bodyStyle: 'text-align: center',
                                html: 'فرمت عکس باید jpg باشد.'
                            },
                            {
                                name:'background',
                                xtype: 'filefield',
                                fieldLabel: 'تصویر پس زمینه'
                            }
                        ]
                    },
                    {
                        title: 'سیستم درون برد'

                    }
                ]
            }
        }
    });
})();