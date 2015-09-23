# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

users = User.create([
 { username: "Wok&Roll", email: "junk@gmail.com", password_digest: "$2a$10$PT0/.rPMi57FHXIQF4ggDud.SopbAbBUkGs.mO.EUcTpZX0t7aiLe" },
{ username: "PastaKing", email: "pasta@gmail.com", password_digest: "$2a$10$PT0/.rPMi57FHXIQF4ggDud.SopbAbBUkGs.mO.EUcTpZX0t7aiLe" },
{ username: "VeggieMonster", email: "eggplant@gmail.com", password_digest: "$2a$10$PT0/.rPMi57FHXIQF4ggDud.SopbAbBUkGs.mO.EUcTpZX0t7aiLe" },
{ username: "SweetTooth", email: "chocolate@gmail.com", password_digest: "$2a$10$PT0/.rPMi57FHXIQF4ggDud.SopbAbBUkGs.mO.EUcTpZX0t7aiLe" },
{ username: "HomeCook", email: "kitchen@gmail.com", password_digest: "$2a$10$PT0/.rPMi57FHXIQF4ggDud.SopbAbBUkGs.mO.EUcTpZX0t7aiLe" },
{username: "JuliaKid", email: "butter@gmail.com", password_digest: "$2a$10$PT0/.rPMi57FHXIQF4ggDud.SopbAbBUkGs.mO.EUcTpZX0t7aiLe" }
])

recipes = Recipe.create([
  { author_id: 1, title: "Stir-Fry", servings: "4", active_time: "30 min", total_time: "30 min", ingredients: "1 tablespoon canola oil\n1 1⁄2 cups broccoli florets\n1 tablespoon water\n3⁄4 cup julienned carrot\n1 1⁄2 cups snow peas, ends trimmed\n6 fresh shiitake mushrooms, slivered\n1⁄2 cup sliced water chestnuts, drained\n1 clove garlic, minced\n1⁄2 teaspoon minced fresh ginger\n3 tablespoons reduced sodium soy sauce\n3 tablespoons chicken broth\n1 teaspoon cornstarch", instructions: "Heat wok over medium heat and add the oil, increase to medium-high heat.\nAdd the broccoli and water, stir-fry for 1 minute or until broccoli is bright green.\nAdd carrots, snow peas, mushrooms, water chestnuts, garlic and ginger; stir-fry for 1 to 2 minutes or until tender crisp.\nIn small bowl, combine the soy sauce, broth and cornstarch; mix well to dissolve.\nAdd to wok and stir-fry for about 1 minute.\nServe over rice.",photo: File.open(Rails.root.join("db","seed_images","stir_fry.jpeg"))},
  { author_id: 2, title: "Baked Ziti", servings: "10", active_time: "30 min", total_time: "1 hr 10 min", ingredients: "2 tablespoons olive oil\n3 cloves garlic, minced\n1 large onion, diced\n1 pound ground beef\n1 pound Italian sausage\nTwo 14.5-ounce cans tomato sauce or marinara sauce\nOne 28-ounce can whole tomatoes with juice\n2 teaspoons Italian seasoning\n1/2 teaspoon red pepper flakes\nSalt and freshly ground black pepper\n1 pound ziti\n1 1/2 pounds mozzarella, grated\nOne 15-ounce tub whole-milk ricotta\n1/2 cup grated Parmesan\n2 tablespoons chopped fresh parsley, plus more for sprinkling/n2 eggs", instructions: "Heat the olive oil in a pot over medium heat. Add the garlic and onions and saute until starting to soften, 3 to 4 minutes. Add the ground beef and sausage and cook until browned. Drain off almost all of the fat, leaving a bit behind for flavor and moisture. Add the tomato sauce, tomatoes, Italian seasoning, red pepper flakes and some salt and pepper. Stir, bring to a simmer and simmer for 25 to 30 minutes. Remove 3 to 4 cups of the cooked sauce to a bowl to cool down.\nBring a large pot of water to a boil and add some salt. Cook the ziti until not quite al dente.\nPreheat the oven to 375 degrees F.\nIn a bowl, mix 2 cups of the grated mozzarella, the ricotta, Parmesan, parsley, eggs and some salt and pepper. Stir together just a couple of times (do not mix completely).\nDrain the pasta and rinse under cool water to stop the cooking and cool it down. Pour it into the bowl with the cheese mixture and toss to slightly combine (there should still be large lumps). Add the cooled reserved meat sauce and toss to combine.\nAdd half the coated pasta to a large casserole dish or lasagna dish. Spoon half of the remaining sauce over the top, then top with half the remaining mozzarella. Repeat with another layer of the coated pasta and the remaining sauce and mozzarella.\nBake until bubbling, about 20 minutes. Let stand 5 minutes before sprinkling with chopped parsley to serve.",photo: File.open(Rails.root.join("db","seed_images","baked_ziti.jpeg"))},
  { author_id: 3, title: "Falafel", servings: "4", active_time: "1 hour", total_time: "24 hours", ingredients: "1 cup dried chickpeas\n1/2 large onion, roughly chopped (about 1 cup)\n2 tablespoons finely chopped fresh parsley\n2 tablespoons finely chopped fresh cilantro\n1 teaspoon salt\n1/2-1 teaspoon dried hot red pepper\n4 cloves of garlic\n1 teaspoon cumin\n1 teaspoon baking powder\n4-6 tablespoons flour\nSoybean or vegetable oil for frying\nChopped tomato for garnish\nDiced onion for garnish\nDiced green bell pepper for garnish\nTahini\nPita bread", instructions: "1. Put the chickpeas in a large bowl and add enough cold water to cover them by at least 2 inches. Let soak overnight, then drain. Or use canned chickpeas, drained.\n2. Place the drained, uncooked chickpeas and the onions in the bowl of a food processor fitted with a steel blade. Add the parsley, cilantro, salt, hot pepper, garlic, and cumin. Process until blended but not pureed.\n3. Sprinkle in the baking powder and 4 tablespoons of the flour, and pulse. You want to add enough bulgur or flour so that the dough forms a small ball and no longer sticks to your hands. Turn into a bowl and refrigerate, covered, for several hours.\n4. Form the chickpea mixture into balls about the size of walnuts, or use a falafel scoop, available in Middle-Eastern markets.\n5. Heat 3 inches of oil to 375 degrees in a deep pot or wok and fry 1 ball to test. If it falls apart, add a little flour. Then fry about 6 balls at once for a few minutes on each side, or until golden brown. Drain on paper towels. Stuff half a pita with falafel balls, chopped tomatoes, onion, green pepper, and pickled turnips. Drizzle with tahina thinned with water.", photo: File.open(Rails.root.join("db","seed_images","falafel.jpeg"))},
  { author_id: 5, title: "Lasagna", servings: "12", active_time: "30 min", total_time: "3 hours", ingredients: "1 pound sweet Italian sausage\n 3/4 pound lean ground beef\n 1/2 cup minced onion\n 2 cloves garlic\n crushed 1 (28 ounce) can crushed tomatoes\n 2 (6 ounce) cans tomato paste\n 2 (6.5 ounce) cans canned tomato sauce\n 1/2 cup water\n 2 tablespoons white sugar\n 1 1/2 teaspoons dried basil leaves\n 1/2 teaspoon fennel seeds\n 1 teaspoon Italian seasoning\n 1 tablespoon salt\n 1/4 teaspoon ground black pepper\n 4 tablespoons chopped fresh parsley\n 12 lasagna noodles\n 16 ounces ricotta cheese\n 1 egg\n1/2 teaspoon salt\n 3/4 pound mozzarella cheese, sliced\n 3/4 cup grated Parmesan cheesee", instructions: "In a Dutch oven, cook sausage, ground beef, onion, and garlic over medium heat until well browned. Stir in crushed tomatoes, tomato paste, tomato sauce, and water. Season with sugar, basil, fennel seeds, Italian seasoning, 1 tablespoon salt, pepper, and 2 tablespoons parsley. Simmer, covered, for about 1 1/2 hours, stirring occasionally.\nBring a large pot of lightly salted water to a boil. Cook lasagna noodles in boiling water for 8 to 10 minutes. Drain noodles, and rinse with cold water. In a mixing bowl, combine ricotta cheese with egg, remaining parsley, and 1/2 teaspoon salt.\nPreheat oven to 375 degrees F (190 degrees C).\nTo assemble, spread 1 1/2 cups of meat sauce in the bottom of a 9x13 inch baking dish. Arrange 6 noodles lengthwise over meat sauce. Spread with one half of the ricotta cheese mixture. Top with a third of mozzarella cheese slices. Spoon 1 1/2 cups meat sauce over mozzarella, and sprinkle with 1/4 cup Parmesan cheese. Repeat layers, and top with remaining mozzarella and Parmesan cheese. Cover with foil: to prevent sticking, either spray foil with cooking spray, or make sure the foil does not touch the cheese.\nBake in preheated oven for 25 minutes. Remove foil, and bake an additional 25 minutes. Cool for 15 minutes before serving.", photo: File.open(Rails.root.join("db","seed_images","lasagna.jpg"))},
  { author_id: 6, title: "Coq A Vin", description: "An approachable take on a classic French dish",servings: "4", active_time: "45 min", total_time: "45 min", ingredients: "4 bacon slices, coarsely chopped\n4 skinless boneless chicken breast halves\n3 tablespoons chopped fresh Italian parsley, divided\n8 ounces large crimini (baby bella) mushrooms, halved\n8 large shallots, peeled, halved through root end\n2 garlic cloves, pressed\n1 1/2 cups dry red wine (such as Syrah)\n1 1/2 cups low-salt chicken broth, divided\n4 teaspoons all purpose flour", instructions: "Preheat oven to 300°F. Sauté bacon in large nonstick skillet over medium-high heat until crisp. Using slotted spoon, transfer to bowl.\nSprinkle chicken with salt, pepper, and 1 tablespoon parsley. Add to drippings in skillet. Sauté until cooked through, about 6 minutes per side; transfer to pie dish (reserve skillet). Place in oven to keep warm.\nAdd mushrooms and shallots to skillet; sprinkle lightly with salt and pepper. Sauté until brown, about 4 minutes. Add garlic; toss 10 seconds. Add wine, 1 1/4 cups broth, bacon, and 1 tablespoon parsley. Bring to boil, stirring occasionally. Boil 10 minutes.\nMeanwhile, place flour in small cup. Add 1/4 cup broth, stirring until smooth.\nAdd flour mixture to sauce. Cook until sauce thickens, 3 to 4 minutes. Season sauce to taste with salt and pepper.\nArrange chicken on platter; stir juices from pie dish into sauce and spoon over chicken. Sprinkle with 1 tablespoon parsley.", photo: File.open(Rails.root.join("db","seed_images","coq_a_vin.jpeg"))},
  { author_id: 5, title: "Rice Pudding", description: "a classic comfort food", servings: "4", active_time: "25 min", total_time: "45 min", ingredients: "3/4 cup uncooked white rice\n 2 cups milk, divided\n1/3 cup sugar\n1/4 tsp salt\n1 egg, beaten\n2/3 cup golden raisins\n1 Tb butter\n1 tsp vanilla extract", instructions: "Bring 1 1/2 cups water to a boil in a saucepan; stir rice into boiling water. Reduce heat to low, cover, and simmer for 20 minutes.\nIn a clean saucepan, combine 1 1/2 cups cooked rice, 1 1/2 cups milk, sugar and salt. Cook over medium heat until thick and creamy, 15 to 20 minutes. Stir in remaining 1/2 cup milk, beaten egg, and raisins; cook 2 minutes more, stirring constantly. Remove from heat and stir in butter and vanilla.", photo: File.open(Rails.root.join("db","seed_images","rice_pudding.jpeg"))},
  { author_id: 4, title: "Chocolate Cake", servings: "12", active_time: "40 min", total_time: "45 min", ingredients: "2 cups all-purpose flour\n2 cups sugar\n¾ cup unsweetened cocoa powder\n2 teaspoons baking powder\n1½ teaspoons baking soda\n1 teaspoon salt\n1 teaspoon espresso powder\n1 cup milk\n½ cup vegetable oil\n2 eggs\n2 teaspoons vanilla extract\n1 cup boiling water", instructions: "Preheat oven to 350º F. Prepare two 9-inch cake pans by spraying with baking spray or buttering and lightly flouring.\nAdd flour, sugar, cocoa, baking powder, baking soda, salt and espresso powder to a large bowl or the bowl of a stand mixer. Whisk through to combine or, using your paddle attachment, stir through flour mixture until combined well.\nAdd milk, vegetable oil, eggs, and vanilla to flour mixture and mix together on medium speed until well combined. Reduce speed and carefully add boiling water to the cake batter. Beat on high speed for about 1 minute to add air to the batter.\nDistribute cake batter evenly between the two prepared cake pans. Bake for 30-35 minutes, until a toothpick or cake tester inserted in the center comes out clean.\nRemove from the oven and allow to cool for about 10 minutes, remove from the pan and cool completely.\nFrost cake with Chocolate Buttercream Frosting.", photo: File.open(Rails.root.join("db","seed_images","chocolate_cake.jpeg"))},

  ])

reviews = Review.create([
  {author_id: 1, recipe_id: 2, rating: 4, cook_again: true, body: "Very tasty"},
  {author_id: 1, recipe_id: 3, rating: 3, cook_again: true, body: "Pretty authentic, though not something I'd bother to make regularly"},
  {author_id: 2, recipe_id: 1, rating: 4, cook_again: true, body: "This is super easy and works well with whatever veggies you have around"},
  {author_id: 2, recipe_id: 3, rating: 2, cook_again: false, body: "Don't try the canned chickpea substitution--your falafel won't hold together. On the whole, this was a lot of work."},
  {author_id: 3, recipe_id: 1, rating: 4, cook_again: true, body: "A great way to enjoy vegetables"},
  {author_id: 3, recipe_id: 2, rating: 4, cook_again: true, body: "This is a great make-ahead casserole"},
  {author_id: 3, recipe_id: 4, rating: 4, cook_again: true, body: "I made it without the sausage and felt that it worked quite well"},
  {author_id: 1, recipe_id: 7, rating: 4, cook_again: true, body: "what a hit!"},
  {author_id: 2, recipe_id: 7, rating: 4, cook_again: true, body: "my new favorite birthday cake"},
  {author_id: 3, recipe_id: 7, rating: 4, cook_again: true, body: "scrumptious!"},
  {author_id: 5, recipe_id: 7, rating: 4, cook_again: true, body: "I made this with a raspberry filling between layers and it disappeared very quickly."},
  {author_id: 6, recipe_id: 7, rating: 3, cook_again: false, body: "a bit on the dry side"},
  {author_id: 1, recipe_id: 6, rating: 3, cook_again: true, body: "I had to cook it a bit longer than mentioned to get the rice thoroughly soft.  I'd cut the sugar next time."}
  ])

folders = Folder.create([
  {owner_id: 1, title: "Favorites"},  #1
  {owner_id: 1, title: "Desserts"},  #2
  {owner_id: 1, title: "Mediterranean"},  #3
  {owner_id: 1, title: "Kid-Friendly"},  #4
  {owner_id: 2, title: "Favorites"},  #5
  {owner_id: 3, title: "Favorites"},  #6
  {owner_id: 3, title: "Asian"},  #7
  {owner_id: 3, title: "Appetizers"},  #8
  {owner_id: 4, title: "Favorites"},  #9
  {owner_id: 5, title: "Favorites"},  #10
  {owner_id: 5, title: "Easy Weeknight"},  #11
  {owner_id: 6, title: "Favorites"} #12
  ])

  folderRecipes = FolderRecipe.create([
    {folder_id:1, recipe_id: 1},
    {folder_id:2, recipe_id: 6},
    {folder_id:2, recipe_id: 7},
    {folder_id:3, recipe_id: 3},
    {folder_id:4, recipe_id: 2},
    {folder_id:4, recipe_id: 4}
    ])

  tags = Tag.create([
    {label: "African", category: 0},
    {label: "American", category: 0},
    {label: "Asian", category: 0},
    {label: "Cajun", category: 0},
    {label: "Chinese", category: 0},
    {label: "French", category: 0},
    {label: "Fusion", category: 0},
    {label: "Indian", category: 0},
    {label: "Italian", category: 0},
    {label: "Japanese", category: 0},
    {label: "Jewish", category: 0},
    {label: "Latin American", category: 0},
    {label: "Mediterranean", category: 0},
    {label: "Mexican", category: 0},
    {label: "Middle Eastern", category: 0},
    {label: "Russian", category: 0},
    {label: "Spanish", category: 0},
    {label: "Southwestern", category: 0},
    {label: "Appetizer", category: 1},
    {label: "Breakfast", category: 1},
    {label: "Dessert", category: 1},
    {label: "Main", category: 1},
    {label: "Salad", category: 1},
    {label: "Side", category: 1},
    {label: "Snack", category: 1},
    {label: "Soup", category: 1},
    {label: "Gluten-Free", category: 3},
    {label: "Kosher", category: 3},
    {label: "Low-Carb", category: 3},
    {label: "Low-Fat", category: 3},
    {label: "Low-Sugar", category: 3},
    {label: "Vegan", category: 3},
    {label: "Vegetarian", category: 3},
    {label: "Kid-Friendly", category: 5},
    {label: "Quick & Easy", category: 5},
    {label: "Entertaining", category: 5},

    ])
