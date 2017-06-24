import React from 'react';

export const cityName = (string) => {
  if (!string) return 'Location unknown';
  const cityArray = string.split(',');
  const cityString = cityArray.slice(-3,-1).join();
  const cityDesc = cityString.replace(/[0-9]/g, '').slice(1,-1);
  return cityDesc;
};

export const start = (route) => {
  return cityName(route.start_address);
};

export const end = (route) => {
  return cityName(route.finish_address);
};

export const distance = (route) => {
  return (route.distance * 0.000621371192).toFixed(1);
};

export const sentence = (route) => {
  return(
    <dd>
      This is a { distance(route) } mi route starting
      in { start(route) } and ending in { end(route) }. This route was
      created by <strong>{ route.user_name }</strong> on { route.created_at }.
    </dd>
  );
};
