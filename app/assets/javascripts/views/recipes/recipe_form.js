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
    var formElement = this.$('form')[0];
    var formData = new FormData(formElement);
    var file = this.$('.image')[0].files[0];
    formData.append("recipe[photo]",file);
    debugger
    var recipes = this.collection;
    var recipe = this.model
    this.model.saveFormData(formData,{
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
