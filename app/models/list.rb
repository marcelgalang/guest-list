class List < ApplicationRecord
  has_many :guests
  has_many :shared_lists
  has_many :users, :through => :shared_lists



  validates :name, :presence => true, :length => {:minimum => 3}

    def guests_attributes=(guests_hashes)
      guests_hashes.each do |i, guest_attributes|
       if guest_attributes[:name].present?
         guest= Guest.find_or_create_by(name: guest_attributes[:name])
         # if !self.guests.include?(guest)
         #   self.post_categories.build(:category => category)
         # end
       end
     end
   end

end