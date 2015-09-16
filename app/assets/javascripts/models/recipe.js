IWillCookThat.Models.Recipe = Backbone.Model.extend({
  urlRoot: '/api/recipes',

  reviews: function() {
    if (!this._reviews){
      this._reviews = new IWillCookThat.Collections.Reviews([],{ recipe: this.model});
    }

    return this._reviews;
  },

  parse: function(response){
    if (response.reviews) {
      this.reviews().set(response.reviews, {parse:true});
      delete response.reviews;
    }

    return response;
  },

  toJSON: function(){
    var json = Backbone.Model.prototype.toJSON.call(this);

    return { recipe: json };
  }
});
