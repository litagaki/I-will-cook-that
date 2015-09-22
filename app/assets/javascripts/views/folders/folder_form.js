IWillCookThat.Views.FolderForm = Backbone.View.extend({
  template: JST['folders/folder_form'],

  events:{
    "submit form" :"submitFolder",
    "click button.delete-folder" :"deleteFolder",
    "click button.cancel" :"closeForm"
  },

  initialize: function(options) {
    this.listenTo(this.model,"sync",this.render);
    this.callback = options.callback;
    this.errors = [];
  },

  render: function(){
    var content = this.template({ folder: this.model, errors: this.errors });
    this.$el.html(content);

    return this;
  },

  submitFolder: function(event) {
    event.preventDefault();
    var folder = this.model;
    var formData = this.$(event.currentTarget).serializeJSON();
    var folders = this.collection;

    this.model.save(formData.folder, {
      success: function(folder) {
        this.callback(this);
        this.errors= [];

        folders.add(folder, { merge:true });
        (this.$('form'))[0].reset();
        this.model = new IWillCookThat.Models.Folder();
        $('.add-folder-insert').removeClass("active");
      }.bind(this),
      error: function(model, response) {
        var re = /(\[|\])/gi;
        this.errors = response.responseText.replace(re, "").split(",");
        this.render();
      }.bind(this)
    });
  },

  deleteFolder: function(event) {
    event.preventDefault();
    var folder = this.model;
    var folders = this.collection;
    this.model.destroy({
      success: function(folder) {
        folders.remove(folder);
      }
    });
  },

  closeForm: function(event) {
    event.preventDefault();
    var $div = $(event.currentTarget).parent().parent().parent().parent();
    $div.removeClass("active");
    this.callback(this);
  }

})
