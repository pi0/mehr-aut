app.Posts = Backbone.Collection.extend({
    model: app.Post,
    url: 'api/post',

    comparator: function (a) {
        return 1 / a;
    },
    filterPosts: function (filter, cb) {
        this.fetch({
                reset: true,
                'data': filter,
                'success': cb
            }
        );
    }
//    parse: function (response) {
//        app.totalPosts = response.total;
//        return response.posts;
//    }


});
