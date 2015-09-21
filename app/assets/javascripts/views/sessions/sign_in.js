IWillCookThat.Views.SignIn = Backbone.View.extend({

  template: JST['sessions/sign_in'],

  initialize: function(options) {
    this.submitCallback = options.submitCallback;
    this.closeCallback = options.closeCallback;
    this.listenTo(this.model, "sync change", this.render);
  },

  events: {
    "click button.sign-in" : "submit",
    "click button.cancel" : "closeForm"
  },

  className: 'sign-in-modals',

  render: function() {
    var content = this.template();
    this.$el.html(content);

    return this;
  },

  submit: function(event) {
    event.preventDefault();

    var form = $(event.currentTarget).parent();
    var formData = form.serializeJSON();

    this.model.save(formData.user,{
      success: function() {
        IWillCookThat.currentUser.fetch();
        this.submitCallback(this);
      }.bind(this)
    });
  },

  closeForm: function(event) {
    event.preventDefault();
    this.closeCallback(this);
  }
});
