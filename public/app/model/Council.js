Ext.define('Mehr.model.Council', {
    extend: 'Ext.data.Model',
    //fields: ['userId', 'councilId', 'role', 'name', 'entityId', 'entityFullName'],
    fields: ['active','electionEndDate','electionStartDate','electionStatus','electionStatusText',
        'endDate',
        'enrollmentEndDate',
        'enrollmentStartDate',
        'enrollmentStatus',
        'enrollmentStatusText',
        'entityFullName',
        'entityId',
        'id',
        'name',
        'note',
        'secretaryFullName',
        'startDate',
        'timeStage(startDate,endDate)',
        'userId'],


    proxy: {
        type: 'direct',
                reader: {
            type: 'json',
            root: 'data',
            totalProperty: 'total'
        },
        api: {
            read: 'RPC.CouncilApi.read',
            destroy: 'RPC.CouncilApi.destroy',
            create: 'RPC.CouncilApi.create',
            update: 'RPC.CouncilApi.create'
        }
    }
});


