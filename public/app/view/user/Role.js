Ext.require('Mehr.store.Role');
var termColumns = [
    {
        header: '# دانشجویی',
        dataIndex: 'sid',
        width: 100
    },
    {
        header: 'نام',
        dataIndex: 'fullName',
        flex: 1,
        editor: {
            xtype: 'user-combo',
            fieldLabel: null,
            allowBlank: false,
            name: 'user',
            displayTpl: Ext.create('Ext.XTemplate',
                '<tpl for=".">',
                '{firstName} {lastName}',
                '</tpl>'
            )

        }
    },
    {
        header: 'نقش',
        dataIndex: 'roleText',
        width: 150,
        editor: {
            name: 'role',
            xtype: 'combo',
            forceSelection: true,
            typeAhead: true,
            displayField: 'text',
            valueField: 'value',
            allowBlank: false,
            value:'councillor',
            store: Ahura.store.CouncilMembership

        }
    }
];
Ext.define('Mehr.view.entity.TermCouncilGrid', {
    extend: 'Ahura.grid.Base',
    xtype: 'role-grid',
    plugins: [
        {
            ptype:'rowediting',
            clicksToEdit: 1
        }
    ],
    columns: termColumns,
    tbar: [
        {
            text: 'افزودن',
            icon: icon('userAdd'),
            handler: function () {
                var grid=this.up('role-grid');
                rowEditing.cancelEdit();
                grid.getStore().insert(0, [
                    []
                ]);
                grid.findPlugin('rowediting').startEdit(0, 0);
            }
        },
        {
            itemId: 'removeUserBtn',
            text: 'حذف',
            icon: icon('userDelete'),
            handler: function () {
                var grid=this.up('grid');
                var sm = grid.getSelectionModel();
                var store = grid.getStore();
                grid.findPlugin('rowediting').cancelEdit();
                store.remove(sm.getSelection());
                if (store.getCount() > 0) {
                    sm.select(0);
                }
            },
            disabled: true
        }
    ],
    initComponent: function () {
        this.store = 'Role';
        this.callParent(arguments);
        this.down('pagingtoolbar').bindStore(this.store);
    },
    listeners: {
        beforeedit: function (editor, context, eOpt) {
            context.record.set('councilId', context.grid.up('window').info.get('id'));
        },
        'selectionchange': function (view, records) {
            this.down('#removeUserBtn').setDisabled(!records.length);
        }

    }
})
Ext.define('Mehr.view.user.Role', {
    extend: 'Ahura.window.Base',
    requires: 'Ahura.form.combo.User',
    title: 'ویرایش/ایجاد دوره',
    height: 500,
    width: 500,
    items: [
        {xtype: 'role-grid'}
    ],
    initComponent: function () {
        this.title = (this.info) ? 'شورای مرکزی: ' + this.info.get('name') : "شورای مرکزی";
        this.callParent(arguments);
        var grid = this.down('grid');
        grid.getStore().getProxy().setExtraParam('councilId', (this.info) ? this.info.get('id') : this.tid);
        grid.getStore().load();
    }

});