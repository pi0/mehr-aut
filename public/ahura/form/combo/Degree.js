Ext.define("Ahura.form.combo.Degree",{
    extend:"Ahura.form.combo.Local",
    xtype:'degree-combo',
    name: "degree",
    fieldLabel: "مقطع",
    width: 120,
    store: Ahura.store.Degrees
});
