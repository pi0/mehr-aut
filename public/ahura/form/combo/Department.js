Ext.define("Ahura.form.combo.Department", {
    extend:"Ahura.form.combo.BoxSelect",
    valueField:"department_id",
    xtype:'combo',
    anchor:'90%',
    fieldLabel: 'گروه آموزشی',
    id:"departments_sbs",
    name: 'departments[]',
    minChars:0,
    displayField:'title',
    width: 250,
    store:{
        fields: ['department_id', 'title'],
        proxy: {
            type:'ajax',
            url:"/admin/json-Comboboxes",
            reader: {
                type:'json',
                root: 'departments'
            }
        },
        autoLoad: true
    }

});