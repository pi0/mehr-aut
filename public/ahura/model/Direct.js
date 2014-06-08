Ext.define('Ahura.model.Direct', {
    extend: 'Ext.data.Model',
    paramsAsHash: true,
    constructor: function (config) {
        Ext.merge(config, {
            proxy: {
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