# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

users = User.create!([
 { username: "DemoUser", email: "junkemail@gmail.com", password_digest: "$2a$10$PT0/.rPMi57FHXIQF4ggDud.SopbAbBUkGs.mO.EUcTpZX0t7aiLe" },
{ username: "PastaKing", email: "pasta@gmail.com", password_digest: "$2a$10$PT0/.rPMi57FHXIQF4ggDud.SopbAbBUkGs.mO.EUcTpZX0t7aiLe" },
{ username: "VeggieMonster", email: "eggplant@gmail.com", password_digest: "$2a$10$PT0/.rPMi57FHXIQF4ggDud.SopbAbBUkGs.mO.EUcTpZX0t7aiLe" },
{ username: "SweetTooth", email: "chocolate@gmail.com", password_digest: "$2a$10$PT0/.rPMi57FHXIQF4ggDud.SopbAbBUkGs.mO.EUcTpZX0t7aiLe" },
{ username: "HomeCook", email: "kitchen@gmail.com", password_digest: "$2a$10$PT0/.rPMi57FHXIQF4ggDud.SopbAbBUkGs.mO.EUcTpZX0t7aiLe" },
{username: "JuliaKid", email: "butter@gmail.com", password_digest: "$2a$10$PT0/.rPMi57FHXIQF4ggDud.SopbAbBUkGs.mO.EUcTpZX0t7aiLe" },
{ username: "Wok&Roll", email: "junk@gmail.com", password_digest: "$2a$10$PT0/.rPMi57FHXIQF4ggDud.SopbAbBUkGs.mO.EUcTpZX0t7aiLe" },
])

recipes = Recipe.create!([
  { author_id: 1, title: "Stir-Fry", course: "Main", diet: "Vegetarian", cuisine: "Chinese", servings: "4", active_time: "30 min", total_time: "30 min", ingredients: "1 tablespoon canola oil\n1 1⁄2 cups broccoli florets\n1 tablespoon water\n3⁄4 cup julienned carrot\n1 1⁄2 cups snow peas, ends trimmed\n6 fresh shiitake mushrooms, slivered\n1⁄2 cup sliced water chestnuts, drained\n1 clove garlic, minced\n1⁄2 teaspoon minced fresh ginger\n3 tablespoons reduced sodium soy sauce\n3 tablespoons chicken broth\n1 teaspoon cornstarch", instructions: "Heat wok over medium heat and add the oil, increase to medium-high heat.\nAdd the broccoli and water, stir-fry for 1 minute or until broccoli is bright green.\nAdd carrots, snow peas, mushrooms, water chestnuts, garlic and ginger; stir-fry for 1 to 2 minutes or until tender crisp.\nIn small bowl, combine the soy sauce, broth and cornstarch; mix well to dissolve.\nAdd to wok and stir-fry for about 1 minute.\nServe over rice.",photo: File.open(Rails.root.join("db","seed_images","stir_fry.jpeg"))},
  { author_id: 2, title: "Baked Ziti", course: "Main", cuisine: "Italian",servings: "10", active_time: "30 min", total_time: "1 hr 10 min", ingredients: "2 tablespoons olive oil\n3 cloves garlic, minced\n1 large onion, diced\n1 pound ground beef\n1 pound Italian sausage\nTwo 14.5-ounce cans tomato sauce or marinara sauce\nOne 28-ounce can whole tomatoes with juice\n2 teaspoons Italian seasoning\n1/2 teaspoon red pepper flakes\nSalt and freshly ground black pepper\n1 pound ziti\n1 1/2 pounds mozzarella, grated\nOne 15-ounce tub whole-milk ricotta\n1/2 cup grated Parmesan\n2 tablespoons chopped fresh parsley, plus more for sprinkling/n2 eggs", instructions: "Heat the olive oil in a pot over medium heat. Add the garlic and onions and saute until starting to soften, 3 to 4 minutes. Add the ground beef and sausage and cook until browned. Drain off almost all of the fat, leaving a bit behind for flavor and moisture. Add the tomato sauce, tomatoes, Italian seasoning, red pepper flakes and some salt and pepper. Stir, bring to a simmer and simmer for 25 to 30 minutes. Remove 3 to 4 cups of the cooked sauce to a bowl to cool down.\nBring a large pot of water to a boil and add some salt. Cook the ziti until not quite al dente.\nPreheat the oven to 375 degrees F.\nIn a bowl, mix 2 cups of the grated mozzarella, the ricotta, Parmesan, parsley, eggs and some salt and pepper. Stir together just a couple of times (do not mix completely).\nDrain the pasta and rinse under cool water to stop the cooking and cool it down. Pour it into the bowl with the cheese mixture and toss to slightly combine (there should still be large lumps). Add the cooled reserved meat sauce and toss to combine.\nAdd half the coated pasta to a large casserole dish or lasagna dish. Spoon half of the remaining sauce over the top, then top with half the remaining mozzarella. Repeat with another layer of the coated pasta and the remaining sauce and mozzarella.\nBake until bubbling, about 20 minutes. Let stand 5 minutes before sprinkling with chopped parsley to serve.",photo: File.open(Rails.root.join("db","seed_images","baked_ziti.jpeg"))},
  { author_id: 3, title: "Falafel", diet:"Vegetarian", cuisine: "Middle Eastern", course:"Appetizer", main_ingredient:"chickpeas", servings: "4", active_time: "1 hour", total_time: "24 hours", ingredients: "1 cup dried chickpeas\n1/2 large onion, roughly chopped (about 1 cup)\n2 tablespoons finely chopped fresh parsley\n2 tablespoons finely chopped fresh cilantro\n1 teaspoon salt\n1/2-1 teaspoon dried hot red pepper\n4 cloves of garlic\n1 teaspoon cumin\n1 teaspoon baking powder\n4-6 tablespoons flour\nSoybean or vegetable oil for frying\nChopped tomato for garnish\nDiced onion for garnish\nDiced green bell pepper for garnish\nTahini\nPita bread", instructions: "1. Put the chickpeas in a large bowl and add enough cold water to cover them by at least 2 inches. Let soak overnight, then drain. Or use canned chickpeas, drained.\n2. Place the drained, uncooked chickpeas and the onions in the bowl of a food processor fitted with a steel blade. Add the parsley, cilantro, salt, hot pepper, garlic, and cumin. Process until blended but not pureed.\n3. Sprinkle in the baking powder and 4 tablespoons of the flour, and pulse. You want to add enough bulgur or flour so that the dough forms a small ball and no longer sticks to your hands. Turn into a bowl and refrigerate, covered, for several hours.\n4. Form the chickpea mixture into balls about the size of walnuts, or use a falafel scoop, available in Middle-Eastern markets.\n5. Heat 3 inches of oil to 375 degrees in a deep pot or wok and fry 1 ball to test. If it falls apart, add a little flour. Then fry about 6 balls at once for a few minutes on each side, or until golden brown. Drain on paper towels. Stuff half a pita with falafel balls, chopped tomatoes, onion, green pepper, and pickled turnips. Drizzle with tahina thinned with water.", photo: File.open(Rails.root.join("db","seed_images","falafel.jpeg"))},
  { author_id: 5, title: "Lasagna", cuisine: "Italian", general:"Kid-Friendly", course:"Main",servings: "12", active_time: "30 min", total_time: "3 hours", ingredients: "1 pound sweet Italian sausage\n 3/4 pound lean ground beef\n 1/2 cup minced onion\n 2 cloves garlic\n crushed 1 (28 ounce) can crushed tomatoes\n 2 (6 ounce) cans tomato paste\n 2 (6.5 ounce) cans canned tomato sauce\n 1/2 cup water\n 2 tablespoons white sugar\n 1 1/2 teaspoons dried basil leaves\n 1/2 teaspoon fennel seeds\n 1 teaspoon Italian seasoning\n 1 tablespoon salt\n 1/4 teaspoon ground black pepper\n 4 tablespoons chopped fresh parsley\n 12 lasagna noodles\n 16 ounces ricotta cheese\n 1 egg\n1/2 teaspoon salt\n 3/4 pound mozzarella cheese, sliced\n 3/4 cup grated Parmesan cheesee", instructions: "In a Dutch oven, cook sausage, ground beef, onion, and garlic over medium heat until well browned. Stir in crushed tomatoes, tomato paste, tomato sauce, and water. Season with sugar, basil, fennel seeds, Italian seasoning, 1 tablespoon salt, pepper, and 2 tablespoons parsley. Simmer, covered, for about 1 1/2 hours, stirring occasionally.\nBring a large pot of lightly salted water to a boil. Cook lasagna noodles in boiling water for 8 to 10 minutes. Drain noodles, and rinse with cold water. In a mixing bowl, combine ricotta cheese with egg, remaining parsley, and 1/2 teaspoon salt.\nPreheat oven to 375 degrees F (190 degrees C).\nTo assemble, spread 1 1/2 cups of meat sauce in the bottom of a 9x13 inch baking dish. Arrange 6 noodles lengthwise over meat sauce. Spread with one half of the ricotta cheese mixture. Top with a third of mozzarella cheese slices. Spoon 1 1/2 cups meat sauce over mozzarella, and sprinkle with 1/4 cup Parmesan cheese. Repeat layers, and top with remaining mozzarella and Parmesan cheese. Cover with foil: to prevent sticking, either spray foil with cooking spray, or make sure the foil does not touch the cheese.\nBake in preheated oven for 25 minutes. Remove foil, and bake an additional 25 minutes. Cool for 15 minutes before serving.", photo: File.open(Rails.root.join("db","seed_images","lasagna.jpg"))},
  { author_id: 6, title: "Coq A Vin", course: "Main", cuisine: "French", main_ingredient:"chicken", description: "An approachable take on a classic French dish",servings: "4", active_time: "45 min", total_time: "45 min", ingredients: "4 bacon slices, coarsely chopped\n4 skinless boneless chicken breast halves\n3 tablespoons chopped fresh Italian parsley, divided\n8 ounces large crimini (baby bella) mushrooms, halved\n8 large shallots, peeled, halved through root end\n2 garlic cloves, pressed\n1 1/2 cups dry red wine (such as Syrah)\n1 1/2 cups low-salt chicken broth, divided\n4 teaspoons all purpose flour", instructions: "Preheat oven to 300°F. Sauté bacon in large nonstick skillet over medium-high heat until crisp. Using slotted spoon, transfer to bowl.\nSprinkle chicken with salt, pepper, and 1 tablespoon parsley. Add to drippings in skillet. Sauté until cooked through, about 6 minutes per side; transfer to pie dish (reserve skillet). Place in oven to keep warm.\nAdd mushrooms and shallots to skillet; sprinkle lightly with salt and pepper. Sauté until brown, about 4 minutes. Add garlic; toss 10 seconds. Add wine, 1 1/4 cups broth, bacon, and 1 tablespoon parsley. Bring to boil, stirring occasionally. Boil 10 minutes.\nMeanwhile, place flour in small cup. Add 1/4 cup broth, stirring until smooth.\nAdd flour mixture to sauce. Cook until sauce thickens, 3 to 4 minutes. Season sauce to taste with salt and pepper.\nArrange chicken on platter; stir juices from pie dish into sauce and spoon over chicken. Sprinkle with 1 tablespoon parsley.", photo: File.open(Rails.root.join("db","seed_images","coq_a_vin.jpeg"))},
  { author_id: 5, title: "Rice Pudding", course: "Dessert", description: "a classic comfort food", servings: "4", active_time: "25 min", total_time: "45 min", ingredients: "3/4 cup uncooked white rice\n 2 cups milk, divided\n1/3 cup sugar\n1/4 tsp salt\n1 egg, beaten\n2/3 cup golden raisins\n1 Tb butter\n1 tsp vanilla extract", instructions: "Bring 1 1/2 cups water to a boil in a saucepan; stir rice into boiling water. Reduce heat to low, cover, and simmer for 20 minutes.\nIn a clean saucepan, combine 1 1/2 cups cooked rice, 1 1/2 cups milk, sugar and salt. Cook over medium heat until thick and creamy, 15 to 20 minutes. Stir in remaining 1/2 cup milk, beaten egg, and raisins; cook 2 minutes more, stirring constantly. Remove from heat and stir in butter and vanilla.", photo: File.open(Rails.root.join("db","seed_images","rice_pudding.jpeg"))},
  { author_id: 4, title: "Chocolate Cake", course: "Dessert", servings: "12", active_time: "40 min", total_time: "45 min", ingredients: "2 cups all-purpose flour\n2 cups sugar\n¾ cup unsweetened cocoa powder\n2 teaspoons baking powder\n1½ teaspoons baking soda\n1 teaspoon salt\n1 teaspoon espresso powder\n1 cup milk\n½ cup vegetable oil\n2 eggs\n2 teaspoons vanilla extract\n1 cup boiling water", instructions: "Preheat oven to 350º F. Prepare two 9-inch cake pans by spraying with baking spray or buttering and lightly flouring.\nAdd flour, sugar, cocoa, baking powder, baking soda, salt and espresso powder to a large bowl or the bowl of a stand mixer. Whisk through to combine or, using your paddle attachment, stir through flour mixture until combined well.\nAdd milk, vegetable oil, eggs, and vanilla to flour mixture and mix together on medium speed until well combined. Reduce speed and carefully add boiling water to the cake batter. Beat on high speed for about 1 minute to add air to the batter.\nDistribute cake batter evenly between the two prepared cake pans. Bake for 30-35 minutes, until a toothpick or cake tester inserted in the center comes out clean.\nRemove from the oven and allow to cool for about 10 minutes, remove from the pan and cool completely.\nFrost cake with Chocolate Buttercream Frosting.", photo: File.open(Rails.root.join("db","seed_images","chocolate_cake.jpeg"))},
  {author_id: 1, title: "Brownies", course: "Dessert", main_ingredient:"chocolate",servings: 16, active_time:"15 min", total_time:"50 min", ingredients:"2 sticks (1 cup) unsalted butter\n8 ounces fine-quality bittersweet chocolate (not unsweetened), coarsely chopped\n1 1/4 cups all-purpose flour\n1 teaspoon baking powder\n1/2 teaspoon salt\n2 cups sugar\n4 large eggs\n2 teaspoons vanilla\n5 ounces walnut pieces, coarsely chopped (1 1/2 cups)",instructions:"Put oven rack in middle position and preheat oven to 350°F. Grease a 9-inch square baking pan (2 inches deep) and line bottom and sides with wax paper, then butter paper.\nMelt butter and chocolate in a medium heatproof bowl set over a saucepan of simmering water, stirring occasionally, until smooth.\nWhisk together flour, baking powder, and salt in a small bowl.\nWhisk together sugar, eggs, and vanilla in a large bowl, then pour in chocolate mixture, whisking until combined well. Whisk in flour mixture, then stir in walnuts and transfer batter to baking pan.\nBake until top is shiny and set and sides have begun to pull away slightly (a wooden pick or skewer will not come out clean), about 35 minutes, for fudgy brownies; or until wooden pick or skewer comes out clean, 50 minutes to 1 hour total, for cakey brownies.\nCool brownies completely in pan on a rack. Invert onto a cutting board, remove paper, and cut into squares.", photo:File.open(Rails.root.join("db","seed_images","brownies.jpeg")) },
  {author_id: 1, title:"Pineapple Fried Rice", servings: 4, course:"Main", cuisine:"Asian",diet:"Vegetarian", active_time: "25 min", total_time: "25 min", main_ingredient:"rice", ingredients:"2 tablespoons coconut oil or quality vegetable oil, divided\n2 eggs, beaten with a dash of salt\n1½ cups\nchopped fresh pineapple\n1 large red bell pepper, diced (about ¾ cup diced)\n½ bunch green onions, green and white parts, thinly sliced (about ½ cup)\n2 cloves garlic, pressed or minced\n½ cup chopped raw, unsalted cashews\n2 cups cooked and chilled brown rice, preferably long-grain brown jasmine rice\n1 tablespoon reduced-sodium tamari or soy sauce\n1 to 2 teaspoons chili garlic sauce or sriracha\n1 small lime, halved\nSeason with salt, to taste\nHandful fresh cilantro leaves, chopped, for garnishing", instructions:"Heat a large wok, cast iron skillet or non-stick frying pan over medium-high heat and place an empty serving bowl nearby. Once the pan is hot enough that a drop of water sizzles on contact, add 1 teaspoon oil. Pour in the eggs and cook, stirring occasionally, until the eggs are scrambled and lightly set. Transfer the eggs to the empty bowl. Wipe out the pan if necessary with a paper towel (be careful, it's hot!).\nAdd one tablespoon of oil to the pan and add the pineapple and red pepper. Cook, stirring constantly, until the liquid has evaporated and the pineapple is caramelized on the edges, about 3 to 5 minutes. Then add the green onion and garlic. Cook, while stirring constantly, until fragrant, about 30 seconds or longer. Transfer the contents of the pan to your bowl of eggs.\nAdd the remaining two teaspoons of oil to the pan. Pour in the cashew and cook, stirring constantly, until the cashews smell fragrant, about 30 seconds. Add the rice to the pan and stir to combine. Cook, stirring occasionally, until the rice is hot, about 3 minutes.\nPour the contents of the bowl back into the pan and stir to combine. Once the contents are warmed through, remove the pan from heat. Add 1 tablespoon tamari (or soy sauce) and chili garlic sauce or sriracha, to taste. Squeeze the juice of ½ of a lime over the dish and stir to combine. Season to taste with salt. Transfer to individual serving bowls and garnish with a sprinkling of torn cilantro leaves, with jars of chili garlic sauce or sriracha on the side.", photo:File.open(Rails.root.join("db","seed_images","pineapple_rice.jpg"))  },
  {author_id: 6, title: "Cheese Souffle", course:"Appetizer",servings: 4, cuisine: "French", diet:"Vegetarian",main_ingredient:"eggs",active_time:"20 min",total_time:"45 min",ingredients: "2 tablespoons finely grated Parmesan cheese\n1 cup whole milk2\n1/2 tablespoons unsalted butter\n3 tablespoons unbleached all purpose flour\n1/2 teaspoon paprika\n1/2 teaspoon salt\nPinch of ground nutmeg\n4 large egg yolks\n5 large egg whites\n1 cup (packed) coarsely grated Gruyère cheese (about 4 ounces)",instructions:"Position rack in lower third of oven and preheat to 400F.Butter 6-cup (1 1/2-quart) soufflé dish. Add Parmesan cheese and tilt dish, coating bottom and sides. Warm milk in heavy small saucepan over medium-low heat until steaming.\nMeanwhile, melt butter in heavy large saucepan over medium heat. Add flour and whisk until mixture begins to foam and loses raw taste, about 3 minutes (do not allow mixture to brown). Remove saucepan from heat; let stand 1 minute. Pour in warm milk, whisking until smooth. Return to heat and cook, whisking constantly until very thick, 2 to 3 minutes. Remove from heat; whisk in paprika, salt, and nutmeg. Add egg yolks 1 at a time, whisking to blend after each addition. Scrape soufflé base into large bowl. Cool to lukewarm. DO AHEAD: Can be made 2 hours ahead. Cover and let stand at room temperature.\nUsing electric mixer, beat egg whites in another large bowl until stiff but not dry. Fold 1/4 of whites into lukewarm or room temperature soufflé base to lighten. Fold in remaining whites in 2 additions while gradually sprinkling in Gruyère cheese. Transfer batter to prepared dish.\nPlace dish in oven and immediately reduce oven temperature to 375F. Bake until soufflé is puffed and golden brown on top and center moves only slightly when dish is shaken gently, about 25 minutes (do not open oven door during first 20 minutes). Serve immediately.",photo:File.open(Rails.root.join("db","seed_images","souffle.jpeg")) },
  {author_id: 4, title: "Banana Bread", course: "Dessert", servings: 12, active_time: "15 min", total_time: "1 hour 20 min", ingredients:"2 cups all-purpose flour \n1 teaspoon baking soda\n1/4 teaspoon salt\n1/2 cup butter\n3/4 cup brown sugar\n 2 eggs, beaten\n2 1/3 cups mashed overripe bananas",instructions:"Preheat oven to 350 degrees F (175 degrees C). Lightly grease a 9x5 inch loaf pan.\nIn a large bowl, combine flour, baking soda and salt. In a separate bowl, cream together butter and brown sugar. Stir in eggs and mashed bananas until well blended. Stir banana mixture into flour mixture; stir just to moisten. Pour batter into prepared loaf pan.\nBake in preheated oven for 60 to 65 minutes, until a toothpick inserted into center of the loaf comes out clean. Let bread cool in pan for 10 minutes, then turn out onto a wire rack.",  photo:File.open(Rails.root.join("db","seed_images","banana_bread.jpg")) },
  {author_id: 5, title:"Skillet Rosemary Chicken", servings: 4 , course:"Main", active_time: "20 min", total_time: "40 min", ingredients: "3/4 pound small red-skinned potatoes, halved, or quartered if large\nKosher salt\n2 sprigs fresh rosemary, plus 1 tablespoon leaves\n1 clove garlic, smashed\nPinch of red pepper flakes\nJuice of 2 lemons (squeezed halves reserved)\n2 tablespoons extra-virgin olive oil\n4 skin-on, bone-in chicken breasts (6 to 8 ounces each)\n10 ounces cremini mushrooms, halved", instructions:"Preheat the oven to 450. Cover the potatoes with cold water in a saucepan and salt the water. Bring to a boil over medium-high heat and cook until tender, about 8 minutes; drain and set aside.\nPile the rosemary leaves, garlic, 2 teaspoons salt and the red pepper flakes on a cutting board, then mince and mash into a paste using a large knife. Transfer the paste to a bowl. Stir in the juice of 1 lemon and the olive oil. Add the chicken and turn to coat.\nHeat a large cast-iron skillet over medium-high heat. Add the chicken, skin-side down, cover and cook until the skin browns, about 5 minutes. Turn the chicken; add the mushrooms and potatoes to the skillet and drizzle with the juice of the remaining lemon.\nAdd the rosemary sprigs and the squeezed lemon halves to the skillet; transfer to the oven and roast, uncovered, until the chicken is cooked through and the skin is crisp, 20 to 25 minutes.",photo:File.open(Rails.root.join("db","seed_images","rosemary_chicken.jpeg"))}
  ])

reviews = Review.create!([
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

folders = Folder.create!([
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

  folderRecipes = FolderRecipe.create!([
    {folder_id:1, recipe_id: 1},
    {folder_id:2, recipe_id: 6},
    {folder_id:2, recipe_id: 7},
    {folder_id:3, recipe_id: 3},
    {folder_id:4, recipe_id: 2},
    {folder_id:4, recipe_id: 4}
    ])
