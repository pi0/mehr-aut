'use strict';
app.Password = Backbone.Model.extend({
    url: 'user/password',
    validation: {
        newPassword: {
            required: true
        },
        password: {
            required: true
        },
        confirmPassword: {
            required: true,
            equalTo: 'newPassword'
        }
    },
    labels: {
        password: 'گذرواژه',
        newPassword: 'گذرواژه جدید',
        confirmPassword: 'تکرار گذرواژه'

    }
});
app.PasswordView = Backbone.Marionette.ItemView.extend({
    template: '#password-tpl',
    model: new app.Password,
    initialize: function () {

        Backbone.Validation.bind(this);
    },
    events: {
        'submit form': 'login'
    },
    login: function (e) {
        e.preventDefault();
        var me = this;
        var data = this.$el.find('form').serializeObject();

        this.model.save(data, {
            success: function (model, response, options) {
//                app.layout.topbar.show(new app.TopbarView({model: model}));
                me.$el.find('.form-error-box').html('گذرواژه با موفقیت تغییر کرد.').fadeIn();
            },
            error: function (model, response, options) {
                try {
                    var error = response.responseJSON.message;
                }
                catch (e) {
                    var error = 'گذرواژه تغییر نکرد. لطفا با مدیر سامانه تماس بگیرد.'
                }
                me.$el.find('.form-error-box').html(error).fadeIn();
            }
        });
    }
    // Re-render the titles of the post item.
});

