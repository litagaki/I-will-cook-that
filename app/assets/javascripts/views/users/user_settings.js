IWillCookThat.Views.Settings = Backbone.CompositeView.extend({
  template:  JST['users/user_settings'],

  className: "user-settings",

  initialize: function() {
    this.listenTo(IWillCookThat.currentUser, "change", this.render);
  },

  render: function() {
    var content = this.template({ user: IWillCookThat.currentUser });
    this.$el.html(content);
    this.attachSubviews();

    return this;
  }


});
