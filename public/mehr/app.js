$(function(){
    $('[title]').tooltip({show: {effect: 'slideIn'}});
    $(document).ajaxStart(function () {
        $('.busy-box').show().find('.message').text('در حال انجام پردازش');
    });
    $(document).ajaxStop(function () {
        $('.busy-box').hide();
    });
    $(document).ajaxError(function (e, xhr) {
        if (typeof xhr.responseJSON == 'object' && xhr.status == 422) {
        }
        else if (typeof xhr.responseJSON == 'string' && xhr.status == 401) {
            location.href = (xhr.responseJSON);
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
                el: "#main-container",
                onShow: function () {
                    ux.afterRender();
                }
            })
        }
    });

    app.layout=new app.Layout;
//    app.layout.content.show(new app.PostsView);

    app.start();
});