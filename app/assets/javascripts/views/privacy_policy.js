IWillCookThat.Views.Privacy = Backbone.View.extend({
  template: JST['privacy'],

  className: "privacy",

  render: function() {
    var content = this.template();
    this.$el.html(content);

    return this;
  },
});
