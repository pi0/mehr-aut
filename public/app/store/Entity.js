Ext.define('Mehr.store.Entity', {
    extend: 'Ahura.store.Direct',
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
