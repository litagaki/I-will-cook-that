window.IWillCookThat = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $rootEl = $('div.main-content');
    new IWillCookThat.Routers.Router({$rootEl:$rootEl})
    Backone.history.start();
    alert('Hello from Backbone!');
  }
};

$(document).ready(function(){
  IWillCookThat.initialize();
});
