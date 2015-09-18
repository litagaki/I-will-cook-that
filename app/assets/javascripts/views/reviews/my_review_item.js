IWillCookThat.Views.MyReviewListItem = Backbone.CompositeView.extend({
  template: JST['reviews/my_review_item'],
  tagName: 'li',

  events:{
    "click button.delete-review": "deleteReview",
    "click button.update-review": "addUpdateReviewForm"
  },

  initialize: function(){
    this.listenTo(this.model, "sync", this.render)
  },

  render: function() {
    this.$el.html(this.template({review: this.model }));

    return this;
  },

  deleteReview: function() {
    var reviews = this.collection;
    this.model.destroy({
      success: function(review){
        reviews.remove(review);
      }
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
