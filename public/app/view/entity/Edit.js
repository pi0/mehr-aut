Ext.require('Mehr.view.audience.Panel');

Ext.define('Mehr.view.entity.Edit', {
    extend: 'Ahura.window.Base',
    requires: ['Ahura.form.field.FaEditor','Ahura.form.field.Integer','Ahura.form.combo.Entity','Ahura.form.combo.ProgramSubject', 'Mehr.view.audience.Panel', 'Ahura.form.combo.Term',"Ahura.form.combo.ProgramType","Ahura.form.combo.ProgramLevel"],
    title: 'ویرایش نهاد',
    width: 1000,

    items: [
        {
            xtype: 'form',
            paramsAsHash: true,
            api: {
                load: RPC.EntityApi.read,
                submit: RPC.EntityApi.create
            },
            layout: 'fit',
            fieldDefaults: {
//                labelAlign: 'top',
                labelWidth: 250,
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
                                    name: 'id',
                                    xtype: 'hidden'
                                },
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
                                    name: 'councilMembers',
                                    xtype: 'integer'
                                    //                    maxLength:10,
                                    //                    minLength:10
                                },
                                {
                                    fieldLabel: 'شمار اعضای علی‌البدل شورای مرکزی',
                                    emptyText: "تنها شماره وارد نمایید.",
                                    name: 'understudyConcuilMembers',
                                    xtype: 'integer'                                    //                    maxLength:10,
                                    //                    minLength:10
                                },
                                {
                                    fieldLabel: 'امکان عضویت',
                                    name: 'subscription',
                                    inputValue: 1,
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
                            rtl: true
//                            layout: 'accordion',
                        }
                    ]
                }
            ],
            fbar: [Ahura.button.SaveForm, Ahura.button.CancelForm]
        }
    ]
});