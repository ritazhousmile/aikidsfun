class PlaydateSerializer < ActiveModel::Serializer
  attributes :id, :name, :time, :location, :description, :host_full_name, :host_id

  belongs_to :host, class_name: 'User'

  def host_full_name
    "#{object.host.first_name} #{object.host.last_name}"
  end

  def host_id
    object.host.id
  end

end
