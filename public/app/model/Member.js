Ext.define('Mehr.model.Member', {
    extend: 'Ext.data.Model',
    fields: ['id','entityId', 'userId', 'firstName', 'lastName', 'nid', 'sid', 'sex', 'role','roleText'],
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