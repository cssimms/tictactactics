# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


user1 = User.create({username: 'charlie', password:'password'})
user2 = User.create({username: 'sara', password:'asdfasdf'})
user3 = User.create({username: 'taemily', password:'ilovekittens'})

Game.create({x_id: user1.id, o_id: user2.id})
Game.create({x_id: user3.id, o_id: user2.id})
Game.create({x_id: user2.id, o_id: user3.id})
Game.create({x_id: user2.id, o_id: user3.id})
Game.create({x_id: user3.id, o_id: user2.id})
