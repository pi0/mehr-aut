Ext.require('Mehr.model.CouncilMember');
var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
    clicksToMoveEditor: 1,
    autoCancel: false
});
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
            name: 'userId',
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
    emptyText:'هیچ عضوی تعریف نشده است.',
    xtype: 'council-member-grid',
    plugins: [
        rowEditing
//        {
//            ptype:'rowediting',
//            clicksToEdit: 1
//        }
    ],
    columns: termColumns,
    tbar: [
        {
            text: 'افزودن',
            icon: icon('userAdd'),
            handler: function () {
                rowEditing.cancelEdit();
                this.up('council-member-grid').getStore().insert(0, [
                    []
                ]);
                rowEditing.startEdit(0, 0);
            }
        },
        {
            itemId: 'removeUserBtn',
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
    ],
    initComponent: function () {
        this.store = 'CouncilMember';
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
Ext.define('Mehr.view.council.Member', {
    extend: 'Ahura.window.Base',
    requires: 'Ahura.form.combo.User',
    title: 'ویرایش/ایجاد دوره',
    height: 500,
    width: 500,
    items: [
        {xtype: 'council-member-grid'}
    ],
    initComponent: function () {
        this.title = (this.info) ? 'شورای مرکزی: ' + this.info.get('name') : "شورای مرکزی";
        this.callParent(arguments);
        var grid = this.down('grid');
        grid.getStore().getProxy().setExtraParam('councilId', (this.info) ? this.info.get('id') : this.tid);
        grid.getStore().load();
    }

});