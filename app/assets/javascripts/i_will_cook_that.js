window.IWillCookThat = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    debugger
    var $rootEl = $('div.main-content');
    this.currentUser = new IWillCookThat.Models.CurrentUser();
    var router = new IWillCookThat.Routers.Router({$rootEl:$rootEl})
    this.header = new IWillCookThat.Views.Header({
      el: '.header', router: router
    });
    this.currentUser.fetch({
      success: function() {
        if (IWillCookThat.currentUser.isSignedIn()) {
          router.dataFetch();
        }
      }
    });

    Backbone.history.start();
  }
};

$(document).ready(function(){
  IWillCookThat.initialize();
});
