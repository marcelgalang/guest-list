class ListSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :comments
  has_many :guests
  has_many :shared_lists
  has_many :users, :through => :shared_lists
end
