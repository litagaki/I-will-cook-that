IWillCookThat.Views.Errors = Backbone.View.extend({
  tagName: 'ul',

  className: 'error',

  template: JST['shared/error'],

  initialize: function(options) {
    this.errors = options.errors;
  },

  render: function() {
    this.$el.html(this.template({ errors: this.errors }));

    return this;
  },
});
