Ext.define('Mehr.model.Role', {
    extend: 'Ext.data.Model',
    fields: ['userId', 'councilId', 'role', 'name'],
    proxy: {
        type: 'direct',
                reader: {
            type: 'json',
            root: 'data',
            totalProperty: 'total'
        },
        api: {
            read: 'RPC.CouncilApi.read',
            destroy: 'RPC.CouncilApi.destroy',
            create: 'RPC.CouncilApi.create',
            update: 'RPC.CouncilApi.create'
        }
    }
});




