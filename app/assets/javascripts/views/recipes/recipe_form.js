IWillCookThat.Views.RecipeForm = Backbone.CompositeView.extend({

  template: JST['recipes/recipe_form'],

  className: 'main-recipe-form',

  events: {
    "submit form" : "submitRecipe",
    "change #input-image": "fileInputChange"
  },

  initialize: function(options) {
    this.listenTo(this.collection, "sync", this.render);
    this.errors = [];
  },

  render: function(){
    var content = this.template({
      recipe: this.model,
      file: this.file,
      errors: this.errors,
      cuisines: IWillCookThat.CUISINES,
      courses: IWillCookThat.COURSES,
      diets: IWillCookThat.DIETS,
      generalTags: IWillCookThat.GENERAL_TAGS,
    });

    this.$el.html(content);
    this.attachSubviews();

    return this;
  },

  fileInputChange: function(event) {
    var view = this;
    var file = event.currentTarget.files[0];
    var reader = new FileReader();

    reader.onloadend = function() {
      view._updatePreview(reader.result);
    }

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this._updatePreview("");
    }
  },

  _updatePreview: function(source) {
    this.$el.find('#image-preview').attr("src",source);
  },

  submitRecipe: function(event) {
    event.preventDefault();

    var recipes = this.collection;
    var recipe = this.model
    var formElement = ($(event.currentTarget))[0]
    var jsonFormData = $(event.currentTarget).serializeJSON();
    this.model.set(jsonFormData.recipe);
    var formData = new FormData(formElement);
    var uploadedFile = this.$('.image')[0].files[0]

    if (uploadedFile) {
      this.file = uploadedFile;
    }

    if (this.file) {
      formData.append("recipe[photo]", this.file)
    }

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
        this.errorView = new IWillCookThat.Views.Errors({ errors: this.errors });
        this.addSubview('div.errors',this.errorView);
      }.bind(this)
    })
  },


});
