Ext.define('Mehr.store.Enroller', {
    extend: 'Ahura.store.Direct',
    autoLoad: 'true',
    fields: [
        "id",
        "name",
        "manager",
        "type",
        "cDate",
        "enrollmentStartDate",
        "enrollmentEndDate",
        "enrollmentMethod",
        "minCapacity",
        "maxCapacity",
        "cost",
        "paymentMethod",
        "level",
        "details",
        "subject",
        "audienceLevel",
        "audience",
        "executionFromDate",
        "executionToDate",
        "planId",
        "sessions",
        "prerequisites"
    ],
    sortInfo: {
        field: 'name'
    },
    proxy: {
        type: 'direct',
        paramsAsHash:true,
        extraParams:{
            name:3
        },
//        paramOrder: ['id'],
        api: {
            read: RPC.ProgramApi.read
        },
//        directFn: RPC.ProgramApi.read,
        reader: {
            type: 'json',
            root: 'data',
            totalProperty: 'total',
            id: 'id'
        }
    }
});
