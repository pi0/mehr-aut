Ext.define('Mehr.model.Member', {
    extend: 'Ext.data.Model',
    fields: ['entityId', 'id', 'firstName', 'lastName', 'nid', 'sid', 'sex', 'status','statusText'],
    proxy: {
        reader: {
            type: 'json',
            root: 'data',
            totalProperty: 'total'
        },
        type: 'direct',
        api: {
            read: 'RPC.MemberApi.read',
            destroy: 'RPC.MemberApi.destroy',
            update: 'RPC.MemberApi.create',
            create: 'RPC.MemberApi.create'
        }
    }
});