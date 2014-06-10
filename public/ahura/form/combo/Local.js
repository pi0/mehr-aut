Ext.define("Ahura.form.combo.Local", {
    extend: "Ext.form.ComboBox",
    xtype: 'local-combo',
    queryMode: 'local',
    selectOnFocus: true,
    forceSelection: true,
    typeAhead: true,
    initComponent: function () {
        this.callParent(arguments);
        if (this.allowBlank) {
            this.addListener('change', function () {
                if (!this.getValue() || this.getValue().length === 0) {
                    this.reset();
                }
            });
        }
    }
});
