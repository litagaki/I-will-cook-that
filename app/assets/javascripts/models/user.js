IWillCookThat.Models.User = Backbone.Model.extend({
  urlRoot: '/api/users',

  toJSON: function() {
    return { user: _.clone(this.attributes) };
  }
});

IWillCookThat.Models.CurrentUser = IWillCookThat.Models.User.extend({
  url: '/api/session',

  isSignedIn: function() {
    return !this.isNew();
  },

  signIn: function(options) {
    var user = this;
    var credentials = {
      "user[email]" : options.email,
      "user[password]" : options.password
    };

    $.ajax({
      url: this.url,
      type: "POST",
      data: credentials,
      dataType: "json",
      success: function(data) {
        user.set(data);
        options.success && options.success();
        this.trigger("signIn")
      }.bind(this),
      error: function() {
        options.error && options.error();
      }
    });
  },

  signOut: function(options){
    var user = this;
    $.ajax({
      url: this.url,
      type: "DELETE",
      dataType:"json",
      success: function(data) {
        user.clear();
        options.success && options.success();
        this.trigger("signOut");
      }.bind(this)
    });
  }

});
