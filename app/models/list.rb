class List < ApplicationRecord
  has_many :guests
  has_many :shared_lists
  has_many :users, :through => :shared_lists
  has_many :comments



  validates :name, :presence => true, :length => {:minimum => 3}


  def head_count
    self.guests.size
  end

#not yet in views. Find out why an instance method can not be called from within a class method.
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
    if most_list != nil
      most_list.name
    else
      "TBD"
    end
  end




end
