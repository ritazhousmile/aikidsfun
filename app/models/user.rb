class User < ApplicationRecord
  mount_uploader :profile_photo, ProfilePhotoUploader
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  available_days = ['Monday', 'Tuesday', 'Wendsday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :town, presence: true
  validates :age, presence: true
  validates :career, presence: true
  validates :availability, presence: true, inclusion: {in: available_days}

  has_many :userdates
  has_many :playdates, through: :userdates

  has_many :hosted_playdates, class_name: 'Playdate', foreign_key: 'host_id'

  has_many :messges

  def host?
    role == "host"
  end
end
