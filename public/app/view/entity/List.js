var entityColumns = [
    {
        xtype: 'actioncolumn',
        header:'مدیریت',
        width: 30,
        items: [
            {
                icon: icon('gear'),                // Use a URL in the icon config
                tooltip: 'مدیریت نهاد',
                handler: function (grid, rowIndex, colIndex) {
                    Ext.create('Mehr.view.entity.Info');
                }
            }
        ]

    },
    {
        header: "نوع",
        dataIndex: "type"
    },
    {
        header: "عنوان",
        dataIndex: "name",
        flex:1
    },
    {
        header: "مخاطبان",
        dataIndex: "program_type_txt"
    },
    {
        header: "اعضاء",
        dataIndex: "confirmed_count",
    }];
Ext.define("Mehr.view.entity.Grid", {
    extend: "Ahura.grid.Base",
    xtype: "entityGrid",
    columns: entityColumns,
    initComponent: function () {
        this.store = 'Entity';
        this.callParent(arguments);
        this.down('pagingtoolbar').bindStore(this.store);
    }
});

Ext.define("Mehr.view.entity.List", {
    extend: "Ahura.window.Grid",
    title: 'نهاد‌ها',
    items: [
        {xtype: 'entityGrid'}
    ]
});
