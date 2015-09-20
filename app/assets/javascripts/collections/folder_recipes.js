IWillCookThat.Collections.FolderRecipes = Backbone.Collection.extend({
  url: '/api/folder_recipes',

  model: IWillCookThat.Models.FolderRecipe,


    getOrFetch: function(id) {
      var folder_recipes = this;
      var folder_recipe = folder_recipes.get(id);

      if (folder_recipe){
        folder_recipe.fetch();
      } else {
        folder_recipe = new this.model({ id: id })
        folder_recipes.add(folder_recipe);
        folder_recipe.fetch({
          error: function(){
            folder_recipes.remove(folder_recipe);
          }
        });
      }

      return folder_recipe;
    }


});
