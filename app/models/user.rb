class User < ApplicationRecord

  has_many :shared_lists
  has_many :lists, :through => :shared_lists
  has_many :team_users
  has_many :teams, through: :team_user
  # has_many :teams, foreign_key: "team_mate_id"
  # has_many :team_lists, through: :teams, source: :lists
  has_secure_password
  validates :uid, :uniqueness => {:scope => :provider, :allow_nil => true}
end
