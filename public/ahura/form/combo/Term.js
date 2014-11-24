Ext.define("Ahura.form.combo.Term",{
    xtype:'term-combo',
    extend:"Ahura.form.combo.Local",
    name: "term",
    fieldLabel: "ترم",
    width: 120,
    store: Ahura.store.Terms
});
