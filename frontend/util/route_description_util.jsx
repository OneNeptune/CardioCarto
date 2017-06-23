import React from 'react';

export const start = (route) => {
  const startArray = route.start_address.split(',');
  const startString = startArray.slice(-3,-1).join();
  const startDesc = startString.replace(/[0-9]/g, '').slice(1,-1);
  return startDesc;
};

export const end = (route) => {
  const endArray = route.finish_address.split(',');
  const endString = endArray.slice(-3,-1).join();
  const endDesc = endString.replace(/[0-9]/g, '').slice(1,-1);
  return endDesc;
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
