class SharedList < ApplicationRecord
  belongs_to :user
  belongs_to :list
  PERMISSIONS = {
    :destroy => 0,
    :edit => 10,
    :view => 100
  }

#permissions to be implemented. Can be assigned in list#show.
  def self.permissable(*args)
    args.each do |action|
      define_method "#{action}able?" do
        self.permission <= PERMISSIONS[action]
      end
    end
  end

  permissable :view, :edit, :destroy
end
