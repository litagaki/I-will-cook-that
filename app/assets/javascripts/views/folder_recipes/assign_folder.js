IWillCookThat.Views.AssignFolder = Backbone.View.extend({
  template: JST['folder_recipes/folder_assign'],

  tagName: 'form',

  className: 'folder-recipe-form',

  events: {
    "click button.folder-recipe-submit":"saveToFolders",

  },

  initialize: function(options) {
    this.recipe = options.recipe;
    this.callback = options.callback;
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function(){
    var content = this.template({ folders: this.collection });
    this.$el.html(content);

    return this;
  },

  saveToFolders: function(event) {
    event.preventDefault();
    var newFolderRecipe, folder, callback;
    var recipe = this.recipe;
    var folders = this.$('input[type=checkbox]:checked').map(function(_,el){
      return $(el).val();
    }).get();

    for (var i = 0; i < folders.length; i++) {
      if (i === folders.length - 1) {
        callback = this.callback(this);
      }
      folder = this.collection.get(folders[i]);
      newFolderRecipe = new IWillCookThat.Models.FolderRecipe({
        recipe_id: recipe.id,
        folder: folder
      });
      newFolderRecipe.save({},{
        success: callback
      })
    }
  }



});
