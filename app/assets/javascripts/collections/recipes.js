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
    if (response.course_values) {
      IWillCookThat.COURSES = response.course_values;
      delete response.course_values
    }
    if (response.diet_values) {
      IWillCookThat.DIETS = response.diet_values;
      delete response.diet_values
    }
    if (response.cuisine_values) {
      IWillCookThat.CUISINES = response.cuisine_values;
      delete response.cuisine_values;
    }
    if (response.general_values) {
      IWillCookThat.GENERAL_TAGS = response.general_values;
      delete response.general_values;
    }

    if (response.courses) {
      IWillCookThat.courses = response.courses
      delete response.courses
    }

    if (response.cuisines) {
      IWillCookThat.cuisines = response.cuisines
      delete response.cuisines
    }

    if (response.diets) {
      IWillCookThat.diets = response.diets
      delete response.diets
    }

    if (response.general_tags) {
      IWillCookThat.general_tags = response.general_tags
      delete response.general_tags
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


IWillCookThat.Collections.RecipeSearch = IWillCookThat.Collections.Recipes.extend({

  url: function() {
    return "api/recipes/search/?query=" + this.query
  },

  comparator: function(recipe) {
   return -recipe.get("rating_average");
},

  initialize: function(options) {
    this.query = options.query;
  },
});
