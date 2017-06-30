# CardioCarto
URL: [www.cardiocarto.com](https://www.cardiocarto.com/)

![cardiocarto-frontpage]

**Cardio**vascular **Carto**graphy draws inspiration from MapMyRun and allows users to map and document their running routes. When a route is documented it allows the user to keep track of the route's distance and duration and for created maps that have not been logged as complete, provides an estimated duration. Each user also has a dashboard that displays their most recent completed routes and provides their total distance and duration across all completed routes.

Included are social features which allow users to upload and display an avatar, search for friends, create friendships, and view a feed of recent activity from friends.

## Project Information
This project was developed in two weeks utilizing Ruby on Rails, React, Redux, Google Maps, and Amazon S3.

## Key Features & Implementation

### Route Creation

#### Feature
Using Google Maps JavaScript API users are able to draw their route by placing markers and receiving real-time rendering and feedback on their route's attributes.
![route-create]

#### Implementation

##### Intuitive Mapping Tools
In the process of creating a route, a user would expect tools that showed them useful information based on their current map, their current location, as well as the ability to reposition placed markers, undo markers, and to clear the entire map without requiring a reload or losing their current view.

![intuitive-tools]

When a marker is created, it is designated as being draggable and an event listener is added to direct the map reprocess the directions when a marker is dragged.

``` JavaScript
addMarker(position){
  const marker = new google.maps.Marker({
    //... other marker creation code
    draggable: true
  });

  marker.addListener('dragend', () => this.directions());

  //... rest of code
}
```

##### Syncing Duration Formats
The user enters their completion time of the route in HH:MM:SS format, the Google Maps API returns time not as a total, but for each leg segment, and the db schema stores time in seconds. The route creator uses a utility to keep all these values in sync.

![useful-info]

First I process each leg of the route Google Maps returns as a response to the directions query to cumulative estimated duration for the route.
``` JavaScript
export const duration = (routes) => {
  const time = routes.legs.map((leg) => leg.duration.value);
  return Math.floor(time.reduce((a, b) => a + b);
};
```

Now to present this in a useful format to the user, it's processed again to display in HH:MM:SS.

``` JavaScript
export const formatTime = (seconds) => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return [
    h,
    m > 9 ? m : '0' + m,
    s > 9 ? s : '0' + s
  ].filter(s => s).join(':');
};
```

The user may mark the route as completed, and enter their own time that differs from the walking estimate by Google Maps, the user enters this as HH:MM:SS so I needed to update the state (which stores duration in seconds) in real time to prepare for form submission, for this I wrote a small helper to make this conversion easier:

``` JavaScript
export const completionTime = (hh, mm, ss) => (
  (hh*3600) + (mm*60) + Number(ss)
);
```

These tools are used throughout the site the keep backend values and presentational values synced to provide the user with a meaningful format and minimize the number of columns on the backend.

##### Marker Management
I keep track of the markers and the appropriate order for the directions service by labeling them alphabetically, and storing them as key value pairs.
``` JavaScript
addMarker(position){
  const marker = new google.maps.Marker({
    position: position,
    label: this.labels[this.labelIndex++ % this.labels.length],
    map: this.map,
    draggable: true
  });

  marker.addListener('dragend', () => this.directions());

  this.routeMarkers[marker.label] = marker;
}
```
This method was chosen as in addition to requiring a start and end position, Google Maps Directions service accepts ordered waypoints. By tracking the label index, it becomes quicker to generate ordered requests.

### User Index
The route index shows all the user's created and completed routes. It provides view filtering to show the specific route types and display method the user selects.

![route-index]

#### Implementation

##### Index Item Creation

To facilitate DRY coding practices, I integrated dynamic index generation dependent on user selected filters. `DetailIndexItem` or `ThumbnailIndexItem` is provided as a conditional parameter to `createIndexItems()` where it is then used to assign the component type to be used in building the index.


``` JavaScript
createIndexItems(type, routes) {
  const DetailItem = ({ component: Component, route }) => (
    <Component route={ route }/>
  );

  return routes.map((route) => (<
    DetailItem
      component={ type }
      key={`${type}` + route.id}
      route={ route }
    />)
  );
}
```

### Friend search
To allow users to find and send friend requests without needing a direct link to that user's page. I implemented a search of users that are not currently in a friendship stage (sent / pending / active) with the user.

![friend-search]

#### Implementation
In order to filter down to the eligible users that the current user can send a request to, a backend db query is necessary:

```Ruby
def find_friends(query)
  User.all.where
    .not(id: self
      .friends
      .push(self)
      .push(self.pending_friends))
    .where("first_name LIKE :query OR last_name LIKE :query", query: "%#{query}%")
end
```

### Other Highlights At-A-Glance
Below is a list of other noteworthy features completed during the two week project not demonstrated above.

1. **Route Show**
    * Generated paragraph description of the route based on captured data.
    * User submitted comments
    * Mark route as completed / incomplete and update route completion time through modal.
2. **User Dashboard**
    * Total distance of all completed routes.
    * Total duration of all completed routes.
    * Most recent completed routes in detail, pending route thumbnails.
3. **Friendship dashboard**
    * Active friendships.
    * Friendship requests awaiting their response.
    * Sent requests that can be canceled.
4. **User**
    * Modal with stylized image upload to Amazon S3 in order to change avatar.

## Future Concepts
I have really enjoyed working on this project for two weeks and during the course of development I was able to identify opportunities to continue working on and expand the project. I have listed the most viable of those opportunities below and genuinely look forward to tackling them.

#### User Profile Pages
Re-purpose the logged in user's dashboard into a more generalized component to allow users to view other users' routes and statistics.

#### Popular Area Heat Maps
Use user submissions to provide a heat map of popular route locations.

#### Efficient Friend Search
The current search method sends a request to the API to return a list of all potential friends matching a query string. Bright minds have invested a lot of time developing strong search utilities and I would like to implement a 3rd party tool for search.

#### Port to React Native
Recreate the functionality of the app utilizing React Native.

#### Real-time Run Tracking
I currently implemented a current location tool to center the map on the user's current location. I would like to explore expanding this to allow a user to track runs in real time. Pressing start at the beginning would drop the first marker and continue to check the user's current location at a set interval, dropping more markers as the user moves away from the last marker.

[cardiocarto-frontpage]: /app/assets/images/demo/cardiocarto.png "CardioCardo Frontpage"
[route-create]: /app/assets/images/demo/route-create.gif "Route Creation"
[useful-info]: /app/assets/images/demo/useful-info.gif "Useful info"
[intuitive-tools]: /app/assets/images/demo/intuitive-tools.gif "Intuitive Tools"
[route-index]: /app/assets/images/demo/route-index.gif "Route Index"
[friend-search]: /app/assets/images/demo/friend-search.gif "Friend search"
