Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.ux.grid.FiltersFeature',
    'Ext.toolbar.Paging'
]);
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
                        entity: data.id,
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
        flex: .7,
        dataIndex: "typeText"
//        filter:{
//            type:'list',
//            store:[3,4,5,6]
////            store:Ahura.store.EntityType
//        }
    },
    {
        header: "عنوان",
        dataIndex: "name",
        flex: 1
    },
    {
        header: "دوره‌ها",
        dataIndex: "councilCount",
        width: 40
    },
//    {
//        header: "مخاطبان",
//        dataIndex: "program_type_txt",
//        xtype: 'numbercolumn',
//    },
    {
        header: "اعضاء",
        dataIndex: "memberCount",
//        xtype: 'numbercolumn',
        width: 50,
        filterable: true
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
    info: [],
    items: [
        {xtype: 'entityGrid'}
    ],
    initComponent: function () {
        this.title = this.info.title || 'نهاد‌ها';
        this.callParent(arguments);
        var grid = this.down('grid');
        grid.getStore().getProxy().setExtraParam('user', (this.info.row) ? this.info.row.getId() : this.tid);
        grid.getStore().load();
    }

});
