const API_V1 = 'api/v1';

export const API_LOGIN = 'LOGIN';
export const API_SIGNUP = 'SIGNUP';
export const API_CHANNELS = 'CHANNELS';
export const API_MESSAGES = 'MESSAGES';
export const API_BASE = 'BASE';

const API_ROUTES = {
  [API_LOGIN]: `${API_V1}/login`,
  [API_SIGNUP]: `${API_V1}/signup`,
  [API_CHANNELS]: `${API_V1}/channels`,
  [API_MESSAGES]: `${API_V1}/messages`,
  [API_BASE]: '.',
  EMPTY_PATH: '',
};

export const getApiRoute = (api) => API_ROUTES[api] || API_ROUTES.EMPTY_PATH;
