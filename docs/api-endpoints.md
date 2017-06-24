# HTML API
## Root
* `GET /` - loads React web app

# JSON API
## Users
* `POST /api/users`
    * Create new user
* `PATCH /api/users`
* `GET /api/users`
    * Returns necessary `dashboard` info of current_user.
* `GET /api/users/:id`
    * Returns first_name, last_name, id.
    
## Session
* `POST /api/session`
* `DELETE /api/session`

## Routes
* `GET /api/routes`
    * Retrieves * columns of routes belonging to current_user, returns two arrays completed & pending.
* `POST /api/routes`
    * Create new route.
* `GET /api/routes/:id`
    * Returns a single route.
* `DELETE /api/routes/:id`
    * Delete a route.

## Friends
* `GET /api/friends`
* `DELETE /api/friends/:id`

## Friend Requests
* `POST /api/friend_requests`
* `DELETE /api/friend_requests/:id`

## Comments
* `GET /api/comments`
* `POST /api/comments`
* `PATCH /api/comments/:id`
* `DELETE /api/comments/:id`
