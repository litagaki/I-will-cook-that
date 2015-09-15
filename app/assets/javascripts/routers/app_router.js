IWillCookThat.Routers.Router = Backbone.Router.extend({
  routes: {
    '':'index',
    'recipes/new':'new',
    'recipes/:id': 'show',
  },

  initialize: function(options) {
    this.$rootEl = options.$rootEl;
  },

  new: function() {
    var recipe = new IWillCookThat.Models.Recipe();
    var formView = new IWillCookThat.Views.RecipeForm({ model: recipe });
    this._swapView(formView);
  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(this._currentView.render().$el);
  }

});
