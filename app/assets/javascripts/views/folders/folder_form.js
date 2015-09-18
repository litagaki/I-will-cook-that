IWillCookThat.Views.FolderForm = Backbone.View.extend({
  template: JST['folders/folder_form'],

  tagName: 'form',

  className: 'folder-form',

  events:{
    "click button.submit-folder" :"submitFolder"
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
  }

})
