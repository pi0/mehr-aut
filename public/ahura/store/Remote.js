Ext.define('Ahura.store.Remote', {
    extend: 'Ext.data.Store',
    pageSize: 100,
    autoLoad: true,
    remoteSort: true,
    sortInfo: {
        direction: 'asc',
        field: 'name'
    }
});
