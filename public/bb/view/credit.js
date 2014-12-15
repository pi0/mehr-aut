'use strict';
app.Credit = Backbone.Model.extend({
    url: 'credit',
    validation: {
        amount: {
            required: true,
            min: 1000
        }
    },
    labels: {
        amount: 'مبلغ'
    }
});
app.CreditView = Backbone.Marionette.ItemView.extend({
    template: '#credit-tpl',
    model: new app.Credit,
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
            success: function (model, response) {
                if (response.error) {
                    alert(response.message);
                }
                else if (response.form) {
                    me.$el.html(response.form);
                }
                else {
                    me.render();
                }
            },
            error: function (model, response, options) {
                try {
                    var error = response.responseJSON.message;
                }
                catch (e) {
                    var error = 'متاسفانه خطایی رخ داده است. لطفا بعدا دوباره امتحان کنید با با مسئول سامانه تماس بگیرید.'
                }
                me.$el.find('.form-error-box').html(error).fadeIn();
            }
        });
    }
});