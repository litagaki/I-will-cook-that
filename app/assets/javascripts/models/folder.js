IWillCookThat.Models.Folder = Backbone.Model.extend({
  urlRoot: '/api/folders',

  recipes: function() {
    if (!this._recipes) {
      this._recipes = new IWillCookThat.Collections.Recipes([]);
    }
    return this._recipes;
  },

  parse: function(response) {
    if (response.recipes) {
      this.recipes().set(response.recipes, {parse:true});
      delete response.recipes;
    }

    return response;
  },

  toJSON: function() {
    var json = _.clone(this.attributes);
    delete json.id;
    delete json.count;
    delete json.recipes;
    return { folder: json };
  }
});
