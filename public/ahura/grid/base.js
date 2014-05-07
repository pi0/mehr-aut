Ext.define('Ahura.grid.Base', {
    extend: 'Ext.grid.Panel',
    loadMask: true,
    clicksToEdit: 1,
    autoExpandColumn: "title",
//    defaults: {
//        sortable: false
//    },
    bbar: {
        xtype:'pagingtoolbar',
        pageSize: 50,
        displayInfo: true,
        displayMsg: 'نمایش موارد {0} - {1} از {2}',
        emptyMsg: "موردی یافت نشد.",
//        store: Mehr.store.Programs
    }
});

//    bbar: Ext.create('Ext.PagingToolbar', {
//        displayInfo: true,
//        displayMsg: 'نمایش موارد {0} - {1} از {2}',
//        emptyMsg: "موردی یافت نشد.",
//           store:"Users"
//        //store:"Users",
//    })
