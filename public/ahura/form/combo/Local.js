Ext.define("Ahura.form.combo.Local",{
    extend:"Ext.form.ComboBox",
    xtype:'local-combo',
    width: 150,
    queryMode:'local',
    anchor:'100%',
    selectOnFocus:true,
    forceSelection:true,
    typeAhead:true
});