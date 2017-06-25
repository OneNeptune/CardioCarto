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

export const updateRoute = (updatedRoute) => (
  $.ajax({
    type: 'PATCH',
    url: `/api/routes/${updatedRoute.id}`,
    data: { route: updatedRoute },
  })
);


export const deleteRoute = (id) => (
  $.ajax({
    type: 'DELETE',
    url: `/api/routes/${id}`,
  })
);
