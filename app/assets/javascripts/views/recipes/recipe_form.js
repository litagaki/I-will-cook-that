IWillCookThat.Views.RecipeForm = Backbone.CompositeView.extend({

  template: JST['recipes/recipe_form'],

  events: {
    "click button.submit-recipe" : "submitRecipe"
  },

  render: function(){
    var content = this.template({ recipe: this.model });
    this.$el.html(content);

    return this;
  },

  submitRecipe: function(event) {
    event.preventDefault();
    var formData = this.$('form').serializeJSON();
    var recipes = this.collection;
    var recipe = this.model
    this.model.save(formData.recipe,{
      success: function() {
        recipes.add(recipe);
        Backbone.history.navigate('recipes/' + recipe.id,{ trigger: true })
      },
      error: function() {
        //display errors
      }
    })
  }
});
