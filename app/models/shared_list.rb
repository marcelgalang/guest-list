class SharedList < ApplicationRecord
  belongs_to :user
  belongs_to :list
  PERMISSIONS = {
    :destroy => 0,
    :edit => 10,
    :view => 100
  }

  def self.permissable(*args)
    args.each do |action|
      define_method "#{action}able?" do
        self.permission <= PERMISSIONS[action]
      end
    end
  end

  permissable :view, :edit, :destroy
end
