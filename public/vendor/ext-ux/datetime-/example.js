var dateTimeField = Ext.create('Ext.ux.form.DateTimeField', {
    name: 'datetime',
    labelWidth: 65,
    width: 160,
    labelAlign: 'right',
    fieldLabel: 'DateTime'
});

var timeField = Ext.create('Ext.ux.form.TimePickerField', {
    name: 'time',
    labelWidth: 65,
    width: 190,  // this is required to keep fields  one line
    labelAlign: 'right',
    fieldLabel: 'TIME'
});

Ext.create('Ext.Panel', {
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    xtype: 'button',
                    text: 'DateTime Menu',
                    menu: Ext.create('Ext.ux.DateTimeMenu', {
                        handler: function (field, date) {
                        }
                    })
                },
                dateTimeField,
                timeField
            ]
        }
    ]
});