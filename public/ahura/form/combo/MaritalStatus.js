Ext.define("Ahura.form.combo.MaritalStatus",{
    xtype:'marital-status-combo',
    extend:"Ahura.form.combo.Local",
    fieldLabel: 'وضعیت تأهل',
    name: 'maritalStatus',
    displayField: 'title',
    width: 200,
    store: ['تجرد', 'تأهل', 'طلاق', 'فوت همسر'],
    labelWidth:80
});
