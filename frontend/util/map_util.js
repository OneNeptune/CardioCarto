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

export const completionTime = (hh, mm, ss) => (
  (hh*3600) + (mm*60) + Number(ss)
);

export const finish = (routes) => {
  const lastIdx = routes.legs.length - 1;
  return routes.legs[lastIdx].end_address;
};

export const defaultRoute = () => ({
  title: '',
  polylines: '',
  duration: 0,
  distance: 0,
  start_address: 'N/A',
  completed: false,
  finish_address: 'N/A',
  hh: '',
  mm: '',
  ss: '',
  completion_time: 0
});

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

export const formatDistance = (meters) => {
  return (meters * 0.000621371192).toFixed(1);
};

export const imgUrl = (polylines, x, y) => {
  const staticMap = 'https://maps.googleapis.com/maps/api/staticmap';
  const mapSize = `?size=${x}x${y}`;
  const styles = '&style=feature:landscape.man_made|element:all|visibility:off&style=feature:administrative.locality|element:labels.text|visibility:off&style=feature:poi.business|element:all|visibility:off&style=feature:road.local|element:all|visibility:on'
  const mapPath = '&path=weight:3%7Ccolor:red%7Cenc:';
  const apiKey = "&key=AIzaSyAheUtm6hUIj8FAM0Qd1vvouvj2Y4M9_Jw";

  return(
    staticMap + mapSize + styles + mapPath + polylines + apiKey
  );
};

export const timeSince = (date) => {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);
  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + " years";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes";
  }
  return Math.floor(seconds) + " seconds";
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
