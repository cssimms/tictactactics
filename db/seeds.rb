# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.create({username: 'charlie', password:'password'})
User.create({username: 'sara', password:'asdfasdf'})
User.create({username: 'taemily', password:'ilovekittens'})

Game.create({x_id: 1, o_id: 2})
Game.create({x_id: 1, o_id: 3})
Game.create({x_id: 2, o_id: 3})
Game.create({x_id: 3, o_id: 2})
Game.create({x_id: 3, o_id: 1})
