Ext.define('Mehr.controller.Audiences', {
    extend: 'Ext.app.Controller',
//    stores: ['Users'],
//    models: ['User'],
    views:['audience.Window',
            'audience.Form'
    ],

    init: function() {
        this.control({
            '#vp button': {
                click: this.onPanelRendered
            }
        });
    },

    onPanelRendered: function() {
        console.log('The panel was rendered');
    }
});