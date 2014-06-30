'use strict';
app.Program = Backbone.Model.extend({
    urlRoot: 'api/program'
});

app.Programs = Backbone.Collection.extend({
    model: app.Post,
    url: 'api/program'
});
