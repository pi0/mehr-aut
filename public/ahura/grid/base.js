Ext.define('Ahura.grid.Base', {
    extend: 'Ext.grid.Panel',
    frame: false,
    loadMask: true,
    clicksToEdit: 1,
    autoExpandColumn: "name",
    initComponent: function () {
        this.bbar = {
            xtype: 'pagingtoolbar',
            displayInfo: true,
            displayMsg: 'نمایش موارد {0} - {1} از {2}',
            emptyMsg: "موردی یافت نشد."
        }
        this.callParent(arguments);
    }
});