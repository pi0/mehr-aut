Ext.define('Mehr.store.Enroller', {
        autoLoad: false,
        extend: 'Ahura.store.Direct',
        model: 'Mehr.model.Enroller',

        constructor: function () {
            this.callParent(arguments);
            this.getProxy().api.read = RPC.EnrollerApi.read;
            this.getProxy().api.destroy = RPC.EnrollerApi.destroy;
        }}
);