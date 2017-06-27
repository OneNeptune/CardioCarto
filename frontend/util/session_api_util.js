export const createUser = (user) => (
  $.ajax({
    type: 'POST',
    url: '/api/users',
    data: { user }
  })
);

export const logIn = (user) => (
  $.ajax({
    type: 'POST',
    url: '/api/session',
    data: { user }
  })
);

export const logOut = () => (
  $.ajax({
    type: 'DELETE',
    url: '/api/session'
  })
);
