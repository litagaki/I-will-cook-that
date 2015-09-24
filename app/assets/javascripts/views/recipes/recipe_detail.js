IWillCookThat.Views.RecipeDetail = Backbone.CompositeView.extend({

  template: JST['recipes/recipe_detail'],

  tagName: 'section',

  initialize: function(options){
    this.callback = options.callback;
    this.listenTo(this.model, "sync", function() {
      this.render();
      this.callback && this.callback();
    }.bind(this));
  },

  render: function() {
    var content = this.template({ recipe: this.model });
    this.$el.html(content);
    this.attachSubviews();

    return this;
  }
});
