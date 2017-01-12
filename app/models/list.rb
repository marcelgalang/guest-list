class List < ApplicationRecord
  has_many :guests
  has_many :shared_lists
  has_many :users, :through => :shared_lists

  PERMISSIONS = {
    :destroy => 0,
    :edit => 10,
    :view => 100
  }



  validates :name, :presence => true, :length => {:minimum => 3}

  #   def guests_attributes=(guests_hashes)
  #     guests_hashes.each do |i, guest_attributes|
  #      if guest_attributes[:name].present?
  #        guest= Guest.find_or_create_by(name: guest_attributes[:name])
  #        # if !self.guests.include?(guest)
  #        #   self.post_categories.build(:category => category)
  #        # end
  #        end
  #      end
  #   end

  #   def self.permissable(*args)
  #   args.each do |action|
  #     # action #=> :view
  #     define_method "#{action}able?" do
  #       self.permission <= PERMISSIONS[action]
  #     end
  #   end
  # end

  # permissable :view, :edit, :destroy

  def head_count
    self.guests.size
  end

  def percent_attending(list)
    attending =[]
    list.guests.each do |guest|
     if guest.status = 1
     attending << guest
      end
      list.head_count/attending
    end
  end

  def self.most_invited
    most_list = List.all.max_by {|list| list.guests.size}
    most_list.name
  end


end