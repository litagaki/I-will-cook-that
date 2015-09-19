IWillCookThat.Collections.Folders = Backbone.Collection.extend({
  url: '/api/folders',

  model: IWillCookThat.Models.Folder,

  comparator: function(a){
    return a.get('title').toUpperCase();
  },

  getOrFetch: function(id) {
    var folders = this;
    var folder = folders.get(id);

    if (folder){
      folder.fetch();
    } else {
      folder = new this.model({ id: id })
      folders.add(folder);
      folder.fetch({
        error: function(){
          folders.remove(folder);
        }
      });
    }

    return folder;
  }

});
