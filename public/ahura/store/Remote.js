Ext.define('Ahura.store.Remote', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    remoteSort: true,
    sortInfo: {
        direction: 'asc',
        field: 'name'
    }
});
