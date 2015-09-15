IWillCookThat.Views.RecipeShow = Backbone.CompositeView.extend({

  template: JST['recipes/recipe_show'],

  tagName: 'article',

  initialize: function(){
    this.listenTo(this.model, "sync", this.render);
    var detailSubview = new IWillCookThat.Views.RecipeDetail({
      model: this.model
    });
    this.addSubview("section.recipe-detail",detailSubview);
  },

  render: function() {
    var content = this.template({ recipe: this.model });
    this.$el.html(content);
    this.attachSubviews();

    return this;
  }
});
