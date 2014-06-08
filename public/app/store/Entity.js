Ext.define('Mehr.store.Entity', {
    extend: 'Ahura.store.Direct',
//    storeId:'program',
    fields: [
        "id",
        "name",
        "typeText",
        'councilCount'
    ],
    constructor: function () {
        this.callParent(arguments);
        this.getProxy().api.read = RPC.EntityApi.read;
    }
});
