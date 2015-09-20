IWillCookThat.Views.ReviewIndex = Backbone.CompositeView.extend({
  template: JST['reviews/review_index'],

  initialize: function(options){
    this.recipe = options.recipe;
    this.listenTo(this.collection, "add", this.addReviewSubview);
    this.listenTo(this.collection, "remove", this.removeReviewSubview);
    this.listenTo(this.collection, "sync remove", this.render);
    this.collection.each(function(review){
      this.addReviewSubview(review);
    }.bind(this));
  },

  render: function() {
    this.$el.html(this.template({reviews: this.collection }));
    this.attachSubviews();

    return this;
  },

  addReviewSubview: function(review) {
    var reviewListView = new IWillCookThat.Views.MyReviewListItem({
      model: review,
      collection: this.collection
    });
    this.addSubview("ul.my-review-index",reviewListView);
  },

  removeReviewSubview: function(review) {
    this.removeModelSubview("ul.my-review-index",review);
  },



});
