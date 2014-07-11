app.MainRouter = Backbone.Router.extend({
    routes: {
        '': 'home',
        'program/entity/:id': 'sessions',
        'program/:id': 'program',
        'program(/)': 'program',
        'account/password': 'password',
        'login': 'login',
        'account/membership': 'membership'
    },
    home: function () {

        var p = new app.Posts().fetch({success: function (collection) {
            app.layout.content.show(new app.PostsView({collection: collection}));
        }
        });
    },
    'program': function (id) {
        var p = new app.Program({id: id}).fetch({success: function (model) {
            app.layout.content.show(new app.ProgramView({model: model}));
        }
        });
    },
    'login': function (id) {
        app.layout.content.show(new app.LoginView);
    },
    'password': function (id) {
        app.layout.content.show(new app.PasswordView);
    },
    'membership': function (id) {
        var p = new app.Membership({id: id}).fetch({success: function (model) {
            app.layout.content.show(new app.MembershipView({model: model}));
        }
        });
    }



});
app.router = new app.MainRouter();