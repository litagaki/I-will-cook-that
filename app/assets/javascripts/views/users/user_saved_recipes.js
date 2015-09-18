IWillCookThat.Views.SavedRecipes = Backbone.CompositeView.extend({
  template: JST['users/saved_recipes'],
  className: 'saved-recipes',

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
  }


});
