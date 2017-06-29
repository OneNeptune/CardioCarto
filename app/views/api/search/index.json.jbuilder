json.results @results do |friend|
  json.id friend.id
  json.full_name "#{friend.first_name} #{friend.last_name}"
  json.image_url friend.image.url
end
