IWillCookThat.Views.Header = Backbone.CompositeView.extend({

  template: JST['shared/header'],

  events: {
    "click button.log-out": "signOut",
    "click button.log-in": "addLogInForm",
    "click button.sign-up":"addSignUpForm",
    "submit form.header-search":"search"
  },

  initialize: function(options) {
    this.router = options.router;
    this.listenTo(IWillCookThat.currentUser, "sync", this.render);
    this.listenTo(IWillCookThat.currentUser, "signIn signOut", this.render);
    this.render();
  },

  render: function() {
    var content = this.template({ currentUser: IWillCookThat.currentUser });
    this.$el.html(content);
    this.attachSubviews();

    return this;
  },

  signOut: function() {
    IWillCookThat.currentUser.signOut({});
    this.router.newCollections();
    Backbone.history.navigate("", {trigger:true});
  },

  addLogInForm: function() {

    this.logInForm = new IWillCookThat.Views.SignIn({
      model: IWillCookThat.currentUser,
      submitCallback: function(subview) {
        this.removeSubview('div.insert-modal',subview);
        this.router.dataFetch();
      }.bind(this),
      closeCallback: function(subview) {
        this.removeSubview('div.insert-modal',subview);
      }.bind(this)
    });
    this.addSubview("div.insert-modal",this.logInForm);
    this.render();
  },

  addSignUpForm: function() {
    var newUser = new IWillCookThat.Models.User();
    this.signInForm = new IWillCookThat.Views.SignUp({
      model: newUser,
      callback: this.removeSubview.bind(this, 'div.insert-modal')
    });
    this.addSubview("div.insert-modal", this.signInForm);
    this.render();
  },

  search: function() {
    
  },
});
