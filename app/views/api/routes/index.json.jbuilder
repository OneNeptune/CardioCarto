# @routes.each do |route|
#   json.set! route.id do
#     json.partial! 'route', route: route
#   end
# end

json.set! 'completed' do
  @routes.select(&:completed).each do |route|
    json.set! route.id do
      json.partial! 'route', route: route
    end
  end
end

json.set! 'pending' do
  @routes.reject(&:completed).each do |route|
    json.set! route.id do
      json.partial! 'route', route: route
    end
  end
end
