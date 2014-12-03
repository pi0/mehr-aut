Ext.define('Mehr.store.Entity', {
        extend: 'Ext.data.Store',
        autoLoad: true,
        autoSync: true,
        batchUpdateMode: 'complete',
        model: 'Mehr.model.Entity',
        reader: {
            type: 'json',
            root: 'data',
            totalProperty: 'total'
        }
    }
);