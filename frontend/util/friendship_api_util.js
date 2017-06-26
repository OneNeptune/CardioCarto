export const fetchAllFriendships = () => (
  $.ajax({
    type: 'GET',
    url: '/api/friendships',
  })
);

export const fetchSingleFriendship = (id) => (
  $.ajax({
    type: 'GET',
    url: `/api/friendships/${id}`,
  })
);

export const createFriendship = (friendship) => (
  $.ajax({
    type: 'POST',
    url: '/api/friendships/',
    data: { friendship },
  })
);

export const updateFriendship = (friendship) => (
  $.ajax({
    type: 'PATCH',
    url: `/api/friendships/${friendship.id}`,
    data: { friendship },
  })
);

export const destroyFriendship = (id) => (
  $.ajax({
    type: 'DELETE',
    url: `/api/friendships/${id}`,
  })
);
