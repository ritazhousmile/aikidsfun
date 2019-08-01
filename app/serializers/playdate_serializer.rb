class PlaydateSerializer < ActiveModel::Serializer
  attributes :id, :name, :time, :location, :description
  
  belongs_to :host, class_name: 'User'

end
