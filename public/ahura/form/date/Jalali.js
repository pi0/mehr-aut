Ext.require('Ext.ux.form.field.BoxSelect');
Ext.define("Ahura.form.date.Jalali", {
    xtype: 'jalali',
    extend: "Ext.form.field.Date",
    plugins: ['jalalidate']
});
