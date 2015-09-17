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
    review.set({ recipe_id: recipeId } );
    var formData = this.$el.serializeJSON();
    this.model.save(formData.review, {
      success: function(review) {
        recipe.reviews().add(review);
        (this.$el)[0].reset();
        this.model = new IWillCookThat.Models.Review();
      }.bind(this)
    })
  }
});
