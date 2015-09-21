IWillCookThat.Views.SignUp = Backbone.View.extend({

  template: JST["users/user_form"],

  events: {
    "click button.submit":"submitUser",
    "click button.cancel":"closeForm"
  },

  initialize: function(options) {
    this.callback = options.callback;
    this.listenTo(this.model, "sync change", this.render);
  },

  render:function() {
    var content = this.template({ user: this.model });
    this.$el.html(content);

    return this;
  },

  submitUser: function(event) {
    event.preventDefault();

    $form = $(event.currentTarget).parent();
    formData = $form.serializeJSON();

    this.model.save(formData.user, {
      success: function(user) {
        IWillCookThat.currentUser.fetch();
        this.callback(this);
      }.bind(this)
    })
  },

  closeForm: function(event) {
    event.preventDefault();
    this.callback(this);
  }
});
