IWillCookThat.Views.RecipeForm = Backbone.CompositeView.extend({

  template: JST['recipes/recipe_form'],

  className: 'main-recipe-form',

  events: {
    "submit form" : "submitRecipe"
  },

  initialize: function() {
    this.errors = [];
  },

  render: function(){
    var content = this.template({ recipe: this.model, file: this.file, errors: this.errors });
    this.$el.html(content);

    return this;
  },

  submitRecipe: function(event) {
    event.preventDefault();
    debugger
    var formElement = ($(event.currentTarget))[0]
    var jsonFormData = $(event.currentTarget).serializeJSON();
    this.model.set(jsonFormData.recipe);
    var formData = new FormData(formElement);
    this.file = this.$('.image')[0].files[0];
    if (this.file) {
      formData.append("recipe[photo]",this.file);
    }
    var recipes = this.collection;
    var recipe = this.model
    this.model.saveFormData(formData,{
      success: function() {
        recipes.add(recipe, {merge:true});
        this.errors= [];
        this.$('ul.error').html("");
        Backbone.history.navigate('recipes/' + recipe.id,{ trigger: true })
      }.bind(this),
      error: function(model, response) {
        var re = /(\[|\])/gi;
        this.errors = response.responseText.replace(re, "").split(",");
        this.render();
      }.bind(this)
    })
  }
});
