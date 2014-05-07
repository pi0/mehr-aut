Ext.require('Mehr.view.audience.Panel');

Ext.define('Mehr.view.entity.Edit', {
    extend: 'Ahura.window.Base',
    title: 'ویرایش نهاد',
    height: 500,
    width: 1000,
    maximizable:true,
    minimizable:true,
    items: [
        {
            xtype: 'form',
            layout:'fit',
            fieldDefaults: {
                labelAlign: 'top',
                labelWidth: 300,
                labelStyle: 'margin-bottom:3px'
            },
            items: [
                {
                    xtype: 'tabpanel',
                    plain: true,
                    activeTab: 0,
                    defaults: {

                    },
                    items: [
                        {
                            bodyStyle: 'padding:10px',
                            layout: 'form',
                            title: 'مشخه‌های پایه',
                            labelAlign: 'right',
                            defaultType: 'textfield',
                            items: [
                                {
                                    xtype: 'combo',
                                    minChars: 0,
                                    anchor: '90%',
                                    fieldLabel: 'نوع',
                                    name: 'religion',
                                    displayField: 'title',
                                    forceSelection: true,
                                    store: ['انجمن علمی', 'کانون فرهنگی', 'شورای صنفی', 'تشکل اسلامی', 'انجمن ورزشی', 'تیم ورزشی', 'بسیج دانشجویی', 'دیگر']
                                }
                                ,
                                {
                                    fieldLabel: 'عنوان',
                                    name: 'father_name',
                                    emptyText: 'تنها عنوان: مثلا  «دانشکده کامپیوتر» و نه «انجمن علمی دانشکده کامپیوتر»',
                                    width: 200
                                }
                                ,
                                {
                                    fieldLabel: 'شمار اعضای شورای مرکزی',
                                    emptyText: "تنها شماره وارد نمایید.",
                                    name: 'nid',
                                    xtype: 'numberfield'
                                    //                    maxLength:10,
                                    //                    minLength:10
                                },
                                {
                                    fieldLabel: 'شمار اعضای علی‌البدل شورای مرکزی',
                                    emptyText: "تنها شماره وارد نمایید.",
                                    name: 'nid',
                                    xtype: 'numberfield',
                                    labelWidth: 300
                                    //                    maxLength:10,
                                    //                    minLength:10
                                },
                                {
                                    fieldLabel: 'امکان عضویت',
                                    name: '',
                                    xtype: 'checkbox'
                                }
                            ]
                        },
                        {
                            frame: false,
                            border: false,
                            title: 'اساس‌نامه',
                            layout: 'fit',
                            autoScroll: true,
                            items: [
                                {
                                    xtype: 'htmleditor'
                                }
                            ]

                        },
                        {
                            title: 'مخاطبان',
                            xtype: 'audience-panel',
                            rtl:true
//                            layout: 'accordion',
                        }
                    ]
                }
            ],
            fbar: [
                {
                    icon: icon('save'),
                    text: 'ذخیره و بستن',
                    handler: function () {
//            Mehr.handler.SaveUser('close');

                    }
                },
                {
                    icon: icon('save'),
                    text: 'ذخیره و جدید',
                    handler: function () {
//        Mehr.handler.SaveUser('new');

                    }
                },
                {
                    icon: icon('save'),
                    text: 'ذخیره'
//    handler:Mehr.handler.Save('/account/json-edit-user', null,Mehr.window.UserEdit)
                },
                {
                   xtype:'cancel-button',
                    handler: function () {
                        Mehr.window.UserEdit.hide();
                    }
                }
            ]
        }
    ]
});