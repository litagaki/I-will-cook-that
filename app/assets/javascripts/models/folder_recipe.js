IWillCookThat.Models.FolderRecipe = Backbone.Model.extend({
  url: function(){
    return '/api/folders/' + this.folder.id + "/folder_recipes"
  },

  initialize: function(folder) {
    this.folder = options.folder;
  }

});