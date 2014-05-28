Ext.require('Ahura.grid.User');
Ext.require('Ahura.form.combo.MaritalStatus');
Ext.require('Ahura.form.combo.Term');
Ext.require('Ahura.form.combo.Degree');
Ext.require('Ahura.form.combo.Religion');
Ext.require('Ahura.form.combo.Course');
Ext.require('Ahura.form.combo.Nationality');
Ext.define('Mehr.view.audience.Panel', {
    extend: 'Ext.tab.Panel',
    xtype: 'audience-panel',
    items: [
        {
            activeTab: 3,
            rtl: true,
            layout: 'form',
            bodyPadding: 15,
            title: 'دامنه',
            defaults: {
                labelWidth: 50
            },
            items: [
                {
                    fieldLabel: 'نوع کاربر',
                    xtype: 'local-combo',
                    name: 'audience[userType]',
                    multiSelect: true,
                    typeAhead: false,
                    value: 's',
                    store: [
                        ['s', 'دانشجو'],
                        ['g', 'دانش‌آموخته/پایان تحصیل'],
                        ['p', 'استاد'],
                        ['e', 'کارمند'],
                        ['a', 'همه']
                    ]
                },
                {
//                            bodyStyle:'border:solid gray thin',
                    border: 0,
                    rtl: true,
                    fieldLabel: 'جنسیت',
                    layout: 'hbox',
                    xtype: 'radiogroup',
                    labelWidth: 50,
                    items: [
                        {
                            name: 'audience[sex]',
                            inputValue: "",
                            boxLabel: "مهم نیست",
                            checked: true,
                            labelAlign: 'right'
                        },
                        {
                            name: 'audience[sex]',
                            inputValue: "f",
                            boxLabel: "مونث"
                        },
                        {
                            name: 'audience[sex]',
                            inputValue: "m",
                            boxLabel: "مذکر"
                        }
                    ]

                },

                {
                    xtype: 'terms-combo',
                    name: "audience[fromTerm]",
                    fieldLabel: "از ورودی"

                },
                {
                    name: "audience[toTerm]",
                    xtype: 'terms-combo',
                    fieldLabel: 'تا ورودی'
                },
                {
                    fieldLabel: "دوره",
                    xtype: 'course-combo',
                    valueField: "college_id",
                    name: 'audience[courses][]',
                    displayField: 'title',
                    multiSelect: true,
                    typeAhead: false,
                    flex: 1
                }
                ,
                {
                    xtype: 'degrees-combo',
                    valueField: "college_id",
                    name: 'audience[degrees][]',
                    flex: 1,
                    multiSelect: true,
                    typeAhead: false
                }
                ,
//                        Ext.create('Ahura.form.combo.Colleges'),
//                    Ext.create('Ahura.form.combo.Departments'),
//                    Ext.create('Ahura.form.combo.Disciplines')

                {
                    xtype: 'religion-combo',
                    name: 'audience[religion][]',
                    flex: 1,
                    multiSelect: true, typeAhead: false
                },
//                'اعمال محدودیت روی رشته/دانشکده',
                {
                    xtype: 'checkbox',
                    labelAlign: 'left',
                    labelWidth: 180,
                    fieldLabel: 'اعمال محدودیت روی رشته/دانشکده',
                    listeners: {
                        'change': function (t, value) {
                            if (value) {
                                this.up('window').down('#treeTab').enable();
                            } else {
                                this.up('window').down('#treeTab').disable();
                            }
                        }}
                }
            ]
        },
        {
            itemId: 'treeTab',
            collapsible: true,
            layout: 'fit',
            title: 'دانشکده‌ها و رشته‌ها',
            disabled: true,
            width: 200,
            split: true,
            items: [
                {
                    rtl: true,
                    xtype: 'treepanel',
                    rootVisible: false,
                    store: Ext.create('Ext.data.TreeStore', {
                        fields: ['text', 'id', 'type'],
                        root: {
                            expanded: true,
                            checked: true,
                            children: [

                                { text: "دانشکده کامپیوتر", "checked": true, id: '1', children: [
                                    { text: "نرم‌افزار", leaf: true, "checked": true, id: 3, type: 'department'},
                                    { text: "فناوری اطلاعات", leaf: true, "checked": true, id: 33, type: 'college'}
                                ]},
                                { text: "دانشکده ریاضی",
                                    "checked": true,
                                    children: [
                                        { text: "علوم کامپیوتر", leaf: true, "checked": true, type: 'department', id: 44 },
                                        { text: "ریاضی کاربردی", leaf: true, "checked": true, type: 'department', id: 434}
                                    ] }

                            ]
                        }
                    })
                }
            ]
        },
        {
            title: 'پیش‌نمای مخاطبان',
            layout: 'fit',
            items: [

                {
                    xtype: 'users-grid'
                }
            ]
        }
    ]
});