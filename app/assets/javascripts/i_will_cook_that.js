window.IWillCookThat = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $rootEl = $('div.main-content');
    new IWillCookThat.Routers.Router({$rootEl:$rootEl})
    Backbone.history.start();
  }
};

$(document).ready(function(){
  IWillCookThat.initialize();
});
