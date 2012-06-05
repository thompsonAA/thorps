class User < ActiveRecord::Base

  attr_accessible :first_name, :last_name, :email, :password, 
                   :password_confirmation 
  
  has_secure_password

  before_save { |user| user.email = email.downcase }
  before_save :create_remember_token

  validates :first_name, presence: true, length: { maximum: 15 }
  validates :last_name, presence: true, length: { maximum: 15 }

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[edu]/i


  validates :email, presence: true, 
                    format: { with: VALID_EMAIL_REGEX },
                    uniqueness: { case_sensitive: false }
  validates :password, presence: true, length: { minimum: 6 }
  validates :password_confirmation, presence: true

  private

    def create_remember_token
      self.remember_token = SecureRandom.urlsafe_base64
    end
end
