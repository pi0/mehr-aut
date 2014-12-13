'use strict';
app.Membership = Backbone.Model.extend({
    urlRoot: 'api/membership'
});

app.Memberships = Backbone.Collection.extend({
    model: app.Post,
    url: 'api/membership'
});

app.MembershipView = Backbone.Marionette.ItemView.extend({
    template: '#membership-tpl'
//    model:
//    events: {
//    },


});