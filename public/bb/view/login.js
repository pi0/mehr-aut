'use strict';

app.CurrentUser = Backbone.Model.extend({
    url: 'user/currentUser'
});
app.Auth = Backbone.Model.extend({
    url: "user/login",
    defaults: {
        username: "",
        password: "",
        remember: false,
        loginFailed: false,
        loginAccepted: false
    },
    validation: {
        'username': {
            required: true
        },
        'password': {
            required: true
        }
    },
    labels: {
        username: 'شناسه',
        password: 'گذرواژه'
    }
});
app.LoginView = Backbone.Marionette.ItemView.extend({
    template: '#login-tpl',
    model: new app.Auth,
    initialize: function () {
        Backbone.Validation.bind(this);
    },
    events: {
        'click .login-btn': 'login',
        'submit form': 'login'
    },
    login: function (e) {
        e.preventDefault();
        var me = this;
        var data = this.$el.find('form').serializeObject();
        this.model.save(data, {
            success: function (model, response, options) {
                app.layout.topbar.show(new app.TopbarView({model: model}));
                app.router.navigate('#', {trigger: true});
            },
            error: function (model, response, options) {
                var error = 'متاسفانه امکان ورود در این لحظه مقدور نمی‌باشد. لطفا با مدیر سامانه تماس بگیرید.'
                if (response.responseJSON && response.responseJSON.message) {
                    error = response.responseJSON.message;
                }
                me.$el.find('.form-error-box').html(error).fadeIn();
            }
        });
    }
});

