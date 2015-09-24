IWillCookThat.Views.RecipePrint = Backbone.CompositeView.extend({
  template: JST['recipes/recipe_print'],

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
    var callback = function() {
      window.print();
    }

    var detailSubview = new IWillCookThat.Views.RecipeDetail({
      model: this.model,
      callback: callback
    });
    this.addSubview("section.recipe-detail",detailSubview);
  },

  render: function() {
    $('header.header').html("");
    var content = this.template({ recipe: this.model });
    this.$el.html(content);
    this.attachSubviews();

    return this;
  },

});
