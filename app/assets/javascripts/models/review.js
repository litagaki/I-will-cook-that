IWillCookThat.Models.Review = Backbone.Model.extend({
  urlRoot: '/api/reviews',

  toJSON: function(){
    var json =  _.clone(this.attributes);
    delete json.id;
    return { review: json };
  }
});
