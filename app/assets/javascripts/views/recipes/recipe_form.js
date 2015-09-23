IWillCookThat.Views.RecipeForm = Backbone.CompositeView.extend({

  template: JST['recipes/recipe_form'],

  className: 'main-recipe-form',

  events: {
    "submit form" : "submitRecipe",
    "change #input-image": "fileInputChange"
  },

  initialize: function(options) {
    this.nonKeywordTags = options.tags;
    this.listenTo(this.nonKeywordTags, "sync", this.render);
    this.errors = [];
  },

  render: function(){
    var cuisines = _(this.nonKeywordTags.filter(function(tag){
      return tag.get("category") === "cuisine";
    }));
    var courses = _(this.nonKeywordTags.filter(function(tag){
      return tag.get("category") === "course";
    }));
    var diets = _(this.nonKeywordTags.filter(function(tag){
      return tag.get("category") === "dietary_restriction";
    }));
    var generalTags = _(this.nonKeywordTags.filter (function(tag){
      return tag.get("category") === "general";
    }));

    var content = this.template({
      recipe: this.model,
      file: this.file,
      errors: this.errors,
      cuisines: cuisines,
      courses: courses,
      diets: diets,
      generalTags: generalTags
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
