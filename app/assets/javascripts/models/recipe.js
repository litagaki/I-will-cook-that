IWillCookThat.Models.Recipe = Backbone.Model.extend({
  urlRoot: '/api/recipes',

  toJSON: function(){
    var json = Backbone.Model.prototype.toJSON.call(this);

    return { recipe: json };
  }
});
