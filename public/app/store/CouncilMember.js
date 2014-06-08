Ext.define('Mehr.store.CouncilMember', {
        extend: 'Ext.data.Store',
        autoLoad: false,
        autoSync: true,
        batchUpdateMode: 'complete',
        model: 'Mehr.model.CouncilMember'
    }
);