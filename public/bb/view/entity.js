'use strict';
app.Entity = Backbone.Model.extend({
    urlRoot:'api/entity'
});
app.EntityView = Backbone.Marionette.ItemView.extend({
    template: '#entity-tpl',
    events:
    {
        'click .program-actions .button.submit': 'submit'
    },
    submit: function(){
        var me = this;
        this.model.save('submit', true, {
            patch: true,
            success: function (model, response) {
                if (response.error) {
                    alert(response.message);
                } else {
                    me.render();
                }
            }
        });
    }
});