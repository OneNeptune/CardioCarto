import React from 'react';
import * as MapUtil from '../../util/map_util.js';

class RouteShow extends React.Component {
  constructor(props) {
    super(props);

    this.createMap = this.createMap.bind(this);
  }

  createMap() {
    const { route } = this.props;
    const mapOptions = MapUtil.mapOptions();
    this.map = new google.maps.Map(this.refs.map, mapOptions);

    const decodedPath = google.maps.geometry.encoding.decodePath(route.polylines);
    const polyline = new google.maps.Polyline({
      path: decodedPath,
      strokeColor: 'red',
      strokeOpacity: .6,
      strokeWeight: 5
    });

    const startMarker = new google.maps.Marker({
      position: decodedPath[0],
      map: this.map,
      icon: 'https://maps.gstatic.com/intl/en_ALL/mapfiles/dd-start.png'
    });

    const finishMarker = new google.maps.Marker({
      position: decodedPath[decodedPath.length - 1],
      map: this.map,
      icon: 'https://maps.gstatic.com/intl/en_ALL/mapfiles/dd-end.png'
    });

    const bounds = new google.maps.LatLngBounds();

    const polylineBounds = polyline.getPath();
    for (let i = 0; i < polylineBounds.length; i++) {
      bounds.extend(polylineBounds.getAt(i));
    }

    this.map.fitBounds(bounds);
    polyline.setMap(this.map);
  }

  componentDidMount() {
    const routeId = this.props.match.params.routeId;
    this.props.fetchSingleRoute(routeId)
      .then(() => this.createMap());
  }

  componentWillReceiveProps(nextProps) {
    const currentRouteId = this.props.match.params.routeId;
    const nextRouteId = nextProps.match.params.routeId;
    if (currentRouteId !== nextRouteId) {
      this.props.fetchSingleRoute(nextRouteId);
    }
  }

  render() {
    const { route } = this.props;
    console.log(this.props);
    if (!route) return null;
    return(
      <section className='route-wrapper'>
        <section className='route-content-wrapper'>
          <section className='route-show-wrapper'>
            <section className='route-show-details-header'>
              <h3 className='route-details-label'>{ route.title }</h3>
            </section>
            <section className='route-show-details'>
              <section className='route-show-info'>
                <h4>Distance</h4>
                <p>
                  { MapUtil.formatDistance(route.distance) }
                </p>
                <sub>miles</sub>
              </section>
            </section>

            <section className='route-show-map' ref="map">
            </section>

          </section>

          <section className='route-show-sidebar'>
            <section className='route-sidebar-tools'>

            </section>
            <section className='route-sidebar-comments'>
              <form className='route-sidebar-comment-form'>

              </form>
              <ul className='sidebar-comments'>

              </ul>
            </section>
          </section>
        </section>
      </section>
    );
  }
}

export default RouteShow;
