window.IWillCookThat = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {

    this.currentUser = new IWillCookThat.Models.CurrentUser();
    this.currentUser.fetch();

    this.header = new IWillCookThat.Views.Header({ el: '.header'});
    var $rootEl = $('div.main-content');
    new IWillCookThat.Routers.Router({$rootEl:$rootEl})
    Backbone.history.start();
  }
};

$(document).ready(function(){
  IWillCookThat.initialize();
});
