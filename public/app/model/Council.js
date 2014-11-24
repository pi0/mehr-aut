Ext.define('Mehr.model.Council', {
    extend: 'Ext.data.Model',
    proxy: {
        type: 'direct',
        extraParams:{
          'foo':'bar'
        },
//        paramsAsHash: true,
        api: {
            read: 'RPC.CouncilApi.read',
            destroy: 'RPC.CouncilApi.destroy',
            create: 'RPC.CouncilApi.create',
            update: 'RPC.CouncilApi.create'
        }
    },
    fields: ['userId','councilId','role','name','entityId','entityFullName']
});