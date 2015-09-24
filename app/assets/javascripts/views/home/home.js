IWillCookThat.Views.HomeView = Backbone.CompositeView.extend({

  template: JST['home/home'],

  initialize: function(options) {
    var recentRecipeView = new IWillCookThat.Views.RecentRecipes({
      collection: this.collection
    });
    this.addSubview('div.recent', recentRecipeView);
    var searchView = new IWillCookThat.Views.SearchView({
      router: options.router
    });
    this.addSubview('div.search',searchView);
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();

    return this;
  }
});
