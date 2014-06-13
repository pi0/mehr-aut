app.PostsView = Backbone.Marionette.CollectionView.extend({
    template: '#posts-tpl',
    itemView: app.PostView,
    initialize: function (param) {
        var me = this;
        me.collection = new app.Posts;
        me.collection.fetch();

    },
    events: {}
})