Ext.define("Ahura.form.combo.Department", {
    extend:"Ahura.form.combo.Local",
    valueField: "department_id",
    xtype: 'department-combo',
    fieldLabel: 'رشته',
    name: 'department',
    displayField: 'title',
    width: 250,
    store: Ahura.store.Departments
});