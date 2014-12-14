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
        'account/membership': 'membership',
        'news/:id': 'news',
        'credit': 'credit'
    },
    home: function () {
        var p = new app.Posts();
        var type = (Backbone.history.fragment || 'post');
        var url = {
            'post': 'api',
            'news': 'api',
            'program': 'program',
            'entity': 'entity'
        };
        p.url = url[type] + '/' + type;
        p.fetch({
            success: function (collection) {
                app.layout.content.show(new app.PostsView({collection: collection}));
                $('input[type=radio][value=' + (Backbone.history.fragment || '""') + ']').prop('checked', true);
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
        new app.Entity({id: id}).fetch({
            success: function (model) {
                app.layout.content.show(new app.EntityView({model: model}));
            }
        })
    },
    news: function (id) {
        new app.News({id: id}).fetch({
            success: function (model) {
                app.layout.content.show(new app.NewsView({model: model}));
            }
        });
    },
    credit: function () {
        new app.Credit().fetch({
            success: function (model) {
                app.layout.content.show(new app.CreditView({model: model}));
            }
        });
    }

});
app.router = new app.MainRouter();