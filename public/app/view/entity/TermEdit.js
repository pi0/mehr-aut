var termColumns = [
    {
        header: '# دانشجویی',
        editor: {
            xtype: 'sid-combo',
            fieldLabel: null,
            allowBlank: false
        },
        dataIndex: 'sid'
    },
    {
        header: 'نقش',
        dataIndex: 'role',
        flex: 1,
        renderer: function (val) {
            var store = Ext.data.StoreManager.lookup('foo');
            var index = store.findExact('value', val);
            if (index != -1) {
                rs = store.getAt(index).data;
                return rs.text;
            }
        },
        editor: {
            xtype: 'combo',
            forceSelection: true,
            typeAhead: true,
            displayField: 'text',
            valueField: 'value',
            allowBlank: false,
            store: Ahura.store.MembershipType
        }
    }
];
var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
    clicksToMoveEditor: 1,
    autoCancel: false
});

Ext.define('Mehr.view.entity.Council', {
    extend: 'Ahura.grid.Base',
    xtype: 'council-grid',
    plugins: [
        rowEditing
    ],
    columns: termColumns,
    store: Ext.create('Ext.data.ArrayStore', {
        data: [
            ['90131004', '1'],
            ['90131003', '2'],
            ['90131004', '3']
        ],
        fields: ['sid', 'role']
    }),
    listeners: {
        'selectionchange': function (view, records) {
            this.down('#removeEmployee').setDisabled(!records.length);
        }
    },
    tbar: [
        {
            text: 'افزودن',
            icon: icon('userAdd'),
            handler: function () {
                rowEditing.cancelEdit();
                // Create a model instance
//                var r = Ext.create('Employee', {
//                    name: 'New Guy',
//                    email: 'new@sencha-test.com',
//                    start: Ext.Date.clearTime(new Date()),
//                    salary: 50000,
//                    active: true
//                });

                this.up('council-grid').getStore().insert(0, [
                    []
                ]);
                rowEditing.startEdit(0, 0);
            }
        },
        {
            itemId: 'removeEmployee',
            text: 'حذف',
            icon: icon('userDelete'),
            handler: function () {
                var sm = this.up('grid').getSelectionModel();
                var store = this.up('grid').getStore();
                rowEditing.cancelEdit();
                store.remove(sm.getSelection());
                if (store.getCount() > 0) {
                    sm.select(0);
                }
            },
            disabled: true
        }
    ]
})


Ext.define('Mehr.view.entity.TermEdit', {
    extend: 'Ahura.window.Base',
    requires:'Ahura.combo.SID',
    title: 'ویرایش/ایجاد دوره',
    height: 500,
    width: 500,
    maximizable: true,
    minimizable: true,
    items: [
        {
            frame: false,
            xtype: 'form',
            layout: 'fit',
            fieldDefaults: {
                labelAlign: 'top',
                labelWidth: 300,
                labelStyle: 'margin-bottom:3px'
            },
            items: [
                {
                    border: false,
                    xtype: 'tabpanel',
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
                                    fieldLabel: 'زمان شروع نام‌نویسی نامزدها',
                                    emptyText: "",
                                    name: '',
                                    xtype: 'jalali'
                                },
                                {
                                    fieldLabel: 'زمان پایان نام‌نویسی نامزدها',
                                    emptyText: "",
                                    name: 'enrollment_sts',
                                    xtype: 'jalali'
                                },
                                {
                                    fieldLabel: 'زمان آغاز رأی‌گیری',
                                    emptyText: "",
                                    name: 'enrollment_sts',
                                    xtype: 'jalali'
                                },
                                {
                                    fieldLabel: 'زمان پایان رأی‌گیری',
                                    emptyText: "",
                                    name: 'enrollment_sts',
                                    xtype: 'jalali'
                                },
                                {
                                    fieldLabel: 'زمان آغاز فعالیت',
                                    emptyText: "",
                                    name: 'enrollment_sts',
                                    xtype: 'jalali'
                                }

                            ]
                        },
                        ,
                        {
                            title: 'شواری مرکزی',
                            layout: 'fit',
                            items: [
                                {
                                    xtype: 'council-grid'
                                }
                            ],
                            rtl: true
//                            layout: 'accordion',
                        },
                        {
                            frame: false,
                            border: false,
                            title: 'توضیحات',
                            layout: 'fit',
                            autoScroll: true,
                            items: [
                                {
                                    xtype: 'htmleditor'
                                }
                            ]

                        }
                    ]
                }
            ],
            fbar: [
                {
                    icon: icon('save'),
                    text: 'ذخیره و بستن',
                    handler: function () {
//            Mehr.handler.SaveUser('close');

                    }
                },
                {
                    icon: icon('save'),
                    text: 'ذخیره و جدید',
                    handler: function () {
//        Mehr.handler.SaveUser('new');

                    }
                },
                {
                    icon: icon('save'),
                    text: 'ذخیره'
//    handler:Mehr.handler.Save('/account/json-edit-user', null,Mehr.window.UserEdit)
                },
                {
                    xtype: 'cancel-button',
                    handler: function () {
                        Mehr.window.UserEdit.hide();
                    }
                }
            ]
        }
    ]
});