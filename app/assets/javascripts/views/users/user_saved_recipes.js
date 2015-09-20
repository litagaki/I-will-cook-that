IWillCookThat.Views.SavedRecipes = Backbone.CompositeView.extend({
  template: JST['users/saved_recipes'],
  className: 'saved-recipes',

  events: {
    "click li.add-folder" :"addNewFolderForm",
    "click i":"addEditFolderForm",
    "click p.folder":"showFolderRecipes",
    "click li.all":"showAll"
  },

  initialize: function() {
    this.total = 0;
    this.recipeIds = [];
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
    if (this.recipeIds.indexOf(recipe.id) !== -1) {
      return;
    }
    this.recipeIds.push(recipe.id);
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
    var $li = $(event.currentTarget).parent();
    var folderId = $li.find("p.folder").attr("data-id");
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
    var folderId = $(event.currentTarget).attr("data-id");
    var folder = this.collection.get(folderId);
    this.total = 0;
    this.$('ul.my-saved-recipes').html("")
    this._subviews['ul.my-saved-recipes'] = _([]);
    folder.recipes().each(function(recipe){
      this.addRecipeSubview(recipe);
    }.bind(this))
    this.render();
  },

  showAll: function() {
    this.initialize({collection: this.collection});
    this.render();
  }


});
