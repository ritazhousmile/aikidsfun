# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

playdate1=Playdate.create(name:"Story telling", time: 'Friday, 29 August 2019 10:50:00', location:'Boston Public Library', description:'Lets listen to stories together')
playdate2=Playdate.create(name:"Song time for kids all ages", time:'Friday, 14 August 2019 10:00:00', location: 'Brigham House', description: 'Jean plays kids music for all ages')
userdate1=Userdate.create(user_id: 3, playdate_id: 1)
userdate2=Userdate.create(user_id: 5, playdate_id: 1)
userdate3=Userdate.create(user_id: 5, playdate_id: 3)
binding.pry
