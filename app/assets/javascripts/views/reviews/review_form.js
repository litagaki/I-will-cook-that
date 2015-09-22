IWillCookThat.Views.ReviewForm = Backbone.View.extend({

  template: JST['reviews/review_form'],

  tagName: 'form',

  className: 'review-form',

  events: {
    "click button.submit-review":"submit"
  },

  initialize: function(options) {
    this.recipe = options.recipe;
    this.listenTo(this.model, "sync", this.render);
  },

  render: function() {
    var content = this.template({ review: this.model })
    this.$el.html(content);

    return this;
  },

  submit: function(event) {
    event.preventDefault();
    var review = this.model;
    var recipeId = this.recipe.id;
    var recipe = this.recipe;
    var formData = this.$el.serializeJSON();
    review.set({"recipe_id":recipeId});
    review.unset("author");
    review.unset("updated_at");
    review.unset("recipe");
    this.model.save(formData.review, {
      success: function(review) {
        recipe.reviews().add(review, {merge: true});
        (this.$el)[0].reset();
        debugger
        this.model = new IWillCookThat.Models.Review();
      }.bind(this)
    });
  }
});
