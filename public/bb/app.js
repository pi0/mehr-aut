var Mehr = Mehr || {};
app = new Backbone.Marionette.Application();
ux = {};

Handlebars.registerHelper('def', function (x, def) {
    if (x == null) {
        if (typeof def == 'string') {
            return def;
        }
        return new Handlebars.SafeString('<span class="unknown">نامشخص</span> ');
    }
    return x;
});

Handlebars.registerHelper('mn', function (n) {
    if (typeof Intl.DateTimeFormat == 'function') {
        n = new Intl.NumberFormat('fa-IR').format(n);
    }
    return n + ' ریال';
});

// A helper to convert constants to human-readable text.
Handlebars.registerHelper('cnst', function (cat, val) {
    return Mehr.cnst(cat, val);
});
Handlebars.registerHelper('toJ', function (date) {
    if (date == null) {
        return new Handlebars.SafeString('<span class="unknown">نامشخص</span> ');
    }
    var date = moment(date)
    return new Handlebars.SafeString('<span class="date">' + date.format('jYYYY/jMM/jDD HH:mm') + '</span>');
});

_.extend(Backbone.Model.prototype, Backbone.Validation.mixin);
_.extend(Backbone.Validation.messages, {
    required: 'درج {0} الزامی است.',
    acceptance: '{0} باید پذیرفته شود.',
    min: '{0} باید بزرگتر یا مساوی {1} باشد.',
    max: '{0} باید کوچکتر یا مساوی {1} باشد.',
    range: '{0} باید بین {1} تا {2} باشد.',
    length: '{0} باید {1} نویسه داشته باشد.',
    minLength: '{0} باید دست‌کم {1} نویسه داشته باشد.',
    maxLength: '{0} باید حداکثر {1} نویسه داشته باشد.',
    rangeLength: '{0} باید بین {1} تا {2} داشته باشد.',
    oneOf: '{0} باید یکی از این مقادیر باشد: {1}',
    equalTo: '{0} باید با {1} یکسان باشد.',
    digits: '{0} باید عدد صحیح باشد',
    number: '{0} باید یک عدد باشد.',
    email: '{0} باید یک رایانامه‌ (ایمیل) معتبر باشد.',
    url: '{0} باید یک URL معتبر باشد.',
    inlinePattern: '{0} نامعتبر است.'
});
_.extend(Backbone.Validation.callbacks, {
    valid: function (view, attr, selector) {
        view.$('[' + selector + '~="' + attr + '"]')
            .removeClass('invalid')
            .removeAttr('data-error')
            .parent().find('.error-box,.form-error-box').remove();
    },
    // Gets called when a field in the view becomes invalid.
    // Adds a error message.
    invalid: function (view, attr, error, selector) {
        view.$('[' + selector + '~="' + attr + '"]')
            .addClass('invalid')
            .attr('data-error', error)
            .parent().find('.error-box,.form-error-box').remove()
            .end().append('<div hidden class="error-box">' + error + '</div>').fadeIn();
    }
});
Backbone.Validation.configure({
    labelFormatter: 'label'
});

$(function () {
    $('[title]').tooltip({show: {effect: 'slideIn'}});
    $(document).ajaxStart(function () {
        $('.busy-box').fadeIn().find('.message').text('در حال انجام پردازش');
    });
    $(document).ajaxStop(function () {
        $('.busy-box').fadeOut();
    });
    $(document).ajaxError(function (e, xhr) {
        if (typeof xhr.responseJSON == 'object' && xhr.status == 422) {
        }
        else if (typeof xhr.responseJSON == 'string' && xhr.status == 401) {

            Window.location.href = (xhr.responseJSON);
        }
        else if (typeof xhr.responseJSON == 'object' && xhr.status == 423) {
            notif({
                position: 'center',
                type: 'error',
                msg: xhr.responseText || 'خطایی در سرور رخ داده است.'
            });
            setTimeout(function () {
                location.reload()
            }, 5000);

        } else {
//    $('.busy-box').show().find('.message').text('خطایی در سرور رخ داده است.');
            notif({
                position: 'center',
                type: 'error',
                msg: xhr.responseText || 'خطایی در سرور رخ داده است.'
            });
        }

    });


    app.Layout = Backbone.Marionette.Layout.extend({
        template: "#layout",
        regions: {
            content: Marionette.Region.extend({
                el: "#main-container-region",
                onShow: function () {
                    ux.afterRender();
                }
            }),
            topbar: Marionette.Region.extend({
                el: "#top-bar-region",
                onShow: function () {
                    ux.afterRender();
                }
            })
        }
    });

    app.layout = new app.Layout;
    Backbone.history.start();
    if (Mehr.user) {
        var current = new app.CurrentUser();
        current.fetch({
            success: function (model, response, options) {
                //model.set('licensee', Mehr.licensee);
                app.layout.topbar.show(new app.TopbarView({model: model}));
            }
        })
    } else {
        app.layout.topbar.show(new app.TopbarView({model: new Backbone.Model({licensee: Mehr.licensee})}));
    }
    app.start();
});

Mehr.cnst = function (c, v) {
    var r = cnst[c][v];
    if (r) {
        return r;
    }
    else {
        console.info("Constant not found: " + c + ' ' + v);
        return r || 'نامشخص';
    }
};