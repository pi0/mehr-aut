Ext.define('Mehr.controller.Users', {
    extend: 'Ext.app.Controller',
    stores: ['Users'],
    models: ['User'],
    views:['user.Grid',
        'user.Window',
//        'user.Edit'
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