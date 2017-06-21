import React from 'react';
import MapHelper from './map_helper';

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = { polylines: "", duration: 0, distance: 0, start: "", finish: "" }
  }

  createMap() {
    const mapOptions = {
      center: {
        lat: 40.7447077,
        lng: -73.9948764
      },
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
  }

  componentDidMount() {
    this.createMap();
  }

  render() {
    return (
      <section className="map-wrapper">
        <section className="map" ref="map">

        </section>
      </section>
    );
  }
}

export default Map;
