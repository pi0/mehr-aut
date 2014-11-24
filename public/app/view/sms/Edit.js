Ext.require('Mehr.view.audience.Panel');

    Ext.define('Mehr.view.sms.Edit', {
    extend: 'Ahura.window.Base',
    requires: ['Ahura.form.field.FaEditor','Ahura.form.field.Integer','Ahura.form.combo.Entity','Ahura.form.combo.ProgramSubject', 'Mehr.view.audience.Panel', 'Ahura.form.combo.Term',"Ahura.form.combo.ProgramType","Ahura.form.combo.ProgramLevel"],
    title: 'ارسال پیامک',
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
                            frame: false,
                            border: false,
                            title: 'متن',
                            layout: 'fit',
                            autoScroll: true,
                            items: [
                                {
                                    xtype: 'textarea'
                                }
                            ]

                        },
                        {
                            title: 'مخاطبان',
                            icon: icon('group'),
                            xtype: 'audience-panel',
                            rtl: true
                        }
                    ]
                }
            ],
            fbar: [Ahura.button.SaveForm, Ahura.button.CancelForm]
        }
    ]
});