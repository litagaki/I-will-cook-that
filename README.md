# I-will-cook-that

[Heroku link][heroku]

[heroku]: http://iwillcookthat.herokuapp.com

## Minimum Viable Product
I-will-cook-that is a clone of Epicurious built on Rails and Backbone. Users can:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [x] Create accounts
- [x] Create sessions (log in)
- [x] Create recipes
- [ ] Create reviews of recipes
- [ ] Create collections of recipes
- [x] View recipes
- [ ] View reviews associated with recipes
- [ ] View recipe collections
- [ ] Add tags to recipes
- [ ] search recipes by keyword/tag
- [ ] View own reviews


## Design Docs
* [DB schema][schema]

[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Recipe Creation (~1 day)
I will implement user authentication in Rails based on the practices learned at
App Academy. By the end of this phase, users will be able to create recipes and reviews using
simple text forms in a Rails view. The most important part of this phase will
be pushing the app to Heroku and ensuring that everything works before moving on
to phase 2.

[Details][phase-one]

### Phase 2: Viewing Recipes, Reviews and Folders (~3 days)
I will add API routes to serve recipe, review, and folder data as JSON, then add Backbone
models and collections that fetch data from those routes. By the end of this
phase, users will be able to create recipes, folders, and reviews and view them
inside a single Backbone app.

[Details][phase-two]

### Phase 3: Tagging Recipes (~ 1 day)
  I will add API routes to serve tag data to JSON, then add
  Backbone models and collections that fetch data from those routes. When a user submits a recipe, the title will automatically be parsed and each word added as a keyword tag.  Users will be able to manually add non-keyword tags from a standard list at the time of recipe submission.

[Details][phase-three]

### Phase 4: Images and Profile (~1-2 days)
 I plan to integrate Paperclip for file upload so
users can add images to recipes. I will also add a user profile view where users can update their settings and view their activity.

[Details][phase-four]

### Phase 5: Searching for Recipes (~1-2 days)
I'll add a `search` route to the Recipes controller that will find recipes by keyword tag.  On the Backbone side there will be a `SearchResults` composite view that includes the pre-existing RecipeItem subview. Results will be sorted by average rating and will be filterable by non-keyword tag.

[Details][phase-five]


### Bonus Features (TBD)
- [ ] Recommendations based on saved and reviewed recipes
- [ ] Pagination/infinite scroll
- [ ] Google account authentication
- [ ] Google/Facebook sharing
- [ ] Multiple sessions/session management
- [ ] Typeahead search bar

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
