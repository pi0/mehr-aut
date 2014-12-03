Ext.define('Mehr.store.User', {
        extend: 'Ahura.store.Direct',
        storeId:'userStore',
        model: 'Mehr.model.User',
        constructor: function () {
            this.callParent(arguments);
            this.getProxy().api.read = RPC.UserApi.read;
        }}
);