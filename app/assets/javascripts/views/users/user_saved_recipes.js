IWillCookThat.Views.SavedRecipes = Backbone.CompositeView.extend({
  template: JST['users/saved_recipes'],
  className: 'saved-recipes',

  events: {
    "click li.add-folder" :"addNewFolderForm",
    "click i":"addEditFolderForm",
    "click li.folder":"showFolderRecipes"
  },

  initialize: function() {
    this.total = 0;
    this.listenTo(this.collection, "sync remove", this.render);
    this.listenTo(this.collection, "add",this.addFolderSubviews);
    this.collection.each(function(folder){
      folder.recipes().each(function(recipe){
        this.addRecipeSubview(recipe);
      }.bind(this))
    }.bind(this))

  },

  render: function(){
    var content = this.template({total: this.total, folders: this.collection });
    this.$el.html(content);
    this.attachSubviews();

    return this;
  },

  addRecipeSubview: function(recipe) {
    var recipeListView = new IWillCookThat.Views.RecipeListItem({ model: recipe});
    this.addSubview("ul.my-saved-recipes",recipeListView);
    this.total += 1;
  },

  addFolderSubviews: function(folder) {
    folder.recipes().each(function(recipe){
      this.addRecipeSubview(recipe);
    }.bind(this))
  },

  addNewFolderForm: function() {
    //already rendered form
    if (this.subviews('.add-folder-insert').size() !== 0) {
      return;
    }
    var folder = new IWillCookThat.Models.Folder();
    this.formSubview = new IWillCookThat.Views.FolderForm({
      model: folder,
      collection: this.collection,
      callback: this.removeSubview.bind(this,'.add-folder-insert')
    });
    this.addSubview('.add-folder-insert',this.formSubview);
    this.$('.add-folder-insert').addClass("active");
  },

  addEditFolderForm: function(event) {
    var $p = $(event.currentTarget).parent();
    var folderId = $p.attr("data-id");
    var selector = ".edit-" + folderId;
    //already rendered form
    if (this.subviews(selector).size() !== 0) {
      return;
    }
    var folder = this.collection.get(folderId);
    this.editSubview = new IWillCookThat.Views.FolderForm({
      model: folder,
      collection: this.collection,
      callback: this.removeSubview.bind(this,selector)
    });
    this.addSubview(selector,this.editSubview);
    this.$(selector).addClass("active");
  },

  showFolderRecipes: function(event) {
    var folderId = $(event.currentTarget).find('p').attr("data-id");
    var folder = this.collection.get(folderId);
    this.total = 0;
    this.$('ul.my-saved-recipes').html("")
    this._subviews['ul.my-saved-recipes'] = _([]);
    folder.recipes().each(function(recipe){
      this.addRecipeSubview(recipe);
    }.bind(this))
    this.render();
  }


});
