import { Spinner } from 'react-bootstrap';

const LoadingSpinner = () => (
  <div className="d-inline-block right-1 pe-2">
    <Spinner
      as="span"
      animation="border"
      size="sm"
      role="status"
      aria-hidden="true"
    />
  </div>
);

export default LoadingSpinner;
