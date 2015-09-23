# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150923161525) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "folder_recipes", force: :cascade do |t|
    t.integer  "folder_id",  null: false
    t.integer  "recipe_id",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "folder_recipes", ["folder_id"], name: "index_folder_recipes_on_folder_id", using: :btree
  add_index "folder_recipes", ["recipe_id", "folder_id"], name: "index_folder_recipes_on_recipe_id_and_folder_id", unique: true, using: :btree

  create_table "folders", force: :cascade do |t|
    t.integer  "owner_id",   null: false
    t.string   "title",      null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "folders", ["owner_id", "title"], name: "index_folders_on_owner_id_and_title", unique: true, using: :btree

  create_table "recipes", force: :cascade do |t|
    t.integer  "author_id",          null: false
    t.string   "title",              null: false
    t.text     "description"
    t.integer  "servings",           null: false
    t.string   "active_time",        null: false
    t.string   "total_time",         null: false
    t.text     "ingredients",        null: false
    t.text     "instructions",       null: false
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "photo_file_name"
    t.string   "photo_content_type"
    t.integer  "photo_file_size"
    t.datetime "photo_updated_at"
    t.integer  "cuisine"
    t.integer  "course"
    t.integer  "diet"
    t.integer  "general"
  end

  add_index "recipes", ["author_id"], name: "index_recipes_on_author_id", using: :btree
  add_index "recipes", ["course"], name: "index_recipes_on_course", using: :btree
  add_index "recipes", ["cuisine"], name: "index_recipes_on_cuisine", using: :btree
  add_index "recipes", ["diet"], name: "index_recipes_on_diet", using: :btree
  add_index "recipes", ["general"], name: "index_recipes_on_general", using: :btree

  create_table "reviews", force: :cascade do |t|
    t.integer  "author_id",  null: false
    t.integer  "recipe_id",  null: false
    t.boolean  "cook_again", null: false
    t.integer  "rating",     null: false
    t.text     "body",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "reviews", ["author_id"], name: "index_reviews_on_author_id", using: :btree
  add_index "reviews", ["recipe_id", "author_id"], name: "index_reviews_on_recipe_id_and_author_id", unique: true, using: :btree

  create_table "taggings", force: :cascade do |t|
    t.integer  "recipe_id",  null: false
    t.integer  "tag_id",     null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "taggings", ["recipe_id"], name: "index_taggings_on_recipe_id", using: :btree
  add_index "taggings", ["tag_id", "recipe_id"], name: "index_taggings_on_tag_id_and_recipe_id", unique: true, using: :btree

  create_table "tags", force: :cascade do |t|
    t.string   "label",      null: false
    t.integer  "category",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "tags", ["label", "category"], name: "index_tags_on_label_and_category", unique: true, using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
