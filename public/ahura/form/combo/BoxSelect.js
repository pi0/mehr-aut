Ext.require('Ext.ux.form.field.BoxSelect');
Ext.define("Ahura.form.combo.BoxSelect",{
    width:400,
    extend:"Ext.ux.form.field.BoxSelect",
    queryMode:'remote',
    selectOnFocus:true,
    forceSelection:true,
    typeAhead:true

});
