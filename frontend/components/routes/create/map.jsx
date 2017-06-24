import React from 'react';
import MapHelper from './map_helper';
import * as MapUtil from '../../../util/map_util.js';


class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      polylines: "",
      duration: 0,
      distance: 0,
      start_address: "N/A",
      finish_address: "N/A",
    };
    // this.locationButton = this.locationButton.bind(this);
    // this.currentLocation = this.currentLocation.bind(this);
    this.undoMarker = this.undoMarker.bind(this);
    this.clearMap = this.clearMap.bind(this);
  }

  createMap() {
    const mapOptions = MapUtil.mapOptions();
    this.map = new google.maps.Map(this.refs.map, mapOptions);
    this.MapHelper = new MapHelper(this.map, this.props.updateRoute);

    this.map.addListener('click', (e) => {
      this.MapHelper.addMarker(e.latLng);
      this.MapHelper.directions();
    });

    // navigator.geolocation.getCurrentPosition(({ coords }) => {
    //     this.setState( {center: new google.maps.LatLng(
    //       coords.latitude, coords.longitude) });
    // });
  }

  // locationButton() {
  //   if (this.state.center) {
  //     return(
  //       <button
  //         onClick={ this.currentLocation }
  //         className='location'>
  //           Current Location
  //       </button>
  //     )
  //   } else {
  //     return(<button
  //       disabled={true}
  //       className='location-disabled'>
  //         Location Unavailable
  //     </button>)
  //   }
  // }

  // currentLocation() {
  //   this.map.setZoom(16);
  //   this.map.setCenter(this.state.center);
  // }

  undoMarker() {
    this.MapHelper.undoMarker();
  }

  clearMap() {
    this.createMap();
    this.MapHelper.directions();
  }

  componentDidMount() {
    this.createMap();
  }

  render() {
    return (
      <section className="map-wrapper">
        <section className='map-controls'>
          <button
            onClick={ this.undoMarker }
            className='undo'>
            Undo
          </button>
          <button
            onClick={ this.clearMap }
            className='clear'>
              Clear
          </button>
        </section>

        <section className="map" ref="map">
        </section>
      </section>
    );
  }
}

export default Map;
