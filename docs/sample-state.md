````
{
  session: {
    currentUser: {
      id: 1,
      first_name: "Michael",
      last_name: "Bennett"
    }
  },
  errors: {
    signUp: [],
    logIn: [],
    createRoute: []
  },
  routes: {
    entities: {
      1: {
        id: 1,
        title: "Central Park Jog",
        distance: 2.4,
        duration: 23429384234,
        completed: true
      },
      2: {
        id: 2
        user_id: 3
        title: "Brooklyn Bridge Tour"
        preview_url: "some_url"
        polylines: ""
        distance: 8.2
        duration: 0
        completed: false
      }
    },
    currentRoute: 2
  },
  dashboard: {
    most_recent: [],
    pending: [],
    total_duration: 0,
    total_distance: 0,
    location: '',
    loaded: false
  },
  friends: {
    potential_friends: [],
    active_friends: []
  },
  comments: {
    1: {
      id: 1,
      author_id: 2,
      route_id: 1,
      body: "impressive run"
    },
    2: {
      id: 2,
      author_id: 2,
      route_id: 2,
      body: "we should run this soon!"
    }
  }
}
````
