var columns = [
    {
        xtype: 'actioncolumn',
        alt: "54",
        width: 50,
        items: [
            {
                icon: icon('pencil'),                // Use a URL in the icon config
                tooltip: 'ویرایش برنامه',
                handler: function (grid, rowIndex, colIndex) {
                    var id = grid.getStore().getAt(rowIndex).getId();
                    var panel = Ext.create('Mehr.view.program.Edit');
                    panel.down('form').getForm().load({params: {id: id}});
//                    Ext.create('Mehr.view.program.Edit').down('form').getForm().load({params: {'id': id}});
//                    var rec = Mehr.store.Programs.getAt(rowIndex);
//                    Mehr.v.program_id = rec.get('program_id');
//                    Mehr.formPanel.ProgramEdit.load({
//                        url: '/admin/json-Get-Programe',
//                        params: {
//                            program_id: Mehr.v.program_id
//                        },
//                        failure: function (form, action) {
//                            Ext.Msg.alert("Load failed", action.result.errorMessage);
//                        }
//                    });
//                    Mehr.window.ProgramEdit.show();
                }
            },
            {
                icon: icon('groupAdd'),                // Use a URL in the icon config
                tooltip: 'مدیریت نام نوشتگان',
                handler: function (grid, rowIndex, colIndex, item, event, record, row) {
                    var win = Ext.create('Mehr.view.program.Enrollers');
                    var grid=win.down('grid');
                    var programId = record.get('id');
                    grid.setProgramId(programId);
                    grid.getStore().getProxy()  .setExtraParam('programId', programId);
                    grid.getStore().load();
                }
            }
        ]

    },
    {
        flex: 1,
        header: "عنوان",
        dataIndex: "name"

    }
    ,
    {
        header: "نوع",
        dataIndex: "typeText"
    }
    ,
    {
        header: "موضوع",
        dataIndex: "subjectText"
    }
    ,
    {
        header: "وضعیت نام‌نویسی",
        dataIndex: "enrollmentStatusText",
        renderer: function (value, metaData, record, rowIndex, colIndex, store) {
            if (0 == record.get('enrollmentStatus'))
                return  '<span style="font-weight:bold;color:red;">' + value + '</span>';
            if (-1 == record.get('enrollmentStatus'))
                return  '<span style="font-weight:bold;color:blue;">' + value + '</span>';
            if (1 == record.get('enrollmentStatus'))
                return  '<span style="color:green;">' + value + '</span>';
            return value;

        }
    }
    ,
    {
        header: "وضعیت اجرا",
        dataIndex: "executionStatusText",
        renderer: function (value, metaData, record, rowIndex, colIndex, store) {
            if (0 == record.get('executionStatus'))
                return  '<span style="font-weight:bold;color:red;">' + value + '</span>';
            if (-1 == record.get('executionStatus'))
                return  '<span style="font-weight:bold;color:blue;">' + value + '</span>';
            if (1 == record.get('executionStatus'))
                return  '<span style="color:green;">' + value + '</span>';
            return value;

        }
    },
    {
        header: "شمار نام‌نوشته‌گان",
        dataIndex: "enrollerCount"
    }
    ,
    {
        header: "شمار نام‌نوشتگاه قطعی",
        hidden:true,
        dataIndex: "confirmedCount"
    }

];
Ext.define("Mehr.view.program.Grid", {
    extend: "Ahura.grid.Base",
    xtype: "programsGrid",
    columns: columns,
    initComponent: function () {
        this.store = 'Program';
        this.callParent(arguments);
        this.down('pagingtoolbar').bindStore(this.store);
    }
});

Ext.define("Mehr.view.program.List", {
    extend: "Ahura.window.Grid",
    alias: "widget.programs",
    title: 'برنامه‌ها',
    items: [
        {xtype: 'programsGrid'}
    ]
});
