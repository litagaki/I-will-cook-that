IWillCookThat.Models.Recipe = Backbone.Model.extend({
  urlRoot: '/api/recipes',

  toJSON: function(){
    var json = Backbone.Models.prototype.toJSON.call(this);

    return { recipe: json };
  }
});
