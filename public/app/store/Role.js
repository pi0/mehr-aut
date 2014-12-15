Ext.define('Mehr.model.Role', {
    extend: 'Ext.data.Model',
    fields: ['user', 'councilId', 'role', 'name'],
    proxy: {
        type: 'direct',
        api: {
            read: 'RPC.CouncilApi.read',
            destroy: 'RPC.CouncilApi.destroy',
            create: 'RPC.CouncilApi.create',
            update: 'RPC.CouncilApi.create'
        }
    }
});



Ext.define('Mehr.store.Role', {
    autoLoad: false,
    autoSync: true,
    extend: 'Ext.data.Store',
    batchUpdateMode: 'complete',
    model: 'Mehr.model.Role'
});