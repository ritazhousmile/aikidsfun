class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name

  has_many :hosted_playdates, class_name: "Playdate", foreign_key: 'host_id'

  def full_name
    "#{object.first_name} #{object.last_name}"
  end
end
