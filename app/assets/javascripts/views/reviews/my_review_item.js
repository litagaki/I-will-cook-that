IWillCookThat.Views.MyReviewListItem = Backbone.View.extend({
  template: JST['reviews/my_review_item'],
  tagName: 'li',

  events:{
    "click button.delete-review": "deleteReview"
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
    debugger
    this.model.destroy({
      success: function(review){
        debugger
        reviews.remove(review);
      }
    });
  }

});
