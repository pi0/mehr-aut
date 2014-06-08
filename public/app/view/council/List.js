Ext.define('Mehr.view.council.List', {
    extend: 'Ahura.window.Grid',
    config: {
        foo: null
    },
    height: 300,
    width: 400,
    bbar: null,
    items: [
        {
            requires: ['Ahura.grid.Base'],
            xtype: 'base-grid',
            store: 'Council',
            columns: [
                {
                    width: 45,
                    xtype: 'actioncolumn',
                    items: [
                        {
                            tooltip: 'ویرایش/مشاهده',
                            icon: icon('gear'),
                            handler: function (grid, rowIndex, colIndex, item, event, record, row) {
                                Ext.create('Mehr.view.council.Edit',{info: record});
                            }
                        }
                        ,
                        {
                            icon: icon('groupAdd'),                // Use a URL in the icon config
                            tooltip: 'شورای مرکزی',
                            handler: function (grid, rowIndex, colIndex, item, event, record, row) {
                                var win = Ext.create('Mehr.view.council.Member',{
                                    info:record
                                });
                            }
                        }
                    ]                },
                {
                    header: 'دوره',
                    width: 50,
                    dataIndex: 'name'
                },
                {
                    header: 'دبیر',
                    flex: 1,
                    dataIndex: 'secretary'
                }
            ]
        }
    ],
    initComponent: function () {
        this.title = (this.info) ? 'شورای مرکزی: ' + this.info.get('name') : "شورای مرکزی";
        this.callParent(arguments);
        var grid = this.down('grid');
        this.down('pagingtoolbar').bindStore(grid.getStore());
        grid.getStore().getProxy().setExtraParam('entityId', (this.info) ? this.info.getId() : this.tid);
        grid.getStore().load();
    }
});
