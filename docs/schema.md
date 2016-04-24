# Schema

## MVP schema will only need users and games

## games
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
status      | string    | not null, default: "open"
moveset     | string    | not null, default: '{}'
x_id        | integer   | not null, foreign key (references player as x), indexed
o_id        | integer   | not null, foreign key (references player as o), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

<!-- ## Extra Features will need as Follows

## friendships
column name     | data type | details
----------------|-----------|---------------
id              | integer   | not null, primary key
user_id_one     | integer   | not_null, foreign key
user_id_two     | integer   | not_null, foreign key -->
