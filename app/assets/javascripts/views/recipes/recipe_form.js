IWillCookThat.Views.RecipeForm = Backbone.CompositeView.extend(

  template: JST['recipes/recipe_form'],
  tagName: 'form',

  render: function(){
    var content = this.template({ recipe: this.model });
    this.$el.html(content);

    return this;
  }
);
