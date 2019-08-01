class Playdate < ApplicationRecord
  validates :name, presence: true
  validates :time, presence: true
  validates :location, presence: true
  validates :description, presence: true

  has_many :userdates
  has_many :users, through: :userdates 
end
