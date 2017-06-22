import React from 'react';
import MapHelper from './map_helper';

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      polylines: "",
      duration: 0,
      distance: 0,
      start: "N/A",
      finish: "N/A"
    };
    this.locationButton = this.locationButton.bind(this);
    this.currentLocation = this.currentLocation.bind(this);
    this.clearMap = this.clearMap.bind(this);
  }

  createMap(lat = 40.7447077, lng = -73.9948764) {
    const mapOptions = {
      center: {
        lat: lat,
        lng: lng
      },
      maxZoom: 18,
      zoom: 15,
      draggableCursor:'crosshair',
      clickableIcons: false,
      styles: [
        {
          "featureType": "landscape.man_made",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi.business",
          "elementType": "labels.text",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi.business",
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "on"
            }
          ]
        }
      ]
    };
    this.map = new google.maps.Map(this.refs.map, mapOptions);
    this.MapHelper = new MapHelper(this.map, this.props.updateRoute);

    this.map.addListener('click', (e) => {
      this.MapHelper.addMarker(e.latLng);
      this.MapHelper.directions();
    });

    navigator.geolocation.getCurrentPosition(({ coords }) => {
      this.setState( {center: new google.maps.LatLng(
        coords.latitude, coords.longitude) });
    });
  }

  locationButton() {
    if (this.state.center) {
      return(
        <button
          onClick={ this.currentLocation }
          className='location'>
            Current Location
        </button>
      )
    } else {
      return(<button
        disabled={true}
        className='location-disabled'>
          Location Unavailable
      </button>)
    }
  }

  currentLocation() {
    this.map.setZoom(16);
    this.map.setCenter(this.state.center);
  }

  undoMarker() {
    this.MapHelper.undoMarker();
  }

  clearMap() {
    this.createMap();
  }

  componentDidMount() {
    this.createMap();
  }

  render() {
    return (
      <section className="map-wrapper">
        <section className='map-controls'>
          { this.locationButton() }
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
