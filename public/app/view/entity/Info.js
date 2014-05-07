Ext.require('Mehr.view.audience.Panel');
//Ext.require('Ahura.form.combo.Provinces');

Ext.define('Mehr.view.entity.Info', {
    extend: 'Ahura.window.Base',
    title: 'مرکز مدیریت نهاد',
    height: null,
    width: 600,
    maximizable: true,
    minimizable: true,
    layout: 'fit',
    items: [
        {
            data: {
                type: 'انجمن علمی',
                name: 'دانشکده کامپیوتر و فناوری اطلاعات'
            },
            tpl: '<div id="entityManagement"><div class="settingIcon"></div><h3>{type}</h3><h1>{name}</h1></div>',
            bodyStyle: {
                padding: 15
            }
        }
    ],
    buttons: [
        {
            text: 'ویرایش',
            icon: icon('pencil')
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