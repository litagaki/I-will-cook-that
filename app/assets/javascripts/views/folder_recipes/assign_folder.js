IWillCookThat.Views.AssignFolder = Backbone.View.extend({
  template: JST['folder_recipes/folder_assign'],

  tagName: 'form',

  className: 'folder-recipe-form',

  events: {
    "click button.folder-recipe-submit":"saveToFolders"
  },

  initialize: function(options) {
    this.recipe = options.recipe;
    this.callback = options.callback;
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function(){
    var content = this.template({ folders: this.collection });
    this.$el.html(content);

    return this;
  },

  saveToFolders: function(event) {
    event.preventDefault();


  }
});
