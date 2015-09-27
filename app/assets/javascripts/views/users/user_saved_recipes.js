IWillCookThat.Views.SavedRecipes = Backbone.CompositeView.extend({
  template: JST['users/saved_recipes'],
  className: 'saved-recipes',

  events: {
    "click li.add-folder" :"addNewFolderForm",
    "click i":"addEditFolderForm",
    "click p.folder":"showFolderRecipes",
    "click li.all":"showAll"
  },

  initialize: function(options) {
    this.folderRecipes = options.folderRecipes;
    this.total = 0;
    this.recipeIds = [];
    this.listenTo(this.collection, "add", function(folder){
      debugger
      this.addFolderSubviews(folder);
      this.render();
    });
    this.listenTo(this.collection, "sync remove change:title", function() {
      debugger
      this.render();
    });

    this.collection.each(function(folder) {
      this.listenTo(folder.recipes(),"add", function(recipe) {
        debugger;
        this.addRecipeSubview(recipe);
      });
      this.listenTo(folder.recipes(), "remove", this.removeRecipeSubview);
    }.bind(this));
    this.collection.each(function(folder){
      folder.recipes().each(function(recipe){
        this.addRecipeSubview(recipe);
      }.bind(this))
    }.bind(this))
    debugger
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
    var recipeListView = new IWillCookThat.Views.RecipeListItem({
      model: recipe,
      folders: this.collection,
      folderRecipes: this.folderRecipes
    });
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
      callback: function(subview) {
        this.removeSubview('.add-folder-insert', subview);
        $('.add-folder-insert').removeClass("active");
      }.bind(this)
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
      callback: function(subview){
        this.removeSubview(selector, subview);
        this.$(selector).removeClass("active");
      }.bind(this)
    });
    this.addSubview(selector,this.editSubview);
    this.$(selector).addClass("active");
  },

  showFolderRecipes: function(event) {
    var folderId = $(event.currentTarget).attr("data-id");
    var folder = this.collection.get(folderId);
    this.total = 0;
    this.recipeIds = [];
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
  },

  removeRecipeSubview:function(recipe) {
    if (recipe.folders().length > 0) {
      return;
    }
    this.removeModelSubview('ul.my-saved-recipes',recipe);
    this.total -= 1;
    this.render();

  }
});
