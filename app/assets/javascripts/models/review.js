IWillCookThat.Models.Review = Backbone.Model.extend({
  urlRoot: '/api/reviews',

  toJSON: function(){
    var json = Backbone.Model.prototype.toJSON.call(this);

    return { review: json };
  }
});
