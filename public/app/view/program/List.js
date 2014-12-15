(function () {
    var timeStageRenderer = function (value, metaData, record, rowIndex, colIndex, store) {
        var text = cnst.timeStage[value];
        if ('c' == value)
            return '<span style="color:red;">' + text + '</span>';
        if ('p' == value)
            return '<span style="color:blue;">' + text + '</span>';
        if ('f' == value)
            return '<span style="color:green;">' + text + '</span>';
        return 'نامشخص';
    };
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
            dataIndex: "enrollmentStatus",
            filter: {
                type: 'list',
                store: Ahura.store.TimeStage
            },
            renderer: timeStageRenderer
        }
        ,
        {
            header: "وضعیت اجرا",
            dataIndex: "executionStatusText",
            renderer: timeStageRenderer
        },
        {
            header: "شرکت‌کننده‌گان",
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
        title: 'برنامه‌ها',
        items: [
            {xtype: 'programsGrid'}
        ],
        initComponent: function () {
            this.title = this.info.title || this.title;
            this.callParent(arguments);
            var grid = this.down('grid');
            grid.getStore().getProxy().setExtraParam('id', this.info.id);
            grid.getStore().getProxy().setExtraParam('type', this.info.type);
            grid.getStore().load();
        }
    });
})();