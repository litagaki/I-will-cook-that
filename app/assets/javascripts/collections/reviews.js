IWillCookThat.Collections.Reviews = Backbone.Collection.extend({

  url: function() {
    return "/api/recipes/" + this.recipe.id + "/reviews"
  },

  comparator: function(){
    //need to implement a reverse order sort of reviews by created date
  },

  initialize: function(options) {
    this.recipe = options.recipe;
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
