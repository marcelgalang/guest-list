class Guest < ApplicationRecord

  belongs_to :list

  validates :name, :presence => true, :length => {:minimum => 1}
  STATUS = {
    :absent => 0,
    :attending => 1
  }

  def attending?
    self.status == STATUS[:attending]
  end

  def absent?
    self.status == STATUS[:absent]
  end
end


