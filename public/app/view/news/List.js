(function () {
    var columns = [
        {
            header: "تاریخ",
            width: 100,
            filterable: true,
            dataIndex: "cDate"
        },
        {
            header: "عنوان",
            width: 100,
            filterable: true,
            dataIndex: "name"

        },
        {
            header: "متن",
            flex: 1,
            filterable: true,
            dataIndex: "name"
        }
    ];
    Ext.define("Mehr.view.news.Grid", {
        extend: "Ahura.grid.Base",
        xtype: "newsGrid",
        columns: columns,
        store:'News',
        initComponent: function () {
            this.store = 'News';
            this.callParent(arguments);
            this.down('pagingtoolbar').bindStore(this.store);
        }
    });

    Ext.define("Mehr.view.news.List", {
        extend: "Ahura.window.Grid",
        //alias: "widget.news",
        title: 'اخبار',
        info: [],
        items: [
            {xtype: 'newsGrid'}
        ],
        initComponent: function () {
            this.callParent(arguments);
            //var grid = this.down('grid');
            //grid.getStore().getProxy().setExtraParam('userId', (this.info.row) ? this.info.row.getId() : this.tid);
            //grid.getStore().load();
        }
    });

})()