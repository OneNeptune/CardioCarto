export const updateUser = (formData, id) => {
  return $.ajax({
    type: 'PATCH',
    url: `/api/users/${id}`,
    dataType: "json",
    contentType: false,
    processData: false,
    data: formData,
  });
};
