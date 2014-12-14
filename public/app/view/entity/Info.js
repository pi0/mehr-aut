Ext.require('Mehr.view.audience.Panel');
//Ext.require('Ahura.form.combo.Provinces');

Ext.define('Mehr.view.entity.Info', {
    extend: 'Ahura.window.Base',
    xtype: 'entity-info',
    title: 'مرکز مدیریت نهاد',
    width: 600,
    layout: 'fit',
    items: [
    ],
    buttons: [
        {
            text: 'ویرایش',
            icon: icon('pencil'),
            handler: function () {
                var panel = Ext.create('Mehr.view.entity.Edit');
                panel.down('form').getForm().load({params: {id: this.up('window').entity}});
            }
        },
        {
            text: 'اعضاء',
            icon: icon('member'),
            handler: function () {
                Ext.create('Mehr.view.entity.MemberList', {info: this.up('window').info});
            }
        },
//        {
//            text: 'مخاطبان',
//            icon: icon('users')
//        },
        {
            text: 'برنامه‌ها',
            icon: icon('microphone'),
            handler: function(){
                var entity = this.up('window').entity;
                console.log(entity);
                var programs = Ext.create('Mehr.view.program.List', {
                    info: {
                        title: 'برنامه‌های: ' + entity.typeText + ' ' + entity.name,
                        row: entity,
                        caller: 'entity'
                    }
                });
            }
        },
        {
            xtype: 'splitbutton',
            'text': 'دوره‌ها',
            handler: function () {
                Ext.create('Mehr.view.council.List', {
                    info: {
                        row: this.up('window').info,
                        for: 'entity'
                    }})
            },
            menu: [
                {
                    text: 'دوره‌ جدید',
                    handler: function () {
                        Ext.create('Mehr.view.council.Edit', {isNew: true, info: this.up('window').info});
                    }
                }
            ]}
//        {text:'طرح‌ها'},
    ]
});