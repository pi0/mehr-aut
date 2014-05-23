Ext.define('Ahura.store.Direct', {
    extend: 'Ahura.store.Remote',
    paramsAsHash: true,
    proxy: {
        reader: {
            type: 'json',
            root: 'data',
            totalProperty: 'total'
        },
        type: 'direct',
        extraParams: {
        },
        api: {
        }
    }
});
