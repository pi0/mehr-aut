Ext.require('Ahura.form.combo.User');
var columns = Ext.clone(Ahura.userColumns);
var roleCol = {
    header: 'وضعیت',
    dataIndex: 'roleText',
    width: 80
};
var delCol = {
    menuDisabled: true,
    header: "",
    xtype: 'actioncolumn',
    icon: icon('delete'),
    tooltip: "حدف کاربر از فهرست شرکت‌کننده‌گان",
    width: 22,
    handler: function (grid, rowIndex, colIndex, item, event, record, row) {
        var id = record.getId();
        record.destroy();
//        var panel = Ext.create('Mehr.view.user.Edit');
//        panel.down('form').getForm().load({params: {id: id}});
    },
    handler1: function (g, ri, ci) {
        var rec = Mehr.store.Member.getAt(ri);
        Ext.Ajax.request({
                url: '/entity/json-unsubscribe-user',
                params: {
                    user_id: rec.get('user_id'),
                    entity_id: Mehr.v.entity_id
                }
            }
        );
        Mehr.grid.Member.getStore().reload();
    }
};
columns.splice(1, 0, delCol, roleCol);
var tbar = [
    'افزودن:', ' ',
    {
        xtype: 'user-combo',
        fieldLabel: ''

    },
    'وضعیت/نقش:',
    {
        xtype: 'combo',
        name: 'role',
        value: 'member',
        store: Ahura.store.MembershipType
    },
    {
        xtype: 'button',
        icon: icon('userAdd'),
        tooltip: "افزودن کاربر انتخاب شده",
        handler: function (button, event) {
            var id = this.up().down('user-combo').getValue();
            var role = this.up().down('[name=role]').getValue();
            if (id) {
                var grid = button.up('grid');
                var enroll = Ext.create('Mehr.model.Member', {entityId: grid.up('window').info.get('id'), userId: id, role: role});
                enroll.save({
                    failure: function (record, operation) {
                        Ext.MessageBox.show({
                            rtl: true,
                            title: 'خطا',
                            msg: operation.request.proxy.reader.jsonData.errors,
                            buttons: Ext.MessageBox.OK,
                            icon: Ext.MessageBox.ERROR
                        });

                    }});
                grid.down('combo').reset();
                grid.getStore().load();
            }
        }
    }, '-',
    {
        xtype: 'button',
//        icon: icon('userAdd'),
        text: "اعمال وضعیت",
        handler: function (button, event) {
            var role = this.up().down('[name=role]').getValue();
            if (role) {
                var grid = button.up('grid');
                var selection = grid.getSelectionModel().getSelection();
                selection.forEach(function (e) {
                    e.set('role', role);
                    e.save({failure: function (record, operation) {
                        Ext.MessageBox.show({
                            rtl: true,
                            title: 'خطا',
                            msg: operation.request.proxy.reader.jsonData.errors,
                            buttons: Ext.MessageBox.OK,
                            icon: Ext.MessageBox.ERROR
                        });

                    }});
                });
                grid.getStore().load();
            }
        }
    }
];
Ext.define("Mehr.view.entity.MemberGrid", {
    extend: "Ahura.grid.Base",
    alias: "widget.memberGrid",
    config: {
        'entityId': null
    },
    selModel: {model: 'MULTI'},
    multiSelect: true,
    require: 'Ahura.form.combo.SID',
    columns: columns,
    tbar: tbar,
    initComponent: function () {
        var me = this;
        me.store = 'Member'
        me.callParent(arguments);
        me.down('pagingtoolbar').bindStore(me.store);
//        me.store.getProxy().setExtraParam('entityId', 3);
////        me.tbar = tbar;
////        me.columns = Ext.clone(me.columns);
////        var firstCol = me.columns.shift();
////        me.columns.unshift({
////            menuDisabled: true,
////            header: "",
////            xtype: 'actioncolumn',
////            icon: icon('delete'),
////            tooltip: "حدف کاربر از فهرست شرکت‌کننده‌گان",
////            width: 22,
////            handler: function (g, ri, ci) {
////                rec = Mehr.store.Member.getAt(ri);
////                Ext.Ajax.request({
////                        url: '/entity/json-unsubscribe-user',
////                        params: {
////                            user_id: rec.get('user_id'),
////                            entity_id: Mehr.v.entity_id
////                        }
////                    }
////                );
////                Mehr.grid.Member.getStore().reload();
////            }
////        });
////        me.columns.unshift(firstCol);
    }
});
Ext.define("Mehr.view.entity.MemberList", {
    extend: "Ahura.window.Grid",
    alias: "widget.member",
    items: [
        {xtype: 'memberGrid'}
    ],
    initComponent: function () {
        this.title = (this.info) ? 'عضوها:' + this.info.get('name') : "عضوها";
        this.callParent(arguments);
        var grid = this.down('grid');
        grid.getStore().getProxy().setExtraParam('entityId', this.info.get('id'));
        grid.getStore().load();
    }

})