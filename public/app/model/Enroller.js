Ext.define('Mehr.model.Enroller', {
    extend: 'Ext.data.Model',
    fields: ['program', 'id', 'firstName', 'lastName', 'nid', 'sid', 'sex', 'status','statusText'],
    proxy: {
        type: 'direct',
                reader: {
            type: 'json',
            root: 'data',
            totalProperty: 'total'
        },
        api: {
            read: 'RPC.EnrollerApi.read',
            destroy: 'RPC.EnrollerApi.destroy',
            update: 'RPC.EnrollerApi.create',
            create: 'RPC.EnrollerApi.create'
        }
    }
});

