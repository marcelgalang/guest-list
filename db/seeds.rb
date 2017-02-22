# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
users = User.create([
  {username: 'john', email: 'john@beatles.com', password: 'john'},
  {username: 'paul', email: 'paul@beatles.com', password: 'paul'},
  {username: 'george', email: 'george@beatles.com', password: 'george'},
  {username: 'ringo', email: 'ringo@beatles.com', password: 'ringo'}
  ])

lists = List.create([
  {name: "Hollywood Bowl"},
  {name: "Ed Sullivan"},
  {name: "Candlestick Park"},
  {name: "Shea Stadium"},
  {name: "Ringo And Maureen Wedding"},
  ])

  
