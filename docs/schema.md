# Schema Information

## recipes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id    | integer   | not null, foreign key (references users)
title       | string    | not null
description | text      |
servings    | integer   | not null
active_time | string    | not null
total_time  | string    | not null
photo_url   | string    |
ingredients | text      | not null
instructions| text      | not null

## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users)
recipe_id   | integer   | not null, foreign key ( references
recipes)
rating      | integer   | not null
body        | text      | not null

## folders
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
owner_id    | integer   | not null, foreign key (references users)
title       | string    | not null, unique by owner

## folder_recipes
column name  | data type | details
------------ |-----------|-----------------------
id           | integer   | not null, primary key
folder_id    | integer   | not null, foreign key (references folders)
recipe_id    | integer   | not null, foreign key (references
recipes), unique by folder

## tag
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
label       | string    | not null, unique
category    | string    | not null, one of ("cuisine", "course","keyword","dietary restriction","main ingredient", "general")

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
recipe_id   | integer   | not null, foreign key (references recipes)
tag_id      | integer   | not null, foreign key (references tags)

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, unique
email           | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique
