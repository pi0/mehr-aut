Ext.define('Mehr.model.Entity', {
    extend: 'Ext.data.Model',
    fields: [
        "id",
        "name",
        "typeText",
        'councilCount',
        'memberCount'
    ],
    proxy: {
        type: 'direct',
        reader: {
            type: 'json',
            root: 'data',
            totalProperty: 'total'
        },
        api: {
            read: 'RPC.EntityApi.read',
            destroy: 'RPC.EntityApi.destroy',
            create: 'RPC.EntityApi.create',
            update: 'RPC.EntityApi.create'
        }
    }

});

