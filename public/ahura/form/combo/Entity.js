Ext.define("Ahura.form.combo.Entity", {
    extend: "Ahura.form.combo.Remote",
    xtype: 'entity-combo',
    flex: 1,
    fieldLabel: "نهاد",
    emptyString: 'نهاد متولی',
    name: 'entity',
    store: {
        type: 'direct',
        autoLoad: true,
        api: {
            read: 'RPC.EntityApi.combo'
        },
        fields: ['id', 'text']
    },
    displayField: 'text',
    valueField: 'id',
    minChar: 2
});
