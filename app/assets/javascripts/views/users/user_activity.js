IWillCookThat.Views.UserActivity = Backbone.CompositeView.extend({
  template: JST['users/user_activity'],
  className: 'user-profile-activity',

  events:{
    "click .nav-activity li":"toggleContent"
  },


  initialize: function(options){
    this.activeView = "my-recipes-index";
    this.folders =options.folders;
    this.recipes = options.recipes;
    this.reviews = options.reviews;
    var myRecipeIndex = new IWillCookThat.Views.RecipeIndex({
      collection: this.recipes,
      folders: this.folders
    });
    var myReviewIndex = new IWillCookThat.Views.ReviewIndex({
      collection: this.reviews
    });
    this.addSubview('div.my-recipes-index',myRecipeIndex);
    this.addSubview('div.my-reviews-index',myReviewIndex);

  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews;

    return this;
  },

  toggleContent: function(event) {
    var selector = $(event.currentTarget).attr("data-div")
    if (selector !== this.activeView) {
      this.activeView = selector;
      this.$('div.nav-activity li').toggleClass("active");
      this.$('section.user-content div').toggleClass("active");
    }
  }
});
