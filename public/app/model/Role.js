Ext.define('Mehr.model.Role', {
    extend: 'Ext.data.Model',
    proxy: {
        type: 'direct',
        api: {
            read: 'RPC.CouncilApi.read',
            destroy: 'RPC.CouncilApi.destroy',
            create: 'RPC.CouncilApi.create',
            update: 'RPC.CouncilApi.create'
        }
    },
    fields: ['userId', 'councilId', 'role', 'name']
});

