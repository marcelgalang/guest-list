class Guest < ApplicationRecord

  belongs_to :list
  validates :name, :presence => true
  STATUS = {
    :absent => 0,
    :present => 1
  }

  def present?
    self.status == STATUS[:present]
  end

  def absent?
    self.status == STATUS[:absent]
  end
end


