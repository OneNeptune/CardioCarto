import * as MapUtil from '../../../util/map_util.js';

class MapHelper {
  constructor(map, updateRoute){
    this.map = map;
    this.routeMarkers = {};
    this.route = MapUtil.defaultRoute();

    this.initializeDirections();

    this.labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.labelIndex = 0;

    this.updateRoute = updateRoute;

    this.calcRoute = this.calcRoute.bind(this);
    this.directions = this.directions.bind(this);
    this.extractResults = this.extractResults.bind(this);
    this.clearMap = this.clearMap.bind(this);
  }

  initializeDirections() {
    this.directionsDisplay = new google.maps.DirectionsRenderer();
    this.userRoute = new google.maps.DirectionsService();
    this.directionsDisplay.setMap(this.map);
    this.directionsDisplay.setOptions( { suppressMarkers: true } );

    google.maps.event.addListener(
      this.directionsDisplay,
      'directions_changed',
      () => {
      this.updateRoute(this.route);
    });
  }

  getRoute(){
    if (this.route.polyline) {
      return [true, this.route];
    } else {
      return [false, this.route];
    }
  }

  extractResults(resultRoutes) {
    const routes = resultRoutes[0];

    this.route.polylines = routes.overview_polyline;
    this.route.duration = MapUtil.duration(routes);
    this.route.distance = MapUtil.distance(routes);
    this.route.start_address = MapUtil.start(routes);
    this.route.finish_address = MapUtil.finish(routes);
  }

  addMarker(position){
    const marker = new google.maps.Marker({
      position: position,
      label: this.labels[this.labelIndex++ % this.labels.length],
      map: this.map
    });

    this.routeMarkers[marker.label] = marker;
  }

  undoMarker() {
    if (this.labelIndex > 0) {
      const markers = this.routeMarkers;
      const lastLabel = this.labels[this.labelIndex - 1];

      this.routeMarkers[lastLabel].setMap(null);
      delete this.routeMarkers[lastLabel];
      this.labelIndex--;

      this.directions();
    }
  }

  clearMap() {
    this.directionsDisplay.setDirections({routes: []});
  }

  directions() {
    if (this.labelIndex > 1) {
      this.calcRoute();
    } else {
      this.clearMap();
      this.route = MapUtil.defaultRoute();
      this.updateRoute(this.route);
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

    const request = MapUtil.request(start, end, waypoints);
    this.userRoute.route(
      request,
      (result, status) => {
        if (status === 'OK') {
          this.extractResults(result.routes);
          this.directionsDisplay.setDirections(result);
        }
    });

  }
}

export default MapHelper;
