IWillCookThat.Collections.Taggings = Backbone.Collection.extend({

  model: IWillCookThat.Models.Tagging,

  url: function() {
    return "/api/recipes/" + this.recipe.id + "/taggings"
  },

  initialize: function(options) {
    this.recipe = options.recipe;
  },


});
