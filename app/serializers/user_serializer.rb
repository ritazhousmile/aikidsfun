class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name

  has_many :hosted_playdates, class_name: "Playdate", foreign_key: 'host_id'

end
