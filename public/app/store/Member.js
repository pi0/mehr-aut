
Ext.define('Mehr.store.Member', {
        extend: 'Ext.data.Store',
        autoLoad: false,
        autoSync: true,
        batchUpdateMode: 'complete',
        model: 'Mehr.model.Member'
    }
);