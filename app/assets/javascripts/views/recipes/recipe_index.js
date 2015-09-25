IWillCookThat.Views.RecipeIndex = Backbone.CompositeView.extend({
  template: JST['recipes/recipe_index'],

  initialize: function(options){
    this.folderRecipes = options.folderRecipes;
    this.folders = options.folders;
    this.listenTo(this.collection, "add", this.addRecipeSubview);
    this.listenTo(this.collection, "reset", this.removeSubviews)
    this.listenTo(this.collection, "sync", this.render);

    _(this.collection.each(function(recipe){
        this.addRecipeSubview(recipe);
      }.bind(this)));
  },

  render: function() {
    this.$el.html(this.template({recipes: this.collection }));
    this.attachSubviews();

    return this;
  },

  addRecipeSubview: function(recipe) {
    var recipeListView = new IWillCookThat.Views.RecipeListItem({
      model: recipe,
      folders: this.folders,
      folderRecipes: this.folderRecipes
    });
    this.addSubview("ul.my-recipe-index-item",recipeListView);
  },

  removeSubviews: function() {
    var count = this.subviews('ul.my-recipe-index-item')._wrapped.length;

    this.subviews('ul.my-recipe-index-item').each(function(subview){
      subview.remove();
    });
    this.subviews("ul.my-recipe-index-item").splice(0,count);
  },
});
