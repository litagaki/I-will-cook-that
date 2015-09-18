IWillCookThat.Views.SavedRecipes = Backbone.CompositeView.extend({
  template: JST['users/saved_recipes'],
  className: 'saved-recipes',

  events: {
    "click li.add-folder" :"addFolderForm"
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

  addFolderForm: function() {
    //already rendered form
    if (this.subviews('.add-folder-insert').size() !== 0) {
      return;
    }
    var folder = new IWillCookThat.Models.Folder();
    this.formSubview = new IWillCookThat.Views.FolderForm({
      model: folder,
      collection: this.collection,
      callback: this.removeFolderForm.bind(this)
    });
    this.addSubview('.add-folder-insert',this.formSubview);
    this.$('.add-folder-insert').addClass("active");
  },

  removeFolderForm: function() {
    this.removeSubview('.add-folder-insert',this.formSubview)
  }


});
