'use strict';
app.Post = Backbone.Model.extend({
    idAttribute: 'tid',
    urlRoot: 'api/post'
});

app.Posts = Backbone.Collection.extend({
    model: app.Post,
    url: 'api/post'
});

app.PostView = Backbone.Marionette.ItemView.extend({
    template: '#post-tpl'
});