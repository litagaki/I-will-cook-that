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
  },

  parse: function(response) {
    if (response.courses) {
      IWillCookThat.COURSES = response.courses;
      delete response.courses
    }
    if (response.diets) {
      IWillCookThat.DIETS = response.diets;
      delete response.diets
    }
    if (response.cuisines) {
      IWillCookThat.CUISINES = response.cuisines;
      delete response.cuisines;
    }
    if (response.general_tags) {
      IWillCookThat.GENERAL_TAGS = response.general_tags;
      delete response.general_tags;
    }

    if (response.recipes) {
      return response.recipes
    } else {
      return response;
    }
  },
});



IWillCookThat.Collections.RecentRecipes = IWillCookThat.Collections.Recipes.extend({
  url: "api/recipes/recent"
});
