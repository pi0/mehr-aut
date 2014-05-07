Ext.define("Ahura.form.combo.Course",{
    extend:"Ahura.form.combo.Local",
    xtype:'course-combo',
    name: "course",
    fieldLabel: "دوره",
    width: 120,
    store: Ahura.store.Courses
});
