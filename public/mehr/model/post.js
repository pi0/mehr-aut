'use strict';
app.Post = Backbone.Model.extend({
    urlRoot: 'api/post.php',
    idAttribute: 'id',
    validation: {
        type: {required: true
        },
        to: {required: true,
            msg: ' دست‌کم یک گیرنده نیاز است.'
        },
        content: {
            msg: 'متن ارسال نمی‌تواند خالی باشد.',
            required: true},
        deadline: {
            msg: 'تاریخی معتبری برای سررسید تمرین وارد نشده است SSSS/MM/RR.',
            pattern: /^\d{4}\/\d{1,2}\/\d{1,2}/,
            required: false
        },
        title: {
            required: function (val, att, compund) {
                return (compund.type == "assignment");
            },
            msg: 'عنوان وارد نشده است.'
        },
        denominator: {
            required: function (value, field, model) {
                if (model.type == "assignment") return true;
                return false;
            },
            pattern: 'number',
            min: 0,
            msg: 'لطفا پایه نمره به شکل عددی مثبت وارد شود.'
        }
    }

});