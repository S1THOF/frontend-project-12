import { useLocation, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../store/slices/authSlice';
import { PAGE_LOGIN, getPageRoute } from './routesPath';

const PrivateRoute = ({ element }) => {
  const isAuth = useSelector(selectIsAuth);
  const location = useLocation();

  return (
    isAuth ? element : <Navigate to={getPageRoute(PAGE_LOGIN)} state={{ from: location }} />
  );
};

export default PrivateRoute;
