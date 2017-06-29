# CardioCarto
URL: [www.cardiocarto.com](https://www.cardiocarto.com/)

![cardiocarto-frontpage]

**Cardio**vascular **Carto**graphy draws inspiration from MapMyRun and allows users to map and document their running routes. When a route is documented it allows the user to keep track of the route's distance and duration - for created maps that have not been logged as complete, it provides an estimated duration.

Included are social features which allow users to upload and display an avatar, search for friends, create friendships, and view a feed of recent activity from friends.

## Project Information
This project was developed in two weeks utilizing Ruby on Rails, React, Redux, Google Maps, and Amazon S3.

## Key Features & Implementation

### Route Creation

#### Feature
Using Google Maps Javascript API users are able to draw their route by placing markers and receiving real-time rendering and feedback on their route's attributes.
![route-create]

#### Implementation

##### Marker Management
I keep track of the markers and the appropriate order for the directions service by labeling them alphabetically, and storing them as key value pairs.
``` JavaScript
addMarker(position){
  const marker = new google.maps.Marker({
    position: position,
    label: this.labels[this.labelIndex++ % this.labels.length],
    map: this.map
  });

  this.routeMarkers[marker.label] = marker;
 }
```
This method was chosen as in addition to requiring a start and end position, Google Maps Directions service accepts ordered waypoints. By tracking the label index, it becomes quicker to generate ordered requests.

### User Index
The route index shows all the user's created and completed routes. It provides view filtering to show the specific route types and display method the user selects.

![route-index]

#### Implementation

##### Index Item Creation

To facilitate DRY coding practices, I integrated dynamic index generation dependent on user selected filters. `DetailIndexItem` or `ThumbnailIndexItem` is provided as a conditional paramter to `createIndexItems` where it is then used to assign the component type to be used in building the index.


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

### Other Highlights At-A-Glance
Below is a list of other noteworthy features completed during the two week project not demonstrated above.

1. **Route creation**
    * Center map on current location.
    * Undo last marker placement.
    * Clear all markers from map without generating a new map.
2. **Route Show**
    * Generated paragraph description of the route based on captured data.
    * User submitted comments
    * Mark route as completed / incomplete and update route completion time through modal.
3. **User Dashboard**
    * Total distance of all completed routes.
    * Total duration of all completed routes.
    * Most recent completed routes in detail, pending route thumbnails.
4. **Friendships**
    * Users can search for other users using approximate string matching.
    * Friendship dashboard that allows users to view:
      1. Active friendships.
      2. Friendship requests awaiting their response.
      3. Sent requests that can be cancelled.
5. **User**
    * Modal with stylized image upload to Amazon S3 in order to change avatar.

## Future Concepts
I have really enjoyed working on this project for two weeks and during the course of development I was able to identify opportunities to continue working on and expand the project. I have listed the most viable of those opportunities below and genuinely look forward to tackling them.

#### User Profile Pages
Repurpose the logged in user's dashboard into a more generalized component to allow users to view other users' routes and statistics.

#### Real-time Run Tracking
I currently implemented a current location tool to center the map on the user's current location. I would like to explore expanding this to allow a user to track runs in real time. Pressing start at the beginning would drop the first marker and continue to check the user's current location at a set interval, dropping more markers as the user moves away from the last marker.

#### Popular Area Heat Maps
Use user submissions to provide a heat map of popular route locations.

#### Efficient Friend Search
The current search method sends a request to the API to return a list of all potential friends matching a query string. Bright minds have invested a lot of time developing strong search utilities and I would like to implement a 3rd party tool for search.

#### Port to React Native
Recreate the functionality of the app utilizing React Native.

[cardiocarto-frontpage]: https://raw.githubusercontent.com/OneNeptune/CardioCarto/master/app/assets/images/demo/cardiocarto.png "CardioCardo Frontpage"
[route-index]: https://raw.githubusercontent.com/OneNeptune/CardioCarto/master/app/assets/images/demo/route-index.gif "Route Index"
[route-create]: https://raw.githubusercontent.com/OneNeptune/CardioCarto/master/app/assets/images/demo/route-create.gif "Route Creation"
