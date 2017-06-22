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
  start: "N/A",
  finish: "N/A"
});
