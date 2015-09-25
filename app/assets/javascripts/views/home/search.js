IWillCookThat.Views.SearchView = Backbone.View.extend({
  template: JST['home/search'],

  initialize: function(options) {
    this.router = options.router;
  },

  events: {
    "submit form ":"search"
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);

    return this;
  },

  search: function(event) {
    event.preventDefault();
    var query = $(event.currentTarget).find("input").val();
    var newResults = new IWillCookThat.Collections.RecipeSearch({
      query: query
    });
    newResults.fetch({
      success: function(collection, response) {
        this.router.results = collection;
        Backbone.history.navigate("recipes/search_results/" + query, {trigger: true});
      }.bind(this)
    })
  },
});
