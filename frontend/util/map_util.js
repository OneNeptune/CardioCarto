export const request = (start, end, waypoints) => ({
  origin: start,
  destination: end,
  waypoints: waypoints,
  optimizeWaypoints: false,
  travelMode: 'WALKING'
});

export const duration = (routes) => {
  const time = routes.legs.map((leg) => leg.duration.value);
  return Math.floor(time.reduce((a, b) => a + b) * 0.4);
};

export const distance = (routes) => {
  const distances = routes.legs.map((leg) => leg.distance.value);
  return distances.reduce((a, b) => a + b);
};

export const start = (routes) => {
  return routes.legs[0].start_address;
};

export const finish = (routes) => {
  const lastIdx = routes.legs.length - 1;
  return routes.legs[lastIdx].end_address;
};

export const defaultRoute = () => ({
  polylines: "",
  duration: 0,
  distance: 0,
  start_address: "N/A",
  finish_address: "N/A",
});

export const formatTime = (seconds) => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return [
    h,
    m > 9 ? m : '0' + m,
    s > 9 ? s : '0' + s,
  ].filter(s => s).join(':');
};

export const formatDistance = (meters) => {
  return (meters * 0.000621371192).toFixed(1);
};

export const mapUrl = (polylines) => {
  const staticMap = 'https://maps.googleapis.com/maps/api/staticmap';
  const mapSize = '?size=639x354';
  const styles = '&style=feature:landscape.man_made|element:all|visibility:off&style=feature:poi.business|element:all|visibility:off&style=feature:road.local|element:all|visibility:on'
  const mapPath = '&path=weight:3%7Ccolor:red%7Cenc:';
  const apiKey = "&key=AIzaSyAheUtm6hUIj8FAM0Qd1vvouvj2Y4M9_Jw";

  return(
    staticMap + mapSize + styles + mapPath + polylines + apiKey
  );
};

export const mapOptions = (lat = 40.7447077, lng = -73.9948764) => (
  {
    center: {
      lat: lat,
      lng: lng
    },
    maxZoom: 18,
    zoom: 15,
    draggableCursor:'crosshair',
    clickableIcons: false,
    panControl: true,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: true,
    streetViewControl: false,
    overviewMapControl: true,
    rotateControl: true,
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
  }
);
