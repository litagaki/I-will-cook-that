IWillCookThat.Collections.Tags = Backbone.Collection.extend({

  model: IWillCookThat.Models.Tag,

  url: '/api/tags',

  getOrFetch: function(id) {
    var tags = this;
    var tag = tags.get(id);

    if (tag){
      tag.fetch();
    } else {
      tag = new this.model({ id: id })
      tags.add(tag);
      tag.fetch({
        error: function(){
          tags.remove(tag);
        }
      });
    }

    return tag;
  }
});
