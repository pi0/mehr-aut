Ext.define('Mehr.model.Council', {
    extend: 'Ext.data.Model',
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
        api: {
            read: 'RPC.CouncilApi.read',
            destroy: 'RPC.CouncilApi.destroy',
            create: 'RPC.CouncilApi.create',
            update: 'RPC.CouncilApi.create'
        }
    }
});


Ext.define('Mehr.store.Council', {
        extend: 'Ext.data.Store',
        autoLoad: false,
        autoSync: true,
        batchUpdateMode: 'complete',
        model: 'Mehr.model.Council'
    }
);