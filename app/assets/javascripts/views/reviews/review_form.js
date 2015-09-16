IWillCookThat.Views.ReviewForm = Backbone.View.extend({

  template: JST['reviews/review_form'],

  tagName: 'form',

  className: 'review-form',

  events: {
    "click button.submit-review":"submit"
  },

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function() {
    var content = this.template({ review: this.model })
    this.$el.html(content);

    return this;
  },

  submit: function(event) {
    event.preventDefault();
  }
});
