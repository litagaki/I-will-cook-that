IWillCookThat.Views.SignUp = Backbone.View.extend({

  template: JST["users/user_form"],

  events: {

  },

  initialize: function(options) {
    this.callback = options.callback;
    this.listenTo(this.model, "sync", this.render);
  },

  render:function() {
    var content = this.template({ user: this.model });
    this.$el.html(content);

    return this;
  }
});
