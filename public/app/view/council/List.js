Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.ux.grid.FiltersFeature',
    'Ext.toolbar.Paging'
]);
var entityColumns = [
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
Ext.define("Mehr.view.entity.Grid", {
    extend: "Ahura.grid.Base",
    xtype: "entityGrid",
    columns: entityColumns,
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
        {xtype: 'entityGrid'}
    ],
    initComponent: function () {
        this.title = this.info.title || 'شوراها';
        this.callParent(arguments);
        var grid = this.down('grid');
        var type = (this.info.for == 'user') ? 'userId' : 'entityId';
        grid.getStore().getProxy().setExtraParam(type, (this.info.row) ? this.info.row.getId() : this.tid);
        grid.getStore().load();
    }

});
