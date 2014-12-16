'use strict';

app.Program = Backbone.Model.extend({
    urlRoot: 'rest/program'
});

app.Programs = Backbone.Collection.extend({
    model: app.Post,
    url: 'rest/program'
});


app.Enroll = Backbone.Model.extend({
    urlRoot: 'api/program/enroll'
});


app.ProgramView = Backbone.Marionette.ItemView.extend({
    template: '#program-tpl',
    events: {
        'click .program-actions .button.unenroll': 'unenroll',
        'click .program-actions .button.enroll': 'enroll',
        'click .program-actions .button.charge': 'charge'
    },
    enroll: function () {
        var me = this;
        this.model.save('enroll', true, {
            patch: true,
            success: function (model, response) {
                if (response.error) {
                    alert(response.message);
                }
                else {
                    me.render();
                }
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
    },
    charge: function () {
        var me = this;
        app.router. navigate("credit", {trigger: true});
    }
});