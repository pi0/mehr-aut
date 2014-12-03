app.MainRouter = Backbone.Router.extend({
    routes: {
        '': 'home',
        'program/entity/:id': 'sessions',
        'program/:id': 'program',
        'entity/:id(/*url)': 'entity',
        'program(/)': 'home',
        'news(/)': 'home',
        'entity(/)': 'home',
        'account/password': 'password',
        'login': 'login',
        'account/membership': 'membership'
    },
    home: function () {
        var p = new app.Posts();
        var type = (Backbone.history.fragment || 'post');
        p.url = 'api/' + type;
        p.fetch({
            success: function (collection) {
                app.layout.content.show(new app.PostsView({collection: collection}));
                $('input[type=radio][value=' + (Backbone.history.fragment||'""') + ']').prop('checked', true);
                if (type == 'program') {
                    $('.post-filter-box').slideDown();
                } else {
                    $('.post-filter-box').slideUp();
                }
            }
        });
    },
    'program': function (id) {
        var p = new app.Program({id: id}).fetch({
            success: function (model) {
                app.layout.content.show(new app.ProgramView({model: model}));
            }
        });
    },
    'login': function (id) {
        if (Mehr.user) {
            window.location = 'user/logout';
        }
        app.layout.content.show(new app.LoginView);
    },
    'password': function (id) {
        app.layout.content.show(new app.PasswordView);
    },
    'membership': function (id) {
        var p = new app.Membership({id: id}).fetch({
            success: function (model) {
                app.layout.content.show(new app.MembershipView({model: model}));
            }
        });
    },
    'entity': function (id, url) {
        app.router.navigate(url);
    }


});
app.router = new app.MainRouter();