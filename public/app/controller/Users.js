Ext.define('Mehr.controller.Users', {
    extend: 'Ext.app.Controller',
    stores: ['User'],
    models: ['User'],
    init: function () {
        this.control({
            '#vp button': {
                click: this.onPanelRendered
            }
        });
    },

    onPanelRendered: function () {
        console.log('The panel was rendered');
    }
});