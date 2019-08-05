class PlaydateSerializer < ActiveModel::Serializer
  attributes :id, :name, :time, :location, :description, :host_full_name

  belongs_to :host, class_name: 'User'

  def host_full_name
    "#{object.host.first_name} #{object.host.last_name}"
  end

end
