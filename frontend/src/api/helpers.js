const prepareHeaders = (headers, { getState }) => {
  const state = getState();
  const { token } = state.auth;

  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }
  return headers;
};

export default prepareHeaders;
