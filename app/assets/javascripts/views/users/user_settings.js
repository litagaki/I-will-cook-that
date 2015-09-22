IWillCookThat.Views.Settings = Backbone.View.extend({
  template:  JST['users/user_settings'],

  initialize: function(options){
    this.model = new IWillCookThat.Models.User();
    this.errors = [];
  },

  className: "user-settings",

  events: {
    "click button": "updateUser"
  },

  initialize: function() {
    this.listenTo(IWillCookThat.currentUser, "change", this.render);
  },

  render: function() {
    var content = this.template({
      user: IWillCookThat.currentUser,
      errors: this.errors
    });
    this.$el.html(content);

    return this;
  },

  updateUser: function(event) {
    event.preventDefault();
    var $form = $(event.currentTarget).parent();
    var formData = $form.serializeJSON();
    formData.user.id = IWillCookThat.currentUser.id
    debugger
    this.model.save(formData.user, {
      success: function() {
        this.errors = [];
        this.$('ul.error').html("");
        IWillCookThat.currentUser.fetch();
      },
      error: function(model,response, options) {
        debugger
        var re = /(\[|\]|}|\{)/gi;
        this.errors = response.responseText.replace(re, "").split(",");
        this.render()
      }.bind(this)
    });
  },

});
