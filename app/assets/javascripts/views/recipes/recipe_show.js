IWillCookThat.Views.RecipeShow = Backbone.CompositeView.extend({

  template: JST['recipes/recipe_show'],

  tagName: 'article',

  events:{
    "click .recipe-nav li":"toggleTab",
    "click li.save-recipe":"saveRecipe",
    "click button.cancel":"closeSaveForm"
  },

  initialize: function(options){
    this.activeSection = 'recipe-detail';
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.reviews(),"add", this.addReviewSubview);
    this.folders = options.folders;

    var detailSubview = new IWillCookThat.Views.RecipeDetail({
      model: this.model
    });
    this.addSubview("section.recipe-detail",detailSubview);

    var newReview = new IWillCookThat.Models.Review();
    var formSubview = new IWillCookThat.Views.ReviewForm({
      recipe: this.model,
      model: newReview
    });
    this.addSubview("div.review-form",formSubview);

    this.model.reviews().each(function(review){
      this.addReviewSubview(review);
    }.bind(this))
  },

  render: function() {
    debugger
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
  },

  saveRecipe: function() {
    //already rendered form
    if (this.subviews('div.add-to-folder').size() !== 0) {
      return;
    }

    var newFolderRecipe = new IWillCookThat.Models.FolderRecipe({
      recipe_id: this.model.id
    })
    this.assignFolderSubView = new IWillCookThat.Views.AssignFolder({
      recipe: this.model,
      collection: this.folders,
      model: newFolderRecipe,
      callback: this.removeSubview.bind(this, 'div.add-to-folder')
    });
    this.addSubview("div.add-to-folder",this.assignFolderSubView);
  },

  closeSaveForm: function(event) {
    event.preventDefault();
    this.removeSubview('div.add-to-folder',this.assignFolderSubView);
  }

});
