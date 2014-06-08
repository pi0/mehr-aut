Ext.define('Mehr.store.Member', {
        autoLoad: false,
        autoSync: true,
        extend: 'Ext.data.Store',
        batchUpdateMode: 'complete',
        model: 'Mehr.model.Member'
    }
);