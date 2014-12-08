'use strict';

app.Enroll = Backbone.Model.extend({
    urlRoot: 'api/program/enroll'
});


app.ProgramView = Backbone.Marionette.ItemView.extend({
    template: '#program-tpl',
    events: {
        'click .program-actions .button.unenroll': 'unenroll',
        'click .program-actions .button.enroll': 'enroll'
    },
    enroll: function () {
        var me = this;
        this.model.save('enroll', true, {
            patch: true, success: function () {
                me.render();
            }
        });
    },
    unenroll: function () {
        var me = this;
        this.model.save('unenroll', true, {
            patch: true, success: function () {
                me.render();
            }
        });
    }

    // Re-render the titles of the post item.
});