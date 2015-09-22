IWillCookThat.Views.SignIn = Backbone.View.extend({

  template: JST['sessions/sign_in'],

  initialize: function(options) {
    this.submitCallback = options.submitCallback;
    this.closeCallback = options.closeCallback;
    this.listenTo(this.model, "sync change", this.render);
    this.errors = [];
  },

  events: {
    "submit form" : "submit",
    "click button.cancel" : "closeForm"
  },

  className: 'sign-in-modals',

  render: function() {
    var content = this.template({ errors: this.errors });
    this.$el.html(content);
    return this;
  },

  submit: function(event) {
    event.preventDefault();

    var formData = $(event.currentTarget).serializeJSON();

    this.model.save(formData.user,{
      success: function() {
        IWillCookThat.currentUser.fetch();
        this.submitCallback(this);
      }.bind(this),
      error: function(model,response, options) {
        var re = /(\[|\]|}|\{)/gi;
        this.errors = response.responseText.replace(re, "").split(",");
        this.render()
      }.bind(this)
    });
  },

  closeForm: function(event) {
    event.preventDefault();
    this.closeCallback(this);
  }
});
