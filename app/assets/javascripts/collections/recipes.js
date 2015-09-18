IWillCookThat.Collections.Recipes = Backbone.Collection.extend({
  
  model: IWillCookThat.Models.Recipe,

  url: '/api/recipes',

  getOrFetch: function(id) {
    var recipes = this;
    var recipe = recipes.get(id);

    if (recipe){
      recipe.fetch();
    } else {
      recipe = new this.model({ id: id })
      recipes.add(recipe);
      recipe.fetch({
        error: function(){
          recipes.remove(recipe);
        }
      });
    }

    return recipe;
  }
});
