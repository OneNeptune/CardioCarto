export const fetchDashboard = () => (
  $.ajax({
    type: 'GET',
    url: '/api/users'
  })
);
