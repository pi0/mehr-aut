Ext.require('Ahura.form.combo.User');
var columns = Ext.clone(Ahura.userColumns);
var statusCol = {
    header: 'وضعیت',
    dataIndex: 'statusText',
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
        var rec = Mehr.store.Enrollers.getAt(ri);
        Ext.Ajax.request({
                url: '/program/json-unsubscribe-user',
                params: {
                    user_id: rec.get('user_id'),
                    program_id: Mehr.v.program_id
                }
            }
        );
        Mehr.grid.Enrollers.getStore().reload();
    }
};
columns.splice(1, 0, delCol, statusCol);
var tbar = [
    'افزودن:', ' ',
    {
        xtype: 'user-combo',
        fieldLabel: ''
    },
    'وضعیت نام‌نویسی:',
    {
        xtype: 'combo',
        name: 'status',
        value: 'final',
        store: Ahura.store.EnrollmentStatus
    },
    {
        xtype: 'button',
        icon: icon('userAdd'),
        tooltip: "افزودن کاربر انتخاب شده",
        handler: function (button, event) {
            var id = this.up().down('user-combo').getValue();
            var status = this.up().down('[name=status]').getValue();
            if (id) {
                var grid = button.up('grid');
                var enroll = Ext.create('Mehr.model.Enroller', {program: grid.up('window').info.get('id'), id: id, status: status});
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
    },
    '-',
    {
        xtype: 'button',
//        icon: icon('userAdd'),
        text: "تغییر وضعیت",
//        tooltip:'برای تغییر وضعیت، یک یا چند کاربر را از جدول برگزینید و پس از تعیین وضعیت از منوی کناری، روی این دکمه کلیک کنید.',
        handler: function (button, event) {
            var status = this.up().down('[name=status]').getValue();

            if (status) {
                var grid = button.up('grid');
                var selection = grid.getSelectionModel().getSelection();
                selection.forEach(function (e) {
                    e.set('status', status);
                    e.save({
                        failure: function (record, operation) {
                            Ext.MessageBox.show({
                                rtl: true,
                                title: 'خطا',
                                msg: operation.request.proxy.reader.jsonData.errors,
                                buttons: Ext.MessageBox.OK,
                                icon: Ext.MessageBox.ERROR
                            });
//
                        }
                    });
                    grid.getStore().load();
                })
            }
        }
    }
];
Ext.define("Mehr.view.council.MemberGrid", {
    extend: "Ahura.grid.Base",
    alias: "widget.councilMembersGrid",
    selModel: {model: 'MULTI'},
    multiSelect: true,
    require: 'Ahura.form.combo.SID',
    columns: columns,
    tbar: tbar,
    initComponent: function () {
        var me = this;
        me.store = 'Council'
        me.callParent(arguments);
        me.down('pagingtoolbar').bindStore(me.store);
    }
});
Ext.define("Mehr.view.council.Member", {
    extend: "Ahura.window.Grid",
    alias: "widget.members",
    title: 'اعضای شورای مرکزی',
    items: [
        {xtype: 'councilMembersGrid'}
    ],
    initComponent: function () {

        this.title = 'نام‌نوشتگان در:' + ' ' + 'asdf';
        this.callParent(arguments);
        var grid = this.down('grid');
        grid.getStore().getProxy().setExtraParam('program',63);
        grid.getStore().load();
    }
})