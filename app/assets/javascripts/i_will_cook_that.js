window.IWillCookThat = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {

    this.currentUser = new IWillCookThat.Models.CurrentUser();
    this.currentUser.fetch();

    var $rootEl = $('div.main-content');
    var router = new IWillCookThat.Routers.Router({$rootEl:$rootEl})
    this.header = new IWillCookThat.Views.Header({
      el: '.header', router: router
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  IWillCookThat.initialize();
});
