Ext.define("Ahura.form.combo.Local",{
    extend:"Ext.form.ComboBox",
    width: 150,
    queryMode:'local',
    anchor:'100%',
    selectOnFocus:true,
    forceSelection:true,
    typeAhead:true
});