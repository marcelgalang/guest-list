class List < ApplicationRecord
  has_many :guests
  # has_many :shared_lists
  # has_many :users, :through => :shared_lists
  # belongs_to :user


  validates :name, :presence => true, :length => {:minimum => 3}

    def guest_attributes=(guest)
      self.guest = Guest.find_or_create_by(name: name, list_id: list_id)
    end

end