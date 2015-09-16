IWillCookThat.Views.ReviewView = Backbone.View.extend({
  template: JST['reviews/review_show'],

  tagName: 'li',

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function() {
    var content = this.template({ review: this.model });
    this.$el.html(content);

    return this;
  }
});
