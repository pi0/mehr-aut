Ext.define('Ahura.grid.Base', {
    extend: 'Ext.grid.Panel',
    xtype: 'base-grid',
    frame: false,
    loadMask: true,
    clicksToEdit: 1,
    autoExpandColumn: "name",
    features: [
        {
            ftype: 'filters',
            menuFilterText: 'فیلتر',
            local: false,
            encode: true
        }
    ],
    constructor: function () {
        this.callParent(arguments);
        this.on({
            scope: this,
            itemdblclick: this.dblClick
        });
        if (this.menu) {
            if (!(this.menu instanceof Ext.menu.Menu)) {
                this.menu = this.buildMenu(this.menu);
            }
            this.on({
                scope: this,
                itemcontextmenu: this.onItemContextMenu
            });
        }
    },
    initComponent: function () {
        this.bbar = [
            {
                xtype: 'pagingtoolbar',
                displayInfo: true,
                displayMsg: 'نمایش موارد {0} - {1} از {2}',
                emptyMsg: "موردی یافت نشد."
            },
            '->'
            ,
            {
                text: 'اکسل',
                'icon': icon('excel')
            }, {
                xtype: 'splitbutton',
                'tooltip': 'چاپ همه صفحات',
                text: 'چاپ',
                'icon': icon('printer'),
                menu: [
                    {
                        text: 'چاپ این صفحه',
                        'icon': icon('printer'),
                        handler: function () {
                            Ext.create('Mehr.view.council.Edit', {isNew: true, info: this.up('window').info});
                        }
                    },
                    {
                        text: 'چاپ همه صفحات',
                        'icon': icon('printer'),
                        handler: function () {
                            Ext.create('Mehr.view.council.Edit', {isNew: true, info: this.up('window').info});
                        }
                    }
                ]
            }
        ];
        this.callParent(arguments);
    },
    buildMenu: function (menuCfg) {
        if (Ext.isArray(menuCfg)) {
            menuCfg = {
                items: menuCfg,
                rtl: true,
                grid: this
            };
        }

        return Ext.create('Ext.menu.Menu', menuCfg);
    },
    onItemContextMenu: function (grid, model, row, index, evt) {
        evt.stopEvent();
        this.menu.grid = grid;
        this.menu.model = model;
        this.menu.rowId = model.getId();
        this.menu.showAt(evt.getXY());
    },
    dblClick: function (me, record, item, index, e, eOpts) {
        e.stopEvent();
        if (typeof this.dblHandle != 'undefined' && Ext.isFunction(this.dblHandle))
            this.dblHandle(record);
    }
});
