Ext.require('Mehr.view.audience.Panel');
//Ext.require('Ahura.form.combo.Provinces');

Ext.define('Mehr.view.entity.Info', {
    extend: 'Ahura.window.Base',
    xtype:'entity-info',
    title: 'مرکز مدیریت نهاد',
    width: 600,
    layout: 'fit',
    items: [
    ],
    buttons: [
        {
            text: 'ویرایش',
            icon: icon('pencil'),
            handler:function(){
                var panel = Ext.create('Mehr.view.entity.Edit');
                panel.down('form').getForm().load({params: {id: this.up('window').entityId}});
            }
        },
        {
            text: 'اعضاء',
            icon: icon('member')
        },
        {
            text: 'مخاطبان',
            icon: icon('users')
        },
        {text: 'برنامه‌ها',
            icon: icon('microphone')},
        {
            xtype: 'splitbutton',
            'text': 'دوره‌ها',
            handler: function () {
                Ext.create('Mehr.view.entity.TermsList')
            },
            menu: [
                {
                    text: 'دوره‌ جدید',
                    handler:function(){
                        Ext.create('Mehr.view.entity.TermEdit');
                    }
                }
            ]}
//        {text:'طرح‌ها'},
    ]
});