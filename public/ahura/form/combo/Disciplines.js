Ext.define("Ahura.form.combo.Disciplines", {
//    extend:"Ahura.form.combo.BoxSelect",
    valueField:"discipline_id",
    xtype:'combo',
    minChars:0,
    anchor:'90%',
    fieldLabel: 'رشته‌ها',
//    id:"disciplines_sbs",
    name: 'disciplines[]',
    displayField:'title',
    width: 250,
    store:{
        fields: ['discipline_id', 'title'],
        proxy: {
            type:'ajax',
            url:"/admin/json-Comboboxes",
            reader: {
                type:'json',
                root: 'disciplines'
            }
        },
        autoLoad: true
    }
});
//    }