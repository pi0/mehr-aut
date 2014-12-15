(function () {
    var columns = [
        {
            xtype: 'actioncolumn',
            width: 45,
            items: [
                {
                    tooltip: 'ویرایش/مشاهده',
                    icon: icon('gear'),
                    handler: function (view, rowIndex, colIndex, item, event, record, row) {
                        view.up('grid').dblHandle(record);
                    }
                }
                ,
                {
                    icon: icon('groupAdd'),
                    tooltip: 'شورای مرکزی',
                    handler: function (grid, rowIndex, colIndex, item, event, record, row) {
                        var record = {};
                        record.get = function (d) {
                            return this.id;
                        }
                        record.id = 63;
                        var win = Ext.create('Mehr.view.council.Member', {
                            info: record
                        });
                    }
                }
            ]
        },
        {
            header: 'نهاد',
            flex: 1,
            dataIndex: 'entityFullName'
        },
        {
            header: 'دوره',
            width: 100,
            dataIndex: 'name'
        },
        {
            header: 'دبیر',
            flex: .75,
            dataIndex: 'secretaryFullName'
        }
    ];
    Ext.define("Mehr.view.council.Grid", {
        extend: "Ahura.grid.Base",
        columns: columns,
        xtype: "councilGrid",
        initComponent: function () {
            this.store = 'Council';
            this.callParent(arguments);
            this.down('pagingtoolbar').bindStore(this.store);
        },
        dblHandle: function(record ){
            Ext.create('Mehr.view.council.Edit', {info: record});

        }
    });
    Ext.define("Mehr.view.council.List", {
        extend: "Ahura.window.Grid",
        info: [],
        items: [
            {xtype: 'councilGrid'}
        ],
        title: 'دوره‌های شوراهای مرکزی',
        initComponent: function () {
            this.title = this.info.title || this.title;
            this.callParent(arguments);
            var grid = this.down('grid');
            grid.getStore().getProxy().setExtraParam('id', this.info.id);
            grid.getStore().getProxy().setExtraParam('type', this.info.type);
            grid.getStore().load();
        }
    });
})()