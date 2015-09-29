# I-will-cook-that
![ScreenShot] (screenshot.png)
[link to site]( http://www.iwillcookthat.com)

Iwillcookthat is a recipe discovery site that lets users search, review, and save recipes. It is a single page web app built on Ruby on Rails with Backbone.js to handle the front end. This project was intended as a demonstration of my web development skills. The core record types are [recipes](/app/models/recipe.rb), [reviews](/app/models/review.rb), and [folders](/app/models/folder.rb) where users can save recipes.  When a user saves a folder to a recipe, a [folderRecipe object](/app/models/folder_recipe.rb) is created linking the user's folder with the saved recipe.  When users log in, all their saved folders, linked folderRecipes and folders, as well as authored reviews and recipes are loaded into Backbone collections so that no additional server calls are necessary as the users navigate within their saved recipes and past activity.

When a recipe is retrieved from the database the associated reviews and review metadata such as average rating are displayed.  Using an [override to the parse method](/app/assets/javascripts/models/recipe.js) the reviews are stored in a review collection.  The [recipe show view] (/app/assets/javascripts/views/recipes/recipe_show.js) listens to changes in the collection and recalculates review metadata immediately, ensuring that it reflects changes the user has made. Similar listeners listening to changes in the users saved recipe collection ensure that the [saved recipe view] (/app/assets/javascripts/views/users/user_saved_recipes.js) is up-to-date as users create, delete and rename their folders.


##Tools  & Gems Used
* jQuery
* underscore
* paperclip/AWS
* figaro
* facebook-omniauth
* pg-search
* jbuilder
* bcrypt

### Bonus Features to be added
- [ ] Pagination of search results
- [ ] Confirmation email upon sign-up
- [ ] Recommendations based on saved and reviewed recipes
- [ ] Google account authentication
- [ ] Google/Facebook sharing
- [ ] Multiple concurrent sessions
