Ext.define("Ahura.form.combo.Colleges",{
    extend:"Ahura.form.combo.Local",
    typeAhead:null,
//    multiSelect:false,
//    valueField:"college_id",
//    id:"colleges_sbs",
    minChars:0,
    anchor:'90%',
    fieldLabel: 'دانشکده',
    name: 'colleges[]',
//    displayField:'title',
    forceSelection : true,
    width: 250,
    store:Ahura.store.Colleges
//    store:{
//        fields: ['college_id', 'title'],
//        proxy: {
//            type:'ajax',
//            url:"/admin/json-Comboboxes",
//            reader: {
//                type:'json',
//                root: 'colleges'
//            }
//        },
//        autoLoad: true
//    }
});