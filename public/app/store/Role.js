Ext.define('Mehr.store.Role', {
    autoLoad: false,
    autoSync: true,
    extend: 'Ext.data.Store',
    batchUpdateMode: 'complete',
    model: 'Mehr.model.Role'
});