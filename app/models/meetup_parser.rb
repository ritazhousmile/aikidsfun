require 'httparty'

class MeetupParser
  attr_reader :data

  def initialize
    @data = []
  end

  def search
    response = HTTParty.get()
  end

end
