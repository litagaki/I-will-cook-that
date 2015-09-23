IWillCookThat.Models.Tagging = Backbone.Model.extend({
  urlRoot: function() {
    '/api/tags/' + this.escape("tag_id") + "/taggings"
  },

  toJSON: function() {
    return { tagging: _.clone(this.attributes) };
  }


});
