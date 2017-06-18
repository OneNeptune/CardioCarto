````{
  currentUser: {
    id: 1,
    name: "Michael",
    avatar_url: "some_url"
  },
  forms: {
    signUp: { errors: [] },
    logIn: { errors: [] },
    createRoute: { errors: [] }
  },
  routes: {
    entities: {
      1: {
        id: 1,
        title: "Central Park Jog",
        distance: 2.4,
        preview_url: "some_url",
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
  friends: {
    1: {
      id: 2,
      first_name: "John Doe",
      avatar_url: "some_url"
    },
    2: {
      id: 3,
      first_name: "Jane Doe",
      avatar_url: "some_url"
    }
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
}````
