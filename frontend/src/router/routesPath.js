export const PAGE_LOGIN = 'LOGIN';
export const PAGE_SIGNUP = 'SIGNUP';
export const PAGE_ROOT = 'ROOT';
export const PAGE_NOT_FOUND = 'NOT_FOUND';

const PAGE_ROUTES = {
  [PAGE_LOGIN]: '/login',
  [PAGE_SIGNUP]: '/signup',
  [PAGE_ROOT]: '/',
  [PAGE_NOT_FOUND]: '*',
  EMPTY_PATH: '',
};

export const getPageRoute = (page) => PAGE_ROUTES[page] || PAGE_ROUTES.EMPTY_PATH;
