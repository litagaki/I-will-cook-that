IWillCookThat.Routers.Router = Backbone.Router.extend({
  routes: {
    'user/activity': 'profileActivity',
    'user/saved': 'savedRecipes',
    'recipes/new':'new',
    'recipes/:id': 'show',
  },

  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.recipes = new IWillCookThat.Collections.Recipes();
  },

  profileActivity: function() {
    this.recipes.fetch();
    //will need to fetch reviews as well
    //will pass user in as model
    var profileView = new IWillCookThat.Views.UserProfile({
      recipes: this.recipes
    });
    profileView.addActivityView();
    this._swapView(profileView);
  },

  savedRecipes: function() {

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
