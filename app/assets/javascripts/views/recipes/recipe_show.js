IWillCookThat.Views.RecipeShow = Backbone.CompositeView.extend({

  template: JST['recipes/recipe_show'],

  tagName: 'article',

  events:{
    "click .recipe-nav li":"toggleTab"
  },

  initialize: function(){
    this.activeSection = 'recipe-detail';
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.reviews(),"add", this.addReviewSubview)
    var detailSubview = new IWillCookThat.Views.RecipeDetail({
      model: this.model
    });
    this.addSubview("section.recipe-detail",detailSubview);
    this.model.reviews().each(function(review){
      this.addReviewSubview(review)
    }.bind(this))
  },

  render: function() {
    var content = this.template({ recipe: this.model });
    this.$el.html(content);
    this.attachSubviews();

    return this;
  },

  toggleTab: function(event) {
    var targetSelector = $(event.currentTarget).attr("data-section");
    if (targetSelector !== this.activeSection) {
      $(event.currentTarget).parent().children().toggleClass("active");
      $('section.recipe-detail, section.recipe-reviews').toggleClass("active");
      this.activeSection = targetSelector;
    }
  },

  addReviewSubview: function(review){
    var reviewSubview = new IWillCookThat.Views.ReviewView({model: review});
    this.addSubview("ul.review-list",reviewSubview)
  }
});
