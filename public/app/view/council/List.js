(function(){
    var columns = [
        {
            xtype: 'actioncolumn',
            width: 45,
            items: [
                {
                    tooltip: 'ویرایش/مشاهده',
                    icon: icon('gear'),
                    handler: function (grid, rowIndex, colIndex, item, event, record, row) {
                        Ext.create('Mehr.view.council.Edit', {info: record});
                    }
                }
                ,
                {
                    icon: icon('groupAdd'),
                    tooltip: 'شورای مرکزی',
                    handler: function (grid, rowIndex, colIndex, item, event, record, row) {
                        var record = {};
                        record.get = function(d){
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
            flex:.75,
            dataIndex: 'secretaryFullName'
        }
    ];
    Ext.define("Mehr.view.council.Grid", {
        extend: "Ahura.grid.Base",
        xtype: "councilGrid",
        columns: columns,
        initComponent: function () {
            this.store = 'Council';
            this.callParent(arguments);
            this.down('pagingtoolbar').bindStore(this.store);
        }
    });
    Ext.define("Mehr.view.council.List", {
        extend: "Ahura.window.Grid",
        info: [],
        items: [
            {xtype: 'councilGrid'}
        ],
        initComponent: function () {console.log(this.info);
            this.title = this.info.title || this.info.row.data.typeText || 'شوراها';
            this.callParent(arguments);
            var grid = this.down('grid');
            var type = (this.info.for == 'user') ? 'user' : 'entity';
            grid.getStore().getProxy().setExtraParam(type, (this.info.row) ? this.info.row.getId() : this.tid);
            grid.getStore().load();
        }

    });
})()