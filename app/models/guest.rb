class Guest < ApplicationRecord

  belongs_to :list
  validates :name, :presence => true
  STATUS = {
    :incomplete => 0,
    :complete => 1
  }

  def present?
    self.status == STATUS[:present]
  end

  def absent?
    self.status == STATUS[:absent]
  end
end


