# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  author_id  :integer          not null
#  route_id   :integer          not null
#  body       :string           not null
#  created_at :datetime
#  updated_at :datetime
#

class Comment < ActiveRecord::Base
  validates :author, :route, presence: true

  belongs_to :route,
    class_name: :Route,
    primary_key: :id,
    foreign_key: :route_id

  belongs_to :author,
    class_name: :User,
    primary_key: :id,
    foreign_key: :author_id
end
