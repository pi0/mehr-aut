Ext.define('Mehr.store.Council', {
        autoLoad: false,
        extend: 'Ahura.store.Direct',
        model: 'Mehr.model.Council',
        constructor: function () {
            this.callParent(arguments);
            this.getProxy().api.read = RPC.CouncilApi.read;
        }
    }
)
;