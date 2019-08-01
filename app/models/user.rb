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

end
