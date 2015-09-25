IWillCookThat.Views.RecipeShow = Backbone.CompositeView.extend({

  template: JST['recipes/recipe_show'],

  tagName: 'article',

  events:{
    "click .recipe-nav li":"toggleTab",
    "click li.save-recipe":"saveRecipe",
    "click button.cancel":"closeSaveForm",
    "click li.print-recipe":"print"
  },

  initialize: function(options){
    this.folders = options.folders;
    this.folderRecipes = options.folderRecipes;
    this.activeSection = 'recipe-detail';
    this.listenTo(this.model, "sync", function() {
      if (!this.formSubview) {
        this.addFormSubview();
      }
      this.render();
    });
    this.errors = [];
    this.listenTo(this.model.reviews(),"add", function(review) {
      this._recalculateReviewAverages();
      this.addReviewSubview(review);
    });
    this.listenTo(this.model.reviews(),"remove change:rating change:cook_again", function() {
      this._recalculateReviewAverages();
      this.render();
    });

    this.listenTo(this.model.folders(), "add remove", this.render);
    this.listenTo(IWillCookThat.currentUser, "sync", function() {
      if (!this.formSubview) {
        this.addFormSubview();
        this.render();
      }
    });

    var detailSubview = new IWillCookThat.Views.RecipeDetail({
      model: this.model
    });
    this.addSubview("section.recipe-detail",detailSubview);

    this.model.reviews().each(function(review){
      this.addReviewSubview(review);
    }.bind(this))
  },

  render: function() {
    var content = this.template({ recipe: this.model, errors: this.errors });
    this.$el.html(content);
    this.$('li[data-section="' + this.activeSection +'"]').addClass("active");
    this.$('section.' + this.activeSection).addClass("active");

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

  addFormSubview: function() {
    if (this.formSubview || !IWillCookThat.currentUser.isSignedIn() ||
      IWillCookThat.currentUser.id === this.model.get("author_id")) {
      return;
    }
    var newReview = new IWillCookThat.Models.Review();
    this.formSubview = new IWillCookThat.Views.ReviewForm({
      recipe: this.model,
      model: newReview
    });
    this.addSubview("div.review-form",this.formSubview);
  },

  addReviewSubview: function(review){
    var reviewSubview = new IWillCookThat.Views.ReviewView({
      model: review,
      recipe: this.model,
      deleteCallback: function(subview) {
        this.removeSubview('ul.review-list',subview);
        this.render();
      }.bind(this)
    });
    this.addSubview("ul.review-list",reviewSubview)
    this.render();
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
      folderRecipes: this.folderRecipes,
      callback: this.removeSubview.bind(this, 'div.add-to-folder')
    });
    this.addSubview("div.add-to-folder",this.assignFolderSubView);
  },

  print: function() {
    Backbone.history.navigate("recipes/" + this.model.id + "/print", { trigger: true })
  },

  closeSaveForm: function(event) {
    event.preventDefault();
    this.removeSubview('div.add-to-folder',this.assignFolderSubView);
  },

  _recalculateReviewAverages: function() {
    var average, percentage, metadata
    var reviewCount = this.model.reviews().length
    var pointsTotal = 0;
    var yesTotal = 0;
    this.model.reviews().each( function(review) {
      pointsTotal += review.get("rating");
      if (review.get("cook_again")) {
        yesTotal += 1;
      }
    });
    
    if (reviewCount) {
      average = Math.round(pointsTotal / reviewCount * 10) / 10;
      percentage = Math.round(yesTotal / reviewCount * 100)
    } else {
      average = ""
      percentage = ""
    }

    var metadata = { rating_average: average, percentage: percentage }
    this.model.set(metadata);
  }

});
