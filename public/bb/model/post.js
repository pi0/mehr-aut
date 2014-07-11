'use strict';
app.Post = Backbone.Model.extend({
    urlRoot: 'api/post'
//    urlRoot: fucntion (){
////       if(this.)
//    }

});

    app.Posts = Backbone.Collection.extend({
    model: app.Post,
    url: 'api/post'

//    parse: function (response) {
//        app.totalPosts = response.total;
//        return response.posts;
//    }


});
