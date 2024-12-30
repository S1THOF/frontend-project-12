import { useSelector, useDispatch } from 'react-redux';
import { Modal as BootstrapModal } from 'react-bootstrap';
import { selectIsOpen, closeModal, selectType } from '../../store/slices/modalsSlice';
import { MODALS } from './constants';

const ModalComponent = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsOpen);
  const type = useSelector(selectType);

  const handleClose = () => {
    dispatch(closeModal());
  };

  const ModalContent = MODALS[type];

  return (
    <BootstrapModal show={isOpen} onHide={handleClose} centered>
      {ModalContent && <ModalContent handleClose={handleClose} />}
    </BootstrapModal>
  );
};

export default ModalComponent;
