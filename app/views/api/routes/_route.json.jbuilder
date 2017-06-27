json.extract!(
  route,
  :id,
  :title,
  :polylines,
  :distance,
  :duration,
  :completed,
  :start_address,
  :finish_address,
  :completion_time
)

json.set! :created_at, route.created_at.strftime('%A, %d %b %Y %l:%M %p')

json.set! :user_name, "#{route.user.first_name} #{route.user.last_name}"

json.comments route.comments do |comment|
  json.extract! comment, :id, :body, :author_id
  json.image_url comment.author.image.url
end
