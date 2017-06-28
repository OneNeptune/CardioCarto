json.feed @feed do |route|
  json.user_id route.user_id
  json.route_id route.id
  json.person route.user.first_name
  json.avatar_image route.user.image.url
  json.title route.title
  json.distance route.distance
  json.completed route.completed
  json.completion_time route.completion_time
  json.polylines route.polylines
  json.created_at route.created_at
end
