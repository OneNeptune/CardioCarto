json.potential_friends @potential_friends do |friend|
  json.id friend.id
  json.full_name "#{friend.first_name} #{friend.last_name}"
end

json.active do
  json.active_friends do
    @active_friends.each do |friend|
      json.set! friend.id do
        json.partial! "api/users/user", user: friend
      end
    end
  end
  json.active_requests do
    @approved_friendships.each do |request|
      json.set! request.id do
        json.partial! "api/friendships/request", request: request
      end
    end
  end
end

json.pending do
  json.pending_friends do
    @pending_friends.each do |friend|
      json.set! friend.id do
        json.partial! "api/users/user", user: friend
      end
    end
  end

  json.pending_requests do
    @pending_requests.each do |request|
      json.set! request.id do
        json.partial! "api/friendships/request", request: request
      end
    end
  end

  json.pending_response do
    @pending_response.each do |request|
      json.set! request.id do
        json.partial! "api/friendships/request", request: request
      end
    end
  end
end
