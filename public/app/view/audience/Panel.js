Ext.require('Ahura.grid.Users');
Ext.require('Ahura.form.combo.MaritalStatus');
Ext.require('Ahura.form.combo.Term');
Ext.require('Ahura.form.combo.Degree');
Ext.require('Ahura.form.combo.Religion');
Ext.require('Ahura.form.combo.Course');
Ext.require('Ahura.form.combo.Nationality');
Ext.define('Mehr.view.audience.Panel', {
    extend: 'Ext.panel.Panel',
    xtype: 'audience-panel',
    layout: 'border',
    items: [
        {
            rtl: true,
            region: 'north',
            layout: 'form',
            bodyPadding: 10,
            items: [
                {

                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    items: [
                        {
//                            bodyStyle:'border:solid gray thin',
                            rtl: true,
                            fieldLabel: 'جنسیت',
                            layout: 'hbox',
                            xtype: 'radiogroup',
                            labelWidth: 50,
                            items: [
                                {
                                    name: 'sex',
                                    inputValue: "",
                                    boxLabel: "مهم نیست",
                                    checked: true,
                                    labelAlign: 'right'
                                },
                                {
                                    name: 'sex',
                                    inputValue: "f",
                                    boxLabel: "مونث"
                                },
                                {
                                    name: 'sex',
                                    inputValue: "m",
                                    boxLabel: "مذکر"
                                }
                            ]

                        },
                        {
                            xtype: 'marital-status-combo',
                            multiSelect: true, typeAhead: false},
                        {
                            xtype: 'nationality-combo',
                            multiSelect: true, typeAhead: false
                        },
                        {
                            xtype: 'religion-combo',
                            flex:1,
                            multiSelect: true, typeAhead: false
                        }
                    ]
                },
                {
                    fieldDefaults: {
                        labelWidth: 50
                    },
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    items: [

                        {
//                            xtype: 'terms-combo',
                            name: "from_term",
                            fieldLabel: "از ورودی"

                        },
                        {
                            name: "to_term",
//                            xtype: 'terms-combo',
                            fieldLabel: 'تا ورودی'
                        },
                        {
                            fieldLabel: "دوره",
                            xtype: 'course-combo',
                            valueField: "college_id",
                            name: 'courses[]',
                            displayField: 'title',
                            multiSelect: true,
                            typeAhead: false,
                            flex: 1
                        }
                        ,
                        {
                            xtype: 'degrees-combo',
                            valueField: "college_id",
                            name: 'degrees[]',
                            flex: 1,
                            multiSelect: true,
                            typeAhead: false
                        }
//                          ,
//                        Ext.create('Ahura.form.combo.Colleges'),
//                    Ext.create('Ahura.form.combo.Departments'),
//                    Ext.create('Ahura.form.combo.Disciplines')
                    ]
                }
            ]
        },
        {
            region: 'west',
            collapsible: true,
            layout: 'fit',
            title: 'دانشکده‌ها و رشته‌ها',
            width: 200,
            split: true,
            items: [
                {
                    rtl: true,
                    xtype: 'treepanel',
                    rootVisible: false,
                    store: Ext.create('Ext.data.TreeStore', {
                        root: {
                            expanded: true,
                            checked: true,
                            children: [
                                { text: "دانشکده کامپیوتر", "checked": true, children: [
                                    { text: "نرم‌افزار", leaf: true, "checked": true },
                                    { text: "فناوری اطلاعات", leaf: true, "checked": true}
                                ]},
                                { text: "دانشکده ریاضی",
                                    "checked": true,
                                    children: [
                                        { text: "علوم کامپیوتر", leaf: true, "checked": true },
                                        { text: "ریاضی کاربردی", leaf: true, "checked": true}
                                    ] }
                            ]
                        }
                    })
                }
            ]
        },
        {
            region: 'center',
            layout:'fit',
            items: [

                {
                    xtype: 'users-grid'
                }
            ]
        }
//
    ]

})
