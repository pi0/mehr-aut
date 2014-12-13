'use strict';
app.News = Backbone.Model.extend({
    urlRoot:'api/news'
});
app.NewsView = Backbone.Marionette.ItemView.extend({
    template: '#news-tpl'
});