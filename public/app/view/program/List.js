var columns = [
    {
        xtype: 'actioncolumn',
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
                    var win = Ext.create('Mehr.view.program.Enrollers', {info: record});
//                    var grid = win.down('grid');
//                    grid.setProgramId(programId);
//                    grid.getStore().getProxy().setExtraParam('programId', programId);
//                    grid.getStore().load();
                }
            }
        ]

    },
    {
        header: "عنوان",
        flex: 1,
        filterable: true,
        dataIndex: "name"

    }
    ,
    {
        header: "متولی",
        flex: 1,
        filterable: true,
        dataIndex: "entityFullName"
    }
    ,
    {
        header: "نوع",
        hidden: true,
        dataIndex: "typeText",
        filter: {
            type: 'list',
            options: Ahura.store.ProgramType
        }
    }
    ,
    {
        header: "موضوع",
        hidden: true,
        filter: {
            type: 'list',
            store: Ahura.store.ProgramSubject
        },
        dataIndex: "subjectText"
    }
    ,
    {
        header: "وضعیت نام‌نویسی",
        dataIndex: "enrollmentStatusText",
        filter: {
            type: 'list',
            store: Ahura.store.TimeStage
        },
        renderer: function (value, metaData, record, rowIndex, colIndex, store) {
            if ('c' == record.get('enrollmentStatus'))
                return  '<span style="color:red;">' + value + '</span>';
            if ('b' == record.get('enrollmentStatus'))
                return  '<span style="color:blue;">' + value + '</span>';
            if ('a' == record.get('enrollmentStatus'))
                return  '<span style="color:green;">' + value + '</span>';
            return 'نامشخص';
        }
    }
    ,
    {
        header: "وضعیت اجرا",
        dataIndex: "executionStatusText",
        renderer: function (value, metaData, record, rowIndex, colIndex, store) {
            if ('c' == record.get('executionStatus'))
                return  '<span style="color:red;">' + value + '</span>';
            if ('b' == record.get('executionStatus'))
                return  '<span style="color:blue;">' + value + '</span>';
            if ('a' == record.get('executionStatus'))
                return  '<span style="color:green;">' + value + '</span>';
            return 'نامشخص';
        }
    },
    {
        header: "نام‌نوشته‌گان",
        filter: {type: 'numeric'},
        dataIndex: "enrollerCount"
    }
    ,
    {
        header: "شمار نام‌نوشتگاه قطعی",
        hidden: true,
        filter: {type: 'numeric'},
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
    info: [],
    items: [
        {xtype: 'programsGrid'}
    ],
    initComponent: function () {
        this.title = this.info.title || 'برنامه‌ها';
            this.callParent(arguments);
        var grid = this.down('grid');
//        this.down('pagingtoolbar').bindStore(grid.getStore());
        grid.getStore().getProxy().setExtraParam('userId', (this.info.row) ? this.info.row.getId() : this.tid);
        grid.getStore().load();
    }
});
