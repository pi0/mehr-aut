Ext.define('Mehr.model.CouncilMember', {
//    extend: 'Ahura.model.Direct',
    extend: 'Ext.data.Model',
    fields: ['id','userId', 'councilId', 'role', 'roleText', 'fullName','sid'],
    proxy: {
        type: 'direct',
        reader: {
            type: 'json',
            root: 'data',
            totalProperty: 'total'
        },
        extraParams:{
          foo:'333'
        },
        api: {
            read: 'RPC.CouncilMemberApi.read',
            destroy: 'RPC.CouncilMemberApi.destroy',
            update: 'RPC.CouncilMemberApi.create',
            create: 'RPC.CouncilMemberApi.create'
        }
    }
});
// Ext.define('Mehr.model.CouncilMember', {
//    fields: ['userId', 'councilId', 'role', 'roleText', 'fullName'],
//    constructor: function (config) {
//        console.log(config);
//
//        config = config || {};
//        Ext.merge(config, {
//            proxy: {
//                api: {
//                    read: 'RPC.CouncilMemberApi.read',
//                    destroy: 'RPC.CouncilMemberApi.destroy',
//                    update: 'RPC.CouncilMemberApi.create',
//                    create: 'RPC.CouncilMemberApi.create'
//                }
//            }
//        });
//        this.callParent([config]);
//    }
//});