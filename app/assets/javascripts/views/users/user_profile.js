IWillCookThat.Views.UserProfile = Backbone.CompositeView.extend({
  template: JST['users/profile_view'],
  className: 'user-profile',

  initialize: function(options){
    this.router = options.router;
    this.recipes = options.recipes;
    this.reviews = options.reviews;
    this.folders = options.folders;
    this.folderRecipes = options.folderRecipes;
    this.listenTo(IWillCookThat.currentUser, "sync", function(){
      this.router.dataFetch();
      this.render();
    }.bind(this));
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();

    return this;
  },

  addActivityView: function() {
    var activityView = new IWillCookThat.Views.UserActivity({
      recipes: this.recipes,
      reviews: this.reviews,
      folders: this.folders,
    });
    this.addSubview("section.profile-activity",activityView);
  },

  addSavedRecipesView: function() {
    var recipesView = new IWillCookThat.Views.SavedRecipes({
      collection: this.folders,
      folderRecipes: this.folderRecipes
    });
    this.addSubview("section.saved-recipes",recipesView);
  }
});
