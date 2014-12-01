(function () {
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
                    }
                },
                {
                    icon: icon('groupAdd'),                // Use a URL in the icon config
                    tooltip: 'مدیریت نام نوشتگان',
                    handler: function (grid, rowIndex, colIndex, item, event, record, row) {
                        var win = Ext.create('Mehr.view.program.Enrollers', {info: record});
                    }
                }
            ]

        },
        {
            header: "عنوان",
            flex: 1,
            filterable: true,
            dataIndex: "name"

        },
        {
            header: "تاریخ",
            filterable: true,
            dataIndex: "cDate"
        },
        {
            header: "موضوع",
            hidden: true,
            filter: {
                type: 'list',
                store: Ahura.store.ProgramSubject
            },
            dataIndex: "subjectText"
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

})()