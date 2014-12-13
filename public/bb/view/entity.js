'use strict';
app.Entity = Backbone.Model.extend({
    urlRoot:'api/entity'
});
app.EntityView = Backbone.Marionette.ItemView.extend({
    template: '#entity-tpl'
});