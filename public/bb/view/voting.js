app.VotingView = Backbone.Marionette.CompositeView.extend({
    template: '#voting-tpl',
    childView: app.CandidateView,
    childViewContainer: '.candidates-place',
    events: {
        'click .candidate': 'select'
    },
    select: function(e){
        $(e.target).addClass('selected');
    }
});
app.CandidateView = Backbone.Marionette.ItemView.extend({
    template: '#candidate-tpl',
    initialize:function(){
        console.log("here");
    }
});