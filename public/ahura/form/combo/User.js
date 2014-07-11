Ext.define("Ahura.form.combo.User", {
    extend: "Ahura.form.combo.Remote",
    xtype: 'user-combo',
    width:300,
    fieldLabel: "کاربر",
    name: 'sid',
    emptyString:'نام، #دانشجویی، #ملی',
    store: 'User',
    displayField: 'sid',
    valueField: 'id',
    tpl: Ext.create('Ext.XTemplate',
        '<tpl for=".">',
        '<div class="x-boundlist-item">{sid} ■ {firstName} {lastName}</div>',
        '</tpl>'
    ),
    // template for the content inside text field
    displayTpl: Ext.create('Ext.XTemplate',
        '<tpl for=".">',
        '{firstName} {lastName} - {sid}',
        '</tpl>'
    )
});
