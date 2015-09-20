IWillCookThat.Models.FolderRecipe = Backbone.Model.extend({
  url: function(){
    var path = '/api/folders/' + this.get('folder_id')+ "/folder_recipes"
    if (this.id) {
      path = path + "/" + this.id;
    }

    return path
  },

  initialize: function(options) {
    this.folder = options.folder;
  },

  toJSON: function() {
    var json = _.clone(this.attributes);
    delete json.folder;
    return { folder_recipe: json };
  }

});
