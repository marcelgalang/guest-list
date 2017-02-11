class GuestSerializer < ActiveModel::Serializer
  attributes :id, :name, :status, :list_id
  belongs_to :list
end
