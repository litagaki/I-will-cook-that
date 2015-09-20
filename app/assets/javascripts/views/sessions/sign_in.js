IWillCookThat.Views.SignIn = Backbone.View.extend({

  template: JST['sessions/sign_in'],

  events: {},

  className: 'sign-in-modals',

  render: function() {
    var content = this.template();
    this.$el.html(content);

    return this;
  }
});
