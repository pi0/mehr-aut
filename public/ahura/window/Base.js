Ext.define("Ahura.window.Base", {
    extend: "Ext.window.Window",
    maximizable: true,
    collapsible: true,
    layout: 'fit',
    width: 450,
    closeAction: 'destroy',
    autoShow: true,
    rtl: true,
    statics: {
        userWindowTitle: function (row) {
            return row.get('firstName') + ' ' + row.get('lastName') + ' (' + row.get('sid') + ')';
        }
    }
});