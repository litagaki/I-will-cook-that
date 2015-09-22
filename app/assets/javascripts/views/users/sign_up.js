IWillCookThat.Views.SignUp = Backbone.View.extend({

  template: JST["users/user_form"],

  events: {
    "submit form":"submitUser",
    "click button.cancel":"closeForm"
  },

  initialize: function(options) {
    this.callback = options.callback;
    this.listenTo(this.model, "sync change", this.render);
    this.errors = [];
  },

  render:function() {
    var content = this.template({ user: this.model, errors: this.errors });
    this.$el.html(content);

    return this;
  },

  submitUser: function(event) {
    event.preventDefault();
    
    formData = $(event.currentTarget).serializeJSON();

    this.model.save(formData.user, {
      success: function(user) {
        IWillCookThat.currentUser.fetch();
        this.errors =[];
        this.callback(this);
      }.bind(this),
      error: function(model,response, options) {
        var re = /(\[|\]|}|\{)/gi;
        this.errors = response.responseText.replace(re, "").split(",");
        this.render()
      }.bind(this)

    })
  },

  closeForm: function(event) {
    event.preventDefault();
    this.callback(this);
  }
});
