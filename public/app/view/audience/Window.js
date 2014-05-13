Ext.define('Mehr.view.audience.Window', {
    rtl:true,
    autoShow:true,
    extend: 'Ext.Window',
    alias: 'widget.audiencesW',
    layout: 'fit',
    title: 'انتخاب مخاطبان',
    height: 400,
    width: 600,
//    closeAction: 'hide',
    itemId: "asasaudiencesWin",
    items: [
        {xtype: 'audiencesForm'}
    ]
});