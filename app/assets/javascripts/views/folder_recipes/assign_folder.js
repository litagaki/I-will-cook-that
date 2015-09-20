IWillCookThat.Views.AssignFolder = Backbone.View.extend({
  template: JST['folder_recipes/folder_assign'],

  tagName: 'form',

  className: 'folder-recipe-form',

  events: {
    "click button.folder-recipe-submit":"saveToFolders",

  },

  initialize: function(options) {
    this.folderRecipes = options.folderRecipes;
    this.recipe = options.recipe;
    this.callback = options.callback;
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function(){
    var content = this.template({
      folders: this.collection,
      savedFolders: this.recipe.folders()
    });
    this.$el.html(content);

    return this;
  },

  saveToFolders: function(event) {
    event.preventDefault();
    var folderId, index, newFolderRecipe, folder, callback;
    var recipe = this.recipe;
    if (this.folderRecipes) {
      var originalFolderRecipes = _(this.folderRecipes.filter(function(folderRecipe){
        return folderRecipe.get('recipe_id') === recipe.id;
      }));
    }

    var recipe = this.recipe;
    var newFolders = this.$('input[type=checkbox]:checked').map(function(_,el){
      return $(el).val();
    }).get();

    if (originalFolderRecipes) {
      _(originalFolderRecipes.each(function(folderRecipe){
          folderId = folderRecipe.get('folder_id');
          index = newFolders.indexOf(folderId);
          if (index === -1) {
            folderRecipe.destroy({
              success: function(folderRecipe) {
                this.folderRecipes.remove(folderRecipe);
                folder = this.collection.get(folderId);
                folder.recipes().remove(recipe);
                debugger
              }.bind(this)
            })
          } else {
            newFolders.splice(index,1)
          }
      }.bind(this)));
    }

    for (var i = 0; i < newFolders.length; i++) {
      if (i === newFolders.length - 1) {
        callback = this.callback(this);
      }
      folder = this.collection.get(newFolders[i]);
      newFolderRecipe = new IWillCookThat.Models.FolderRecipe({
        recipe_id: recipe.id,
        folder: folder,
        folder_id: folder.id
      });
      newFolderRecipe.save({},{
        success: function(folderRecipe){
          this.folderRecipes.add(folderRecipe);
          folder.recipes().add(recipe);
          recipe.folders().add(folder);
          if (callback) {
            callback(this);
          }
        }.bind(this)
      });
    }
  }



});
