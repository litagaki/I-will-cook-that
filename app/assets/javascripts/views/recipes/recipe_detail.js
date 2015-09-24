IWillCookThat.Views.RecipeDetail = Backbone.CompositeView.extend({

  template: JST['recipes/recipe_detail'],

  tagName: 'section',

  initialize: function(){
    debugger
    this.listenTo(this.model, "sync", this.render);
  },

  render: function() {
    var content = this.template({ recipe: this.model });
    this.$el.html(content);
    this.attachSubviews();

    return this;
    debugger
  }
});
