
Ext.define('Mehr.store.Enroller', {
        extend: 'Ext.data.Store',
        autoLoad: false,
        autoSync: true,
        batchUpdateMode: 'complete',
        model: 'Mehr.model.Enroller'
    }
);