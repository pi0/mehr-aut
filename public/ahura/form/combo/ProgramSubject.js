Ext.define("Ahura.form.combo.ProgramSubject", {
    extend: "Ahura.form.combo.Local",
    xtype: 'program-subject-combo',
    store: Ahura.store.ProgramSubjects,
    fieldLabel: 'موضوع',
    name: 'subject'
});
