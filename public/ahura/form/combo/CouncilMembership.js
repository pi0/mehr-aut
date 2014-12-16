Ext.define("Ahura.form.combo.CouncilMembership",{
    extend:"Ahura.form.combo.Local",
    xtype:'council-membership-combo',
    name: 'role',
    value: 'final',
    fieldLabel: "نقش",
    store: Ahura.store.CouncilMembership
});
