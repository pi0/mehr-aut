'use strict';
(function(){
    var banks = ({
        type: 'array',
        fields: 'name',
    });

    var win =  Ext.define('Mehr.view.setting.SystemSettings',{
        extend: 'Ahura.window.Base',
        title: 'تنظیمات سامانه',
        width: 800,
        height: 400,
        fbar: [Ahura.button.CancelForm, Ahura.button.SaveForm],
        items: {
            xtype: 'form',
            layout: 'fit',
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
                                xtype: 'combo',
                                fieldLabel: 'بانک مورد نظر',
                                store: [
                                    ['1','ملی'],
                                    ['2','ملت'],
                                    ['3','تجارت'],
                                    ['4','صادرات'],
                                ]

                            },
                            {
                                xtype: 'textfield',
                                fieldLabel: 'شناسه کاربری'

                            },
                            {
                                xtype: 'textfield',
                                inputType: 'password',
                                fieldLabel: 'رمز عبور'

                            },
                            {
                                xtype: 'textfield',
                                fieldLabel: 'شناسه پذیرنده'
                            },
                        ]
                    },
                    {
                        title: 'سامانه پیامک',

                    },
                    {
                        title: 'تنظیمات ظاهری',
                        layout: 'form',
                        items: [
                            {
                                xtype: 'fileField',
                                fieldLabel: 'تصویر پس زمینه',

                            }
                        ]

                    },
                    {
                        title: 'سیستم درون برد',

                    }
                ]
            }
        }
    });
})()