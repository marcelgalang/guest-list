class Guest < ApplicationRecord

  belongs_to :list

  validates :name, :presence => true, :length => {:minimum => 1}
  # STATUS = {
  #   :unattending => 0,
  #   :attending => 1
  # }

  # def attending?
  #    self.status == STATUS[:attending]
  #  end
  #
  #  def unattending?
  #    self.status == STATUS[:unattending]
  #  end
end
