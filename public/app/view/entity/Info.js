
Ext.define('Mehr.view.entity.Info', {
    extend: 'Ahura.window.Base',
    xtype: 'entity-info',
    title: 'مرکز مدیریت نهاد',
    width: 600,
    layout: 'fit',
    items: [],
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
            handler: function () {
                var entity = this.up('window').entity.data;
                console.log(entity);
                var programs = Ext.create('Mehr.view.program.List', {
                    info: {
                        title: 'برنامه‌های: ' + entity.typeText + ' ' + entity.name,
                        type: 'entity',
                        id: entity.id
                    }
                });
            }
        },
        {
            xtype: 'splitbutton',
            'text': 'دوره‌ها',
            handler: function () {
                var entity = this.up('window').entity;
                console.log(entity);
                
                Ext.create('Mehr.view.council.List', {
                    info: {
                        title: 'دوره‌های شوراهای مرکزی:' + entity.typeText + ' ' + entity.name,
                        type: 'entity',
                        id: entity.id
                    }
                })
            },
            menu: [
                {
                    text: 'دوره‌ جدید',
                    handler: function () {
                        Ext.create('Mehr.view.council.Edit', {isNew: true, info: this.up('window').info});
                    }
                }
            ]
        }
//        {text:'طرح‌ها'},
    ]
});