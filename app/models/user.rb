class User < ApplicationRecord

  has_many :shared_lists
  has_many :lists, :through => :shared_lists

  has_secure_password
  validates :uid, :uniqueness => {:scope => :provider, :allow_nil => true}
  validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i, :on => :create

end
