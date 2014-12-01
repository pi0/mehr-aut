Ext.define('Mehr.model.Member', {
    extend: 'Ext.data.Model',
    fields: ['id','entityId', 'userId', 'firstName', 'lastName', 'nid', 'sid', 'sex', 'role','roleText'],
    proxy: {
        type: 'direct',
        api: {
            read: 'RPC.MemberApi.read',
            destroy: 'RPC.MemberApi.destroy',
            update: 'RPC.MemberApi.create',
            create: 'RPC.MemberApi.create'
        }
    }
});

Ext.define('Mehr.store.Member', {
        extend: 'Ext.data.Store',
        autoLoad: false,
        autoSync: true,
        batchUpdateMode: 'complete',
        model: 'Mehr.model.Member'
    }
);