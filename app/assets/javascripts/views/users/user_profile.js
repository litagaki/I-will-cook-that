IWillCookThat.Views.UserProfile = Backbone.CompositeView.extend({
  template: JST['users/profile_view'],
  className: 'user-profile',

  initialize: function(options){
    this.router = options.router;
    this.recipes = options.recipes;
    this.reviews = options.reviews;
    this.folders = options.folders;
    this.folderRecipes = options.folderRecipes;
    this.listenTo(IWillCookThat.currentUser, "sync", this.render);
    this.$('div.user-header a').removeClass("active");
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();

    this.$(this.linkSelector).addClass("active");

    return this;
  },

  addActivityView: function() {
    var activityView = new IWillCookThat.Views.UserActivity({
      recipes: this.recipes,
      reviews: this.reviews,
      folders: this.folders,
    });
    this.addSubview("section.profile-activity",activityView);
    this.linkSelector = 'a.user-activity';
  },

  addSavedRecipesView: function() {
    var recipesView = new IWillCookThat.Views.SavedRecipes({
      collection: this.folders,
      folderRecipes: this.folderRecipes
    });
    this.addSubview("section.saved-recipes",recipesView);

    this.linkSelector='a.saved-recipes';
  },

  addSettingsView: function() {
    var newUser = new IWillCookThat.Models.User();
    var settingsView = new IWillCookThat.Views.Settings({
      model: newUser
    });

    this.addSubview("section.profile-settings",settingsView);
    this.linkSelector = 'a.user-settings'
  }
});
