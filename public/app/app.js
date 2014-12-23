'use strict';
Ext.Loader.setConfig({
    //enabled: Ahura.dev
    enabled: true
});


Ext.application({
    name: 'Mehr',
    appFolder: BASE + 'app',
    stores: ['User', 'News', 'Program', 'Entity', 'Enroller', 'CouncilMember', 'Council', 'Member'],
    models: ['User', 'News', 'Enroller', 'CouncilMember', 'Council', 'Member'],
    autoCreateViewport: true,
    paths: {
        'Ahura': BASE + 'ahura',
        'Ext.ux': BASE + 'vendor/ext-ux'
    },
    controllers: [
//        'Users',
//        'Audiences'
    ],
    launch: function () {
        Ext.create('Ahura.window.Base', {
            title:'توجه',
            width:600,
            contentEl: 'welcomeMsg'
        });
    }

});

Ext.require([
    'Ext.ux.Jalali',
    'Ext.ux.JalaliDate',
    'Ext.ux.JalaliDatePlugin',
    'Ext.ux.JalaliDatePlugin-fa_IR',
    'Ext.grid.RowEditor',
    "Ext.ux.form.SearchField",
    'Ext.form.*',
    'Ext.ux.grid.FiltersFeature',
    'Ext.ux.grid.filter.ListFilter',
    'Ahura.form.field.Integer',
    'Ahura.form.Base',
    'Ahura.form.button.Save',
    'Ahura.form.button.Cancel',
    'Ahura.form.date.Jalali',
    'Ahura.form.combo.Department',
    'Ahura.grid.User',
    'Ahura.form.combo.MaritalStatus',
    'Ahura.form.combo.Term',
    'Ahura.form.combo.Degree',
    'Ahura.form.combo.Religion',
    'Ahura.form.combo.Course',
    'Ahura.form.combo.Nationality',
    'Ahura.form.combo.Department',
    'Ahura.form.combo.College',
    'Mehr.view.program.List',
    'Ahura.form.combo.CouncilMembership'
]);

Ext.onReady(function () {
    init();
    Ext.create('Mehr.view.user.Import');
});


//    {
//        text: 'ذخیره و بستن',
//        icon: icon('save'),
//        handler: function () {
//            this.up('window').down('button#saveBtn').handler();
//            this.up('window').down('button#cancelBtn').handler();
//
//        }
//    },
//    {
//        text: 'ذخیره و جدید',
//        icon: icon('save'),
//
//        handler: function () {
//
//        }
//    },

var $$ = function (q) {
    return Ext.ComponentQuery.query(q)
}


function init() {
    Ext.apply(Ext.form.field.VTypes, {
        daterange: function (val, field) {
            var date = field.parseDate(val);

            if (!date) {
                return false;
            }
            if (field.startDateField && (!this.dateRangeMax || (date.getTime() != this.dateRangeMax.getTime()))) {
                var start = field.up('form').down('[name=' + field.startDateField + ']');
                start.setMaxValue(date);
                start.validate();
                this.dateRangeMax = date;
            }
            else if (field.endDateField && (!this.dateRangeMin || (date.getTime() != this.dateRangeMin.getTime()))) {
                var end = field.up('form').down('[name=' + field.endDateField + ']');
                end.setMinValue(date);
                end.validate();
                this.dateRangeMin = date;
            }
            /*
             * Always return true since we're only using this vtype to set the
             * min/max allowed values (these are tested for after the vtype test)
             */
            return true;
        },

        daterangeText: 'Start date must be less than end date',

        password: function (val, field) {
            if (field.initialPassField) {
                var pwd = field.up('form').down('[name=' + field.initialPassField + ']');
                return (val === pwd.getValue());
            }
            return true;
        },
        passwordText: 'مقدار وارد شده با با مقدار گذرواژه یکسان نیست.'
    });
    Ext.grid.RowEditor.prototype.cancelBtnText = "لغو";
    Ext.grid.RowEditor.prototype.saveBtnText = "بهنگام‌سازی";
    Ext.state.Manager.setProvider(Ext.create('Ext.state.CookieProvider', {
        expires: new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * 7)) //7 days from now
    }));
}

Ahura.store.Terms = [];
for (var i = moment().jYear() - 10; i <= moment().jYear() + 1; i++) {
    Ahura.store.Terms.push(i + '03');
    Ahura.store.Terms.push(i + '06');
    Ahura.store.Terms.push(i + '11');
}