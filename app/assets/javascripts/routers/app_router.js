IWillCookThat.Routers.Router = Backbone.Router.extend({
  routes: {
    '':'index',
    'recipes/new':'new',
    'recipes/:id': 'show',
  },

  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.recipes = new IWillCookThat.Collections.Recipes();
  },

  new: function() {
    var recipe = new IWillCookThat.Models.Recipe();
    var formView = new IWillCookThat.Views.RecipeForm({
      model: recipe,
      collection: this.recipes
    });
    this._swapView(formView);
  },

  show: function(id) {
    var recipe = this.recipes.getOrFetch(id);
    var recipeView = new IWillCookThat.Views.RecipeShow({ model: recipe });
    this._swapView(recipeView);
  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(this._currentView.render().$el);
  }

});
