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
  },

  render: function(){
    var content = this.template({ folder: this.model });
    this.$el.html(content);

    return this;
  },

  submitFolder: function(event) {
    event.preventDefault();
    debugger
    var folder = this.model;
    var formData = this.$el.serializeJSON();
    var folders = this.collection;
    this.model.save(formData.folder, {
      success: function(folder) {
        this.callback(this);
        folders.add(folder, { merge:true });
        (this.$el)[0].reset();
        this.model = new IWillCookThat.Models.Folder();
        $('.add-folder-insert').removeClass("active");
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
    var $div = $(event.currentTarget).parent().parent().parent();
    $div.removeClass("active");
    this.callback(this);
  }

})
