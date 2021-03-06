Ext.define('Ahura.store.Direct', {
    extend: 'Ahura.store.Remote',
    paramsAsHash: true,
    constructor: function (config) {
        config = config || {};
        Ext.merge(config, {proxy: {
            reader: {
                type: 'json',
                root: 'data',
                totalProperty: 'total'
            },
            type: 'direct'
        }
        });
        this.callParent([config]);
    }
});
