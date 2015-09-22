window.IWillCookThat = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $rootEl = $('div.main-content');
    this.currentUser = new IWillCookThat.Models.CurrentUser();
    debugger
    var router = new IWillCookThat.Routers.Router({$rootEl:$rootEl})
    this.header = new IWillCookThat.Views.Header({
      el: '.header', router: router
    });
    this.currentUser.fetch({
      success: function() {
        debugger
        router.dataFetch();
      }
    });


    Backbone.history.start();
  }
};

$(document).ready(function(){
  IWillCookThat.initialize();
});
