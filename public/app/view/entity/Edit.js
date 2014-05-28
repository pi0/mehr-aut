Ext.require('Mehr.view.audience.Panel');

Ext.define('Mehr.view.entity.Edit', {
    extend: 'Ahura.window.Base',
    title: 'ویرایش نهاد',
    height: 500,
    width: 1000,

    items: [
        {
            xtype: 'form',
            paramsAsHash: true,
            api: {
                load: RPC.EntityApi.read,
                submit: RPC.EntityApi.write
            },
            layout:'fit',
            fieldDefaults: {
//                labelAlign: 'top',
                labelWidth: 150,
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
                                    allowBlank: false,
                                    name: 'type',
                                    displayField: 'title',
                                    forceSelection: true,
                                    store: Ahura.store.EntityType
                                }
                                ,
                                {
                                    fieldLabel: 'عنوان',
                                    allowBlank: false,
                                    name: 'name',
                                    emptyText: 'تنها عنوان: مثلا  «دانشکده کامپیوتر» و نه «انجمن علمی دانشکده کامپیوتر»'
                                }
                                ,
                                {
                                    fieldLabel: 'شمار اعضای شورای مرکزی',
                                    emptyText: "تنها شماره وارد نمایید.",
                                    name: 'nid',
                                    xtype: 'integer'
                                    //                    maxLength:10,
                                    //                    minLength:10
                                },
                                {
                                    fieldLabel: 'شمار اعضای علی‌البدل شورای مرکزی',
                                    emptyText: "تنها شماره وارد نمایید.",
                                    name: 'nid',
                                    xtype: 'integer'                                    //                    maxLength:10,
                                    //                    minLength:10
                                },
                                {
                                    fieldLabel: 'امکان عضویت',
                                    name: 'membership',
                                    value:1,
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
            fbar: [Ahura.button.SaveForm,Ahura.button.CancelForm]
        }
    ]
});