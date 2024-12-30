import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Navbar, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { selectIsAuth, clearUserData } from '../store/slices/authSlice';
import { PAGE_ROOT, getPageRoute } from '../router/routesPath';

const Header = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const handleLogout = () => {
    dispatch(clearUserData());
  };

  return (
    <Navbar expand="lg" className="shadow-sm navbar-light bg-white">
      <Container>
        <Navbar.Brand as={NavLink} to={getPageRoute(PAGE_ROOT)}>{t('header.title')}</Navbar.Brand>
        {isAuth && <Button onClick={handleLogout}>{t('header.logout')}</Button>}
      </Container>
    </Navbar>
  );
};

export default Header;
