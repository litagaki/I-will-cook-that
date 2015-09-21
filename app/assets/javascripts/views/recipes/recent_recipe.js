IWillCookThat.Views.RecentRecipes = Backbone.CompositeView.extend({
  template: JST['recipes/recent_recipes'],

  render: function() {
    var content = this.template();
    this.$el.html(content);

    return this;
  }
});
