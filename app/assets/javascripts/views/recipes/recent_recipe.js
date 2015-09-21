IWillCookThat.Views.RecentRecipes = Backbone.View.extend({
  template: JST['recipes/recent_recipes'],

  className: 'recent-recipes',

  initialize: function() {
    this.listenTo(this.collection, "sync", this.render)
  },

  render: function() {
    var content = this.template({ recipes: this.collection });
    this.$el.html(content);

    return this;
  }
});
