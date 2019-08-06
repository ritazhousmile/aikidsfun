class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :profile_photo

  has_many :hosted_playdates, class_name: "Playdate", foreign_key: 'host_id'

  has_many :userdates
  has_many :playdates, through: :userdates
end
