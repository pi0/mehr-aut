Ext.define('Mehr.model.CouncilMember', {
    extend: 'Ext.data.Model',
    fields: ['id', 'userId', 'councilId', 'role', 'roleText', 'fullName', 'sid'],
    proxy: {
        type: 'direct',
        api: {
            read: 'RPC.CouncilMemberApi.read',
            destroy: 'RPC.CouncilMemberApi.destroy',
            update: 'RPC.CouncilMemberApi.create',
            create: 'RPC.CouncilMemberApi.create'
        }
    }
});


Ext.define('Mehr.store.CouncilMember', {
        extend: 'Ext.data.Store',
        autoLoad: false,
        autoSync: true,
        batchUpdateMode: 'complete',
        model: 'Mehr.model.CouncilMember'
    }
);