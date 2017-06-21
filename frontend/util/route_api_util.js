export const fetchAllRoutes = () => (
  $.ajax({
    type: 'GET',
    url: '/api/routes',
  })
);

export const fetchSingleRoute = (id) => (
  $.ajax({
    type: 'GET',
    url: `/api/routes/${id}`,
  })
);

export const createRoute = (route) => (
  $.ajax({
    type: 'POST',
    url: '/api/routes',
    data: { route }
  })
);
