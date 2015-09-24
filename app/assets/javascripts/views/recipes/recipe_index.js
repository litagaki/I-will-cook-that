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
    var callback = function(subview,selector) {
      this.removeSubview(selector,subview);
    }.bind(this);
    this.eachSubview(callback);
  },
});
