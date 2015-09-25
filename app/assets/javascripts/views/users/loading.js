IWillCookThat.Views.Loading = Backbone.View.extend({

  template: JST['users/loading'],

  initialize: function(options) {
    this.target = options.target;
    this.router = options.router;
    this.listenTo(IWillCookThat.currentUser, "sync", this.redirect);
    if (IWillCookThat.currentUser.isSignedIn()){
      setTimeout(this.loadTarget.bind(this), 0)
    }
  },

  redirect: function() {
    if (IWillCookThat.currentUser.isSignedIn()) {
      this.loadTarget();
    } else {
      Backbone.history.navigate('',{ trigger: true});
    }
  },

  loadTarget: function() {
    this.router._swapView(this.target)
  },
});
