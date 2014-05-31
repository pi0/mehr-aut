Ext.define('Mehr.model.Enroller', {
    extend: 'Ext.data.Model',
    fields: ['programId', 'id', 'firstName', 'lastName', 'nid', 'sid', 'sex', 'status','statusText'],
    proxy: {
        reader: {
            type: 'json',
            root: 'data',
            totalProperty: 'total'
        },
        type: 'direct',
//        paramsAsHash: true,
        api: {
            read: 'RPC.EnrollerApi.read',
            destroy: 'RPC.EnrollerApi.destroy',
            update: 'RPC.EnrollerApi.create',
            create: 'RPC.EnrollerApi.create'
        }
    }
});