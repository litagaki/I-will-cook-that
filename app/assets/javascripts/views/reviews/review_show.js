IWillCookThat.Views.ReviewView = Backbone.CompositeView.extend({
  template: JST['reviews/review_show'],

  tagName: 'li',

  events:{
    "click button.delete-review": "deleteReview",
    "click button.update-review": "addUpdateReviewForm"
  },

  initialize: function(options) {
    this.recipe = options.recipe;
    this.deleteCallback = options.deleteCallback;
    this.myReviews = options.myReviews;
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(IWillCookThat.currentUser, "sync", this.render);
  },

  render: function() {
    var content = this.template({ review: this.model });
    this.$el.html(content);

    return this;
  },

  deleteReview: function() {
    var reviews = this.recipe.reviews();
    this.model.destroy({
      success: function(review){
        reviews.remove(review);
        this.myReviews.remove(review);
        this.deleteCallback && this.deleteCallback(this)
      }.bind(this)
    });
  },

  addUpdateReviewForm: function() {
    var recipe = new IWillCookThat.Models.Recipe({id: this.model.get("recipe_id")});
    recipe.fetch({
      success: function() {
        this.$el.html('<section class="review-form"></section>');
        var formView = new IWillCookThat.Views.ReviewForm({
          model: this.model,
          recipe: recipe
         });
        this.addSubview("section.review-form",formView);
      }.bind(this)
    });

  }
});
