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
  { author_id: 1, title: "Stir-Fry", servings: "4", active_time: "30 min", total_time: "30 min", ingredients: "a bunch of veggies", instructions: "do all the things",photo: File.open(Rails.root.join("db","seed_images","stir_fry.jpeg"))},
  { author_id: 2, title: "Baked Ziti", servings: "4", active_time: "30 min", total_time: "30 min", ingredients: "a bunch of veggies", instructions: "do all the things",photo: File.open(Rails.root.join("db","seed_images","baked_ziti.jpeg"))},
  { author_id: 3, title: "Falafel", servings: "4", active_time: "1 hour", total_time: "24 hours", ingredients: "chickpeas and stuff", instructions: "do all the things", photo: File.open(Rails.root.join("db","seed_images","falafel.jpeg"))},
  { author_id: 4, title: "Chocolate Cake", servings: "12", active_time: "40 min", total_time: "2 hours", ingredients: "chocolate and flour", instructions: "do all the things", photo: File.open(Rails.root.join("db","seed_images","chocolate_cake.jpeg"))},
  { author_id: 5, title: "Lasagna", servings: "6", active_time: "1 hour", total_time: "1.5 hours", ingredients: "pasta, sauce: cheese", instructions: "do all the things", photo: File.open(Rails.root.join("db","seed_images","lasagna.jpg"))},
  { author_id: 6, title: "Coq A Vin", servings: "4", active_time: "1 hour", total_time: "1 hour", ingredients: "chicken and wine", instructions: "do all the things", photo: File.open(Rails.root.join("db","seed_images","coq_a_vin.jpeg"))}

  ])

reviews = Review.create([
  {author_id: 1, recipe_id: 2, rating: 4, cook_again: true, body: "my commentary"},
  {author_id: 1, recipe_id: 3, rating: 3, cook_again: true, body: "my commentary"},
  {author_id: 2, recipe_id: 1, rating: 4, cook_again: true, body: "my commentary"},
  {author_id: 2, recipe_id: 3, rating: 2, cook_again: false, body: "not a fan"},
  {author_id: 3, recipe_id: 1, rating: 4, cook_again: true, body: "my commentary"},
  {author_id: 3, recipe_id: 2, rating: 4, cook_again: true, body: "my commentary"},
  {author_id: 1, recipe_id: 4, rating: 4, cook_again: true, body: "what a hit!"},
  {author_id: 2, recipe_id: 4, rating: 4, cook_again: true, body: "my new favorite birthday cake"},
  {author_id: 3, recipe_id: 4, rating: 4, cook_again: true, body: "scrumptious!"},
  {author_id: 5, recipe_id: 4, rating: 4, cook_again: true, body: "my commentary"},
  {author_id: 6, recipe_id: 4, rating: 3, cook_again: false, body: "a bit on the dry side"}

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
