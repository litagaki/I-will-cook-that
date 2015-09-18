IWillCookThat.Collections.Reviews = Backbone.Collection.extend({

  url: "/api/reviews",

  model: IWillCookThat.Models.Review,

  comparator: function(review){
    return -review.get('created_at')
  },

  initialize: function(options) {
    if (options) {
      this.recipe = options.recipe;
    }
  },

  getOrFetch: function(id) {
    var reviews = this;
    var review = reviews.get(id);

    if (review){
      review.fetch();
    } else {
      review = new this.model({ id: id })
      reviews.add(review);
      review.fetch({
        error: function(){
          reviews.remove(review);
        }
      });
    }

    return review;
  }
});
