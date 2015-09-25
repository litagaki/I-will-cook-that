IWillCookThat.Routers.Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    '_=_' :'home',
    'user/activity': 'profileActivity',
    'user/saved': 'savedRecipes',
    'user/settings': "userSettings",
    'recipes/new':'new',
    'recipes/search_results':'results',
    'recipes/:id': 'show',
    'recipes/:id/print':"printView"
  },

  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.newCollections();
    if (IWillCookThat.currentUser.isSignedIn()) {
      dataFetch();
    }
  },

  newCollections: function() {
    this.recipes = new IWillCookThat.Collections.Recipes();
    this.reviews = new IWillCookThat.Collections.Reviews();
    this.folders = new IWillCookThat.Collections.Folders();
    this.folderRecipes = new IWillCookThat.Collections.FolderRecipes();
    this.newRecipes = new IWillCookThat.Collections.RecentRecipes();
    this.results = new IWillCookThat.Collections.RecipeSearch({});
    this.newRecipes.fetch();
  },

  dataFetch: function() {
    this.recipes.fetch();
    this.reviews.fetch();
    this.folders.fetch();
    this.folderRecipes.fetch();
  },

  home: function() {
    var homeView = new IWillCookThat.Views.HomeView({
      collection: this.newRecipes,
      router: this
    });

    this._swapView(homeView);
  },

  profileActivity: function() {
    this._requireSignedIn();

    var profileView = new IWillCookThat.Views.UserProfile({
      recipes: this.recipes,
      reviews: this.reviews,
      folders: this.folders,
      router: this
    });
    profileView.addActivityView();
    this._swapView(profileView);
  },

  savedRecipes: function() {
    this._requireSignedIn();

    var profileView = new IWillCookThat.Views.UserProfile({
      folders: this.folders,
      folderRecipes: this.folderRecipes,
      router: this
    });
    profileView.addSavedRecipesView();
    this._swapView(profileView);
  },

  userSettings: function() {
    this._requireSignedIn();
    var profileView = new IWillCookThat.Views.UserProfile({ router: this });
    profileView.addSettingsView();

    this._swapView(profileView);
  },

  new: function() {
    this._requireSignedIn();
    var recipe = new IWillCookThat.Models.Recipe();
    var formView = new IWillCookThat.Views.RecipeForm({
      model: recipe,
      collection: this.recipes,
    });
    this._swapView(formView);
  },

  show: function(id) {
    //don't use getorFetch on this.recipes because this.recipes is to hold
    //only recipes authored by the current user, not any recipe being shown.
    var recipe = new IWillCookThat.Models.Recipe({ id: id });
    recipe.fetch();
    var recipeView = new IWillCookThat.Views.RecipeShow({
      model: recipe,
      folders: this.folders,
      folderRecipes: this.folderRecipes,
      myReviews: this.reviews
    });
    this._swapView(recipeView);
  },

  results: function() {
    var resultsIndexView = new IWillCookThat.Views.RecipeIndex({
      folders: this.folders,
      collection: this.results,
      folderRecipes: this.folderRecipes
    });
    this._swapView(resultsIndexView)
  },

  printView: function(id) {
    var model = new IWillCookThat.Models.Recipe({ id: id });
    model.fetch();

    var printView = new IWillCookThat.Views.RecipePrint({
      model: model,
      router: this
    });

    this._swapView(printView);
  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(this._currentView.render().$el);
  },

  _requireSignedIn: function() {
    if (!IWillCookThat.currentUser.isSignedIn()) {
      Backbone.history.navigate('',{ trigger: true});
    }
  }

});
