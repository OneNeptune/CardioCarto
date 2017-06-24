export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveErrors = (form, errors) => ({
  type: RECEIVE_ERRORS,
  form,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});
