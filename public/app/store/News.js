Ext.define('Mehr.store.News', {
        extend: 'Ext.data.Store',
        autoLoad: true,
        autoSync: true,
        batchUpdateMode: 'complete',
        model: 'Mehr.model.News',
        reader: {
            type: 'json',
            root: 'data',
            totalProperty: 'total'
        }
    }
);