Ext.define('Mehr.view.audience.Panel', {
    extend: 'Ext.tab.Panel',
    xtype: 'audience-panel',
    tabPosition: 'bottom',
    items: [
        {
            activeTab: 3,
            rtl: true,
            layout: 'form',
            bodyPadding: 15,
            title: 'دامنه',
            labelWidth: 150,
            defaults: {},
            items: [
                {
                    store: Ahura.store.UserType,
                    fieldLabel: 'نوع‌ کاربر',
                    allowBlank: false,
                    xtype: 'local-combo',
                    name: 'audience[userType][]',
                    multiSelect: true,
                    typeAhead: false,
                    value: ['1']
                },
                {
                    fieldLabel: 'جنسیت',
                    layout: 'hbox',
                    xtype: 'radiogroup',
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
                    fieldLabel: 'وضعیت تحصیل',
                    layout: 'hbox',
                    xtype: 'radiogroup',
                    items: [
                        {
                            name: 'audience[educationStatus]',
                            inputValue: "",
                            boxLabel: "مهم نیست",
                            checked: true,
                            labelAlign: ''
                        },
                        {
                            name: 'audience[educationStatus]',
                            inputValue: "current",
                            boxLabel: "در حال تحصیل"
                        },
                        {
                            name: 'audience[educationStatus]',
                            inputValue: "finished",
                            boxLabel: "دانش‌آموخته/پایان‌تحصیل"
                        }
                    ]

                },
                {
                    xtype: 'term-combo',
                    name: "audience[fromTerm]",
                    fieldLabel: "از ورودی"

                },
                {
                    name: "audience[toTerm]",
                    xtype: 'term-combo',
                    fieldLabel: 'تا ورودی'
                },
                {
                    xtype: 'college-combo',
                    multiSelect: true,
                    emptyText: 'یا دانشکده را مشخص کنید یا رشته و نه هر دو',
                    name: 'audience[college][]'
                },
                {
                    xtype: 'department-combo',
                    multiSelect: true,
                    name: 'audience[department][]'
                },
                {
                    fieldLabel: "دوره",
                    xtype: 'course-combo',
                    valueField: "college_id",
                    name: 'audience[course][]',
                    displayField: 'title',
                    multiSelect: true,
                    typeAhead: false,
                    flex: 1
                }
                ,
                {
                    xtype: 'degree-combo',
                    valueField: "college_id",
                    name: 'audience[degrees][]',
                    flex: 1,
                    multiSelect: true,
                    typeAhead: false
                }
                ,
                {
                    xtype: 'religion-combo',
                    name: 'audience[religion][]',
                    flex: 1,
                    multiSelect: true, typeAhead: false
                },
                {
                    xtype: 'entity-combo',
                    name: 'audience[entityMember][]',
                    fieldLabel: 'مخصوص عضوهای',
                    multiSelect: true,
                    emptyText: 'عضوها و شورای مرکزی و نه مخاطبان'
                },
                {
                    xtype: 'numberfield',
                    name: 'audience[average]',
                    fieldLabel: 'معدل های بالا تر از'
                },
                {
                    xtype: 'numberfield',
                    name: 'audience[passedUnits]',
                    fieldLabel: 'افرادی که بیش از این تعداد واحد گذرانده اند'
                }
                //,
//                'اعمال محدودیت روی رشته/دانشکده',
//                {
//                    xtype: 'checkbox',
//                    labelAlign: 'left',
//                    fieldLabel: 'محدودیت رشته؟',
//                    listeners: {
//                        'change': function (t, value) {
//                            if (value) {
//                                this.up('window').down('#treeTab').enable();
//                            } else {
//                                this.up('window').down('#treeTab').disable();
//                            }
//                        }}
//                }
            ]
        },
        /*
         {
         itemId: 'treeTab',
         layout: 'fit',
         title: 'دانشکده‌ها و رشته‌ها',
         disabled: true,
         width: 200,
         split: true,
         listeners: {
         checkchange: function (node, checked, eOpts) {
         this.up('window').down('form').getForm().getValues();
         var values = [];
         var nodes = $$('treepanel')[0].getChecked();
         Ext.Array.each(nodes, function (rec) {
         values.push(rec.get('value'));
         });
         console.log(values);

         }

         },
         items: [
         {
         rtl: true,
         xtype: 'treepanel',
         rootVisible: false,
         store: Ext.create('Ext.data.TreeStore', {
         listeners: {
         //selection cascade
         update: function (store, node, op, modifiedFields) {
         //If our checked value has changed
         if (modifiedFields && Ext.Array.contains(modifiedFields, 'checked')) {
         var isChecked = node.get('checked');
         node.eachChild(function (childNode) {
         //set each child node to it's parent's checked value
         childNode.set('checked', isChecked);
         });
         }
         }
         },
         fields: ['text', 'id', 'type'],
         root: {
         expanded: true,
         checked: true,
         children: [

         { text: "دانشکده کامپیوتر", "checked": true, value: '1', children: [
         { text: "نرم‌افزار", leaf: true, "checked": true, value: 3, type: 'department'},
         { text: "فناوری اطلاعات", leaf: true, "checked": true, value: 33, type: 'college'}
         ]},
         { text: "دانشکده ریاضی",
         "checked": true,
         children: [
         { text: "علوم کامپیوتر", leaf: true, "checked": true, type: 'department', value: 44 },
         { text: "ریاضی کاربردی", leaf: true, "checked": true, type: 'department', value: 434}
         ] }

         ]
         }
         })
         }
         ]
         }
         ,
         */
        {
            title: 'پیش‌نمای مخاطبان',
            layout: 'fit',
            height: 400,
            listeners: {
                activate: function () {
                    var form = this.up('window').down('form').getValues(true, true);
                    var store = this.up('window').down('grid').getStore();
                    var stringArray = [];
                    for (var k in form) {
                        stringArray.push(k + '=' + form[k]);
                    }
//                    store.getProxy().setExtraParam('audience', stringArray.join('&'));
                    store.getProxy().setExtraParam('audience', form);
                    store.load();
                }

            },
            items: [

                {
                    xtype: 'users-grid'

                }
            ]
        }
    ]
});
