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
        api: {
            read: 'RPC.EntityApi.read',
            destroy: 'RPC.EntityApi.destroy',
            create: 'RPC.EntityApi.create',
            update: 'RPC.EntityApi.create'
        }
    }
});

Ext.define('Mehr.store.Entity', {
        extend: 'Ext.data.Store',
        autoLoad: true,
        autoSync: true,
        batchUpdateMode: 'complete',
        model: 'Mehr.model.Entity'
    }
);