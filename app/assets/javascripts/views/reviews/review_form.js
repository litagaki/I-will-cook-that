IWillCookThat.Views.ReviewForm = Backbone.View.extend({

  template: JST['reviews/review_form'],

  events: {
    "submit form":"submit"
  },

  initialize: function(options) {
    this.recipe = options.recipe;
    this.listenTo(this.model, "sync", function() {
      this.render}
    );
  },

  render: function() {
    var content = this.template({ review: this.model, errors: this.errors })
    this.$el.html(content);
    return this;
  },

  submit: function(event) {
    event.preventDefault();

    var review = this.model;
    var recipeId = this.recipe.id;
    var recipe = this.recipe;
    var formData = $(event.currentTarget).serializeJSON();

    review.set({"recipe_id":recipeId});
    review.unset("author");
    review.unset("updated_at");
    review.unset("recipe");

    this.model.save(formData.review, {
      success: function(review) {
        recipe.reviews().add(review, {merge: true});
        (this.$('form'))[0].reset();
        this.errors = [];
        this.$('ul.error').html("");
        this.model = new IWillCookThat.Models.Review();
      }.bind(this),
      error: function(model, response) {
        var re = /(\[|\]|}|\{)/gi;
        this.errors = response.responseText.replace(re, "").split(",");
        this.render();
      }.bind(this)
    });
  }
});
