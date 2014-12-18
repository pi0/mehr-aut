Ext.define('Mehr.view.user.Import',{
    extend: 'Ahura.window.Base',
    icon: icon('db-import'),
    title: 'درون برد از فایل',
    items: {
        xtype: 'form',
        paramsAsHash: true,
        api: {
            create: RPC.UserApi.create
        },
        fieldDefaults: {
            anchor: '95%'
        },
        bodyStyle: 'padding: 5px;padding-top:10px',
        items: [
            {
                fieldLabel: 'منبع',
                xtype:      'combo',
                name:       'source',
                store: [
                    ['yas','سیستم یاس'],
                    ['golestan','سیستم گلستان']
                ]
            },
            {
                xtype:      'combo',
                fieldLabel: 'نوع کاربر',
                name:       'type',
                store: [
                    ['student','دانشجو'],
                    ['staff','کارمند'],
                    ['professor','استاد']
                ]
            },
            {
                xtype:      'filefield',
                fieldLabel: 'فایل جدا شده با کاما',
                name:       'import'
            }
        ],
        fbar: [
            Ahura.button.CancelForm, {
                xtype:'save-button'
            }
        ]
    }
});