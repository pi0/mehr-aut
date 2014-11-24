app.PostsView = Backbone.Marionette.CompositeView.extend({
    template: '#posts-tpl',
    itemView: app.PostView,
    emptyView: Backbone.Marionette.ItemView.extend({
        template: '#empty-post-tpl'
    }),
    childViewContainer: '.post-models',
    model: new Backbone.Model({store: Ahura.store}),
    initialize: function (param) {
//        var me = this;
//        me.collection = new app.Posts;
//        me.collection.fetch();
    },
    events: {
        'change .filter-main-entity [name=postType]': 'filterEntity',
        'submit  form': 'filterSubmit'
    },
    'filterEntity': function (e) {
//        e.preventDefault();
//        this.collection.fetch({data: {id: 3}});
//        console.log(form);

        var type = $(e.tffdarget).attr('value');
        if (type == 'program') {
            $('.post-filter-box').slideDown();
        } else {
            $('.post-filter-box').slideUp();
        }
        this.filterSubmit(e);
    },

    'filterSubmit': function (e) {
        e.preventDefault();
        var form = this.$el.find('form').serializeObject()
        this.collection.reset();
        this.collection.fetch({reset: true, data: form});
    }

})