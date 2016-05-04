# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


guest = User.create({username: 'guest', password: 'password'})

user1 = User.create({username: 'charlie', password:'password'})
user2 = User.create({username: 'sara', password:'asdfasdf'})
user3 = User.create({username: 'emily', password:'evacat'})
user4 = User.create({username: 'megan', password:'ilovekittens'})
user5 = User.create({username: 'rob', password:'asdfasdf'})
user6 = User.create({username: 'victor', password:'ilovecharlie'})


Game.create({x_id: guest.id, o_id: user2.id})
Game.create({x_id: guest.id, o_id: user3.id})
Game.create({x_id: guest.id, o_id: user5.id})
Game.create({x_id: user5.id, o_id: guest.id})
Game.create({x_id: user6.id, o_id: guest.id})
Game.create({x_id: user1.id, o_id: guest.id})
Game.create({x_id: guest.id, o_id: 0, comp_id: 1})
Game.create({x_id: 0, o_id: guest.id, comp_id: 1})
Game.create({x_id: 0, o_id: user1.id, comp_id: 1})
Game.create({x_id: user1.id, o_id: 0, comp_id: 1})
Game.create({x_id: 0, o_id: user2.id, comp_id: 1})
Game.create({x_id: user2.id, o_id: 0, comp_id: 1})
Game.create({x_id: user3.id, o_id: user2.id})
Game.create({x_id: user2.id, o_id: user3.id})
Game.create({x_id: user2.id, o_id: user3.id})
Game.create({x_id: user3.id, o_id: user2.id})
Game.create({x_id: user6.id, o_id: user1.id})
Game.create({x_id: user3.id, o_id: user4.id})
Game.create({x_id: user5.id, o_id: user2.id})
Game.create({x_id: user5.id, o_id: user1.id})
