# @routes.each do |route|
#   json.set! route.id do
#     json.partial! 'route', route: route
#   end
# end

json.completed @routes.where(completed: true) do |route|
  json.partial! 'route', route: route
end

json.pending @routes.where(completed: false) do |route|
  json.partial! 'route', route: route
end
