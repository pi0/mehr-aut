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
                icon: icon('groupAdd'),                // Use a URL in the icon config
                tooltip: 'شورای مرکزی',
                handler: function (grid, rowIndex, colIndex, item, event, record, row) {
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
        width: 50,
        dataIndex: 'name'
    },
    {
        header: 'دبیر',
        flex: 1,
        dataIndex: 'secretaryFullName'
    }
];
Ext.define('Mehr.view.council.ListGrid', {
        xtype: 'councilListGrid',
        columns: columns,
        store: 'Council'
//            initComponent: function () {
////                this.store = 'Council';
//                this.callParent(arguments);
//            }
//
    }
);
Ext.define('Mehr.view.council.List', {
    extend: 'Ahura.window.Grid',
    height: 300,
    width: 400,
    items: {xtype:'councilListGrid'},
    initComponent: function () {
        this.title = (this.info.for == 'user') ? this.info.title : (this.info.row) ? 'شورای مرکزی: ' + this.info.row.get('name') : "شورای مرکزی";
        this.callParent(arguments);

//        var grid = this.down('grid');
//        this.down('pagingtoolbar').bindStore(grid.getStore());
//        var grid = this.down('grid');
////        if (this.info.for == 'user') {
////            grid.getStore().getProxy().setExtraParam('userId', this.info.row.getId());
////        }
//// else {
////            grid.getStore().getProxy().setExtraParam('entityId', (this.info) ? this.info.getId() : this.tid);
////        }
////        grid.getStore().load();
    }
});
