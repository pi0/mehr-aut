Ext.define('Ahura.form.Base', {
    extend: 'Ext.form.Panel',
    xtype: 'base-form',
    submitEmptyText: false,
    paramsAsHash: true,
    bodyStyle: 'padding:5px',
    border: false,
    defaultType:'textfield',
    fieldDefaults: {
        msgTarget: 'under'
    }
});
