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
{ username: "VeggieMonster", email: "eggplant@gmail.com", password_digest: "$2a$10$PT0/.rPMi57FHXIQF4ggDud.SopbAbBUkGs.mO.EUcTpZX0t7aiLe" }
])

recipes = Recipe.create([
  { author_id: 1, title: "Stir-Fry", servings: "4", active_time: "30 min", total_time: "30 min", ingredients: "a bunch of veggies", instructions: "do all the things"},
  { author_id: 2, title: "Baked Ziti", servings: "4", active_time: "30 min", total_time: "30 min", ingredients: "a bunch of veggies", instructions: "do all the things"},
  { author_id: 3, title: "Falafel", servings: "4", active_time: "1 hour", total_time: "24 hours", ingredients: "a bunch of veggies", instructions: "do all the things"},

  ])

reviews = Review.create([
  {author_id: 1, recipe_id: 2, rating: 4, cook_again: true, body: "my commentary"},
  {author_id: 1, recipe_id: 3, rating: 3, cook_again: true, body: "my commentary"},
  {author_id: 2, recipe_id: 1, rating: 4, cook_again: true, body: "my commentary"},
  {author_id: 2, recipe_id: 3, rating: 2, cook_again: false, body: "not a fan"},
  {author_id: 3, recipe_id: 1, rating: 4, cook_again: true, body: "my commentary"},
  {author_id: 3, recipe_id: 2, rating: 4, cook_again: true, body: "my commentary"},
  ])
