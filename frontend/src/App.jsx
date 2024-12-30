import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header';

const App = () => (
  <>
    <ToastContainer
      autoClose={2000}
      draggable
    />
    <div className="d-flex flex-column h-100">
      <Header />
      <Outlet />
    </div>
  </>
);

export default App;
