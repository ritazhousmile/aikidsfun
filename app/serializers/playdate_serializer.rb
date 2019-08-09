class PlaydateSerializer < ActiveModel::Serializer
  attributes :id, :name, :time, :location, :description, :host_full_name, :host_id, :users, :host_profile_photo
  belongs_to :host, class_name: 'User'

  def host_full_name
    puts "HELLO FROM SERIALIZER"
    puts object
    puts object.host
    "#{object.host.first_name} #{object.host.last_name}"
  end

  def host_id
    object.host.id
  end

  def host_profile_photo
    object.host.profile_photo
  end

  has_many :userdates
  has_many :users, through: :userdates


end
