# Phase 3: Editing and Displaying Posts

## Rails
### Models
  * Tags
  * Taggings

### Controllers
  API::TagsController (create, show)
  API::TaggingsController (create)

### Views
  * tags/show.json.jbuilder


## Backbone
### Models
 * Tag (parses nested `taggings` association)
 * Tagging (parses nested `recipes` association)
 * Recipe (parses nested `taggings` association)

### Collections
  * Tags
  * Tagging
### Views
  * TagShow( composite view, contains RecipeItem subview)
  * TaggingForm (subview for addition to RecipeForm)
  * FolderRecipeForm (subview for addition to RecipeShow view, lets you save a recipe to a given folder)

## Gems/Libraries
