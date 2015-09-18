IWillCookThat.Views.UserProfile = Backbone.CompositeView.extend({
  template: JST['users/profile_view'],
  className: 'user-profile',

  initialize: function(options){
    this.recipes = options.recipes;
    this.reviews = options.reviews;
    this.folders = options.folders;
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
      reviews: this.reviews
    });
    this.addSubview("section.profile-activity",activityView);
  },

  addSavedRecipesView: function() {
    var recipesView = new IWillCookThat.Views.SavedRecipes({
      collection: this.folders
    });
    this.addSubview("section.saved-recipes",recipesView);
  }
});
