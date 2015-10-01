IWillCookThat.Views.AssignFolder = Backbone.CompositeView.extend({
  template: JST['folder_recipes/folder_assign'],

  events: {
    "submit form":"saveToFolders",

  },

  initialize: function(options) {
    this.folderRecipes = options.folderRecipes;
    this.recipe = options.recipe;
    this.callback = options.callback;
    this.listenTo(this.collection, "sync", this.render);
    this.errors= [];
  },

  render: function(){
    var content = this.template({
      folders: this.collection,
      savedFolders: this.recipe.folders(),
    });
    this.$el.html(content);
    this.attachSubviews();

    return this;
  },

  saveToFolders: function(event) {

    event.preventDefault();
    var newFolderName
    var recipe = this.recipe;
    if (this.folderRecipes) {
      var originalFolderRecipes = _(this.folderRecipes.filter(function(folderRecipe){
        return folderRecipe.get('recipe_id') === recipe.id;
      }));
    }

    var newFolders = this.$('input[type=checkbox]:checked').map(function(_,el){
      return $(el).val();
    }).get();

    if (originalFolderRecipes) {
      this._removeOldFolders(originalFolderRecipes, newFolders);
    }

    this._addToExistingFolders(newFolders);

    newFolderName = $(event.currentTarget).find('#new-folder').val();

    if (newFolderName) {
      this._createFolderAndAddToIt(newFolderName)
    }
  },

  _createFolderAndAddToIt: function(newFolderName) {
    var folder = new IWillCookThat.Models.Folder({ title: newFolderName });

    folder.save({}, {
      success: function(folder) {
        this.errors= [];
        this.collection.add(folder);
        this.folderRecipes.create({
            folder_id: folder.id, recipe_id: this.recipe.id
          },{
            wait: true,
            success: this._uponFolderRecipeSave.bind(this)
          });

      }.bind(this),
      error: function(folder, response) {
        var re = /(\[|\])/gi;
        this.errors = response.responseText.replace(re, "").split(",");
        this.errorView = new IWillCookThat.Views.Errors({ errors: this.errors });
        this.addSubview('div.errors',this.errorView);
      }.bind(this)
    });
  },

  _removeOldFolders: function(originalFolderRecipes, newFolders) {
    var index, folderId, folder
    var recipe = this.recipe

    _(originalFolderRecipes.each(function(folderRecipe){
        folderId = folderRecipe.get('folder_id');
        index = newFolders.indexOf(folderId.toString());
        if (index === -1) {
          folderRecipe.destroy({
            success: function(folderRecipe) {

              this.folderRecipes.remove(folderRecipe);
              folderId = folderRecipe.get('folder_id');
              folder = this.collection.get(folderId);
              recipe.folders().remove(folder);
              folder.recipes().remove(recipe);
              this.callback(this);

            }.bind(this)
          })
        } else {
          newFolders.splice(index,1)
        }
    }.bind(this)));
  },

  _addToExistingFolders: function(newFolders) {
    var folder
    var recipe = this.recipe
    for (var i = 0; i < newFolders.length; i++) {
      if (i === newFolders.length - 1) {
        callback = this.callback(this);
      }
      folder = this.collection.get(newFolders[i]);
      this.folderRecipes.create({
        recipe_id: recipe.id, folder_id : folder.id
        },{
         wait: true,
         success: this._uponFolderRecipeSave.bind(this)
      });
    }
  },

  _uponFolderRecipeSave: function(folderRecipe) {
    var assignedFolderId = folderRecipe.get("folder_id");
    var assignedFolder = this.collection.get(assignedFolderId);
    this.recipe.folders().add(assignedFolder);
    assignedFolder.recipes().add(this.recipe);
    if (this.callback) {
      this.callback(this);
    }
  },



});
