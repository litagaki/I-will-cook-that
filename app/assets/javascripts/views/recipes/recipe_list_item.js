IWillCookThat.Views.RecipeListItem = Backbone.CompositeView.extend({

  template: JST['recipes/recipe_list_item'],

  tagName: 'li',

  className: 'recipe-item group',

  events: {
    "click button.save-recipe":"addSaveSubview",
    "click button.cancel":"removeSaveForm"
  },

  initialize: function(options){
    this.folders = options.folders;
    this.listenTo(this.model, "sync", this.render);
  },

  render: function(){
    var content = this.template({ recipe: this.model });
    this.$el.html(content);
    this.attachSubviews();

    return this;
  },

  addSaveSubview: function() {
    //already rendered form
    if (this.subviews('div.add-to-folder').size() !== 0) {
      return;
    }

    var newFolderRecipe = new IWillCookThat.Models.FolderRecipe({
      recipe_id: this.model.id
    });
    this.assignFolderSubView = new IWillCookThat.Views.AssignFolder({
      recipe: this.model,
      collection: this.folders,
      model: newFolderRecipe,
      callback: this.removeSubview.bind(this, 'div.add-to-folder')
    });
    this.addSubview("div.add-to-folder",this.assignFolderSubView);
  },

  removeSaveForm: function(event) {
    event.preventDefault();
    this.removeSubview('div-add-to-folder',this.assignFolderSubView);
  }
});
