class MapHelper {
  constructor(map, updateRoute){
    this.map = map;
    this.routeMarkers = {};
    this.route = { polylines: "", duration: 0, distance: 0, start: "", finish: "" }

    window.map = this.map

    this.labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.labelIndex = 0;

    this.updateRoute = updateRoute;
    this.calcRoute = this.calcRoute.bind(this);
  }

  getRoute(){
    if (this.route.polyline) {
      return [true, this.route];
    } else {
      return [false, this.route];
    }
  }

  addMarker(position){
    const marker = new google.maps.Marker({
      position: position,
      label: this.labels[this.labelIndex++ % this.labels.length],
      map: this.map,
    });


    this.routeMarkers[marker.label] = marker;
  }

  directions() {
    if (this.routeMarkers['B']) {
      this.directionsDisplay = new google.maps.DirectionsRenderer();
      this.userRoute = new google.maps.DirectionsService();
      this.directionsDisplay.setMap(this.map);
      this.directionsDisplay.setOptions( { suppressMarkers: true } );
      this.calcRoute();
    }
  }

  calcRoute() {
    const start = this.routeMarkers['A'].position;
    const end = this.routeMarkers[this.labels[this.labelIndex - 1]].position;

    const waypoints = [];

    if (this.labelIndex > 1) {
      for(let i = 1; i < this.labelIndex - 1; i++) {
        waypoints.push({
          location: this.routeMarkers[this.labels[i]].position,
          stopover: true
        });
      }
    }

    const request = {
      origin: start,
      destination: end,
      waypoints: waypoints,
      optimizeWaypoints: false,
      travelMode: 'WALKING'
    };

    this.userRoute.route(request, (result, status) => {
      if (status === 'OK') {
        const routes = result.routes[0];

        const time = routes.legs.map((leg) => leg.duration.value);
        const distance = routes.legs.map((leg) => leg.distance.value);
        const lastIdx = routes.legs.length - 1;

        this.route.polylines = routes.overview_polyline;
        this.route.duration = time.reduce((a, b) => a + b);
        this.route.distance = distance.reduce((a, b) => a + b);
        this.route.start = routes.legs[0].start_address;
        this.route.finish = routes.legs[lastIdx].end_address;

        this.directionsDisplay.setDirections(result);

        this.updateRoute(this.route);

      }
    });

  }
}

export default MapHelper;
