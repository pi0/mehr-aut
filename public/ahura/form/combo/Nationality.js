Ext.define("Ahura.form.combo.Nationality",{
    xtype:'nationality-combo',
    extend:"Ahura.form.combo.Local",
    store:Ahura.store.Nationality,
    value:'IR',
    name:"nationality",
    fieldLabel: 'ملیت'
});
