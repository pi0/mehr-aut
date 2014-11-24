Ext.define("Ahura.form.combo.College",{
    extend:"Ahura.form.combo.Local",
    fieldLabel: 'دانشکده',
        name: 'colleges',
    xtype: 'college-combo',
    store:Ahura.store.Colleges
});