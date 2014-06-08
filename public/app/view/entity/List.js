var entityColumns = [
    {
        xtype: 'actioncolumn',
        header: 'مدیریت',
        width: 30,
        items: [
            {
                icon: icon('gear'),                // Use a URL in the icon config
                tooltip: 'مدیریت نهاد',
                handler: function (grid, rowIndex, colIndex, item, event, record, row) {
                    var data = grid.getStore().getAt(rowIndex).getData();
                    var panel = Ext.create('Mehr.view.entity.Info', {
                        info: record,
                        entityId: data.id,
                        items: {
                            itemId: "info",
                            data: data,
                            tpl: '<div id="entityManagement"><div class="settingIcon"></div><h3>{typeText}</h3><h1>{name}</h1></div>',
                            bodyStyle: {
                                padding: 15
                            }
                        }
                    });
//                    panel.down('form').getForm().load({params: {id: id}});
                }
            }
        ]

    },
    {
        header: "نوع",
        dataIndex: "typeText"
    },
    {
        header: "عنوان",
        dataIndex: "name",
        flex: 1
    },
    {
        header: "دوره‌ها",
        dataIndex: "councilCount",
        width:40
    },
    {
        header: "مخاطبان",
        dataIndex: "program_type_txt"
    },
    {
        header: "اعضاء",
        dataIndex: "confirmed_count",
    }
];
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
