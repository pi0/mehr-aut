app.PostsView = Backbone.Marionette.CompositeView.extend({
    template: '#posts-tpl',
    itemView: app.PostView,
    emptyView: Backbone.Marionette.ItemView.extend({
        template: '#empty-post-tpl'
    }),
    childViewContainer: '.post-models',
    events: {
        'change .filter-main-entity [name=postType]': 'filterEntity',
        'submit  form': 'filterSubmit'
    },
    'filterEntity': function (e) {
        var type = $(e.target).attr('value');
        Backbone.history.navigate(type, {trigger: true});
    },
    'filterSubmit': function (e) {
        e.preventDefault();
        var form = this.$el.find('form').serializeObject()
        this.collection.reset();
        this.collection.fetch({reset: true, data: form});
    }
});