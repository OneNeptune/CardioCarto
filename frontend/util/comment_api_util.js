export const createComment = (comment) => (
  $.ajax({
    type: 'POST',
    url: '/api/comments',
    data: { comment }
  })
);

export const deleteComment = (id) => (
  $.ajax({
    type: 'DELETE',
    url: `/api/comments/${id}`
  })
);
