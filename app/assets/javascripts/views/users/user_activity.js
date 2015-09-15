IWillCookThat.Views.UserActivity = Backbone.CompositeView.extend({
  template: JST['users/user_activity'],
  className: 'user-profile-activity',

  initialize: function(options){
    this.recipes = options.recipes;
    var myRecipeIndex = new IWillCookThat.Views.RecipeIndex({
      collection: this.recipes
    });

    this.addSubview('div.my-recipes-index',myRecipeIndex);

  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews;

    return this;
  }
});
