Ext.define('Mehr.model.Council', {
    extend: 'Ext.data.Model',
    //fields: ['user', 'councilId', 'role', 'name', 'entity', 'entityFullName'],
    fields: ['active', 'electionEndDate', 'electionStartDate', 'electionStatus', 'electionStatusText',
        'endDate',
        'enrollmentEndDate',
        'enrollmentStartDate',
        'enrollmentStatus',
        'enrollmentStatusText',
        'entityFullName',
        'entity',
        'id',
        'name',
        'note',
        'secretaryFullName',
        'startDate',
        'timeStage(startDate,endDate)',
        'user'],


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


