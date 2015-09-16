IWillCookThat.Views.RecipeListItem = Backbone.View.extend({

  template: JST['recipes/recipe_list_item'],

  tagName: 'li',

  className: 'recipe-item group',

  initialize: function(){
    this.listenTo(this.model, "sync", this.render);
  },

  render: function(){
    var content = this.template({ recipe: this.model });
    this.$el.html(content);

    return this;
  }
});
