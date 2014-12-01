Ext.define('Mehr.model.Enroller', {
    extend: 'Ext.data.Model',
    fields: ['programId', 'id', 'firstName', 'lastName', 'nid', 'sid', 'sex', 'status','statusText'],
    proxy: {
        type: 'direct',
        api: {
            read: 'RPC.EnrollerApi.read',
            destroy: 'RPC.EnrollerApi.destroy',
            update: 'RPC.EnrollerApi.create',
            create: 'RPC.EnrollerApi.create'
        }
    }
});

Ext.define('Mehr.store.Enroller', {
        extend: 'Ext.data.Store',
        autoLoad: false,
        autoSync: true,
        batchUpdateMode: 'complete',
        model: 'Mehr.model.Enroller'
    }
);