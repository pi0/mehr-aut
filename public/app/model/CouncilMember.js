Ext.define('Mehr.model.CouncilMember', {
    extend: 'Ext.data.Model',
    fields: ['id', 'userId', 'councilId', 'role', 'roleText', 'fullName', 'sid'],
    proxy: {
        type: 'direct',
                reader: {
            type: 'json',
            root: 'data',
            totalProperty: 'total'
        },
        api: {
            read: 'RPC.CouncilMemberApi.read',
            destroy: 'RPC.CouncilMemberApi.destroy',
            update: 'RPC.CouncilMemberApi.create',
            create: 'RPC.CouncilMemberApi.create'
        }
    }
});


