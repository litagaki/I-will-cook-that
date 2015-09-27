IWillCookThat.Views.RecipeIndex = Backbone.CompositeView.extend({
  template: JST['recipes/recipe_index'],

  events: {
    'click [type="checkbox"]': 'checkboxFilter'
  },

  initialize: function(options){
    this.folderRecipes = options.folderRecipes;
    this.folders = options.folders;

    this.listenTo(this.collection, "add", this.addRecipeSubview);
    this.listenTo(this.collection, "reset", this.removeSubviews)
    this.listenTo(this.collection, "sync", function() {
      this.populateFilterLists();
      this.render();
    }.bind(this));

    _(this.collection.each(function(recipe){
        this.addRecipeSubview(recipe);
      }.bind(this)));
  },

  populateFilterLists: function() {
    this.includedCuisines = _.clone(IWillCookThat.cuisines);
    this.includedCourses = _.clone(IWillCookThat.courses);
    this.includedDiets = _.clone(IWillCookThat.diets);
    this.includedGeneral = _.clone(IWillCookThat.general_tags);
  },

  render: function() {
    var $input;
    this.$el.html(this.template({recipes: this.collection }));
    this.attachSubviews();
    for (var key in this.includedCuisines) {
      $input = this.$('input#' + key);
      $input.prop("checked", true);
    }

    for (var key in this.includedCourses) {
      $input = this.$('input#' + key);
      $input.prop("checked", true);
    }

    for (var key in this.includedDiets) {
      $input = this.$('input#' + key);
      $input.prop("checked", true);
    }

    for (var key in this.includedGeneral) {
      $input = this.$('input#' + key);
      $input.prop("checked", true);
    }
    return this;
  },

  addRecipeSubview: function(recipe) {
    var recipeListView = new IWillCookThat.Views.RecipeListItem({
      model: recipe,
      folders: this.folders,
      folderRecipes: this.folderRecipes
    });
    this.addSubview("ul.my-recipe-index-item",recipeListView);
  },

  removeSubviews: function() {
    var count = this.subviews('ul.my-recipe-index-item')._wrapped.length;

    this.subviews('ul.my-recipe-index-item').each(function(subview){
      subview.remove();
    });
    this.subviews("ul.my-recipe-index-item").splice(0,count);
  },

  checkboxFilter: function(event) {
    event.preventDefault();
    var $input = $(event.currentTarget);
    var filterProp = $input.attr("name");
    var filterValue = $input.val();
    if ($input.prop("checked")) {

      switch(filterProp) {
        case "cuisine":
          this.includedCuisines[filterValue] =
            IWillCookThat.cuisines[filterValue];
          break;
        case "diet":
          this.includedDiets[filterValue] = IWillCookThat.diets[filterValue];
          break;
        case "general":
          this.includedGeneral[filterValue] =
            IWillCookThat.general_tags[filterValue];
          break;
        case "course":
          this.includedCourses[filterValue] =
            IWillCookThat.courses[filterValue];
          break;
      }

      _(this.collection.each(function(recipe){
         if (recipe.get(filterProp) === filterValue ) {
           this.addRecipeSubview(recipe);
           this.render();
         }
        }.bind(this)));
    } else {
      switch(filterProp) {
        case "cuisine":
          delete this.includedCuisines[filterValue];
          break;
        case "diet":
          delete this.includedDiets[filterValue];
          break;
        case "general":
          delete this.includedGeneral[filterValue];
          break;
        case "course":
          delete this.includedCourses[filterValue];
          break;
      }

      debugger
      _(this.collection.each(function(recipe){
         if (recipe.get(filterProp) === filterValue ) {
           this.removeModelSubview("ul.my-recipe-index-item",recipe);
           this.render();
         }
        }.bind(this)));
    }
    debugger
  }
});
