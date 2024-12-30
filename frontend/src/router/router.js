import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import PrivateRoute from './private-route';
import ChatPage from '../pages/ChatPage';
import LoginPage from '../pages/AuthPages/LoginPage/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';
import SignUpPage from '../pages/AuthPages/SignUpPage/SignUpPage';
import {
  PAGE_ROOT, PAGE_LOGIN, PAGE_SIGNUP, PAGE_NOT_FOUND, getPageRoute,
} from './routesPath';

const router = createBrowserRouter([
  {
    path: getPageRoute(PAGE_ROOT),
    element: <App />,
    children: [
      {
        index: true,
        element: <PrivateRoute element={<ChatPage />} />,
      },
      {
        path: getPageRoute(PAGE_LOGIN),
        element: <LoginPage />,
      },
      {
        path: getPageRoute(PAGE_SIGNUP),
        element: <SignUpPage />,
      },
      {
        path: getPageRoute(PAGE_NOT_FOUND),
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
