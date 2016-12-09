class List < ApplicationRecord
  has_many :guests
  has_many :shared_lists
  # has_many :users, :through => :shared_lists
  # belongs_to :user


  validates :name, :presence => true, :length => {:minimum => 3}


  accepts_nested_attributes_for :guests

end