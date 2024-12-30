import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Modal as BootstrapModal, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useRemoveChannelMutation } from '../../api/channelsApi';
import { setDefaultChannel, selectCurrentChannelId } from '../../store/slices/channelsSlice';
import { selectChannelId } from '../../store/slices/modalsSlice';
import LoadingSpinner from '../LoadingSpinner';

const RemoveChannelModal = ({ handleClose }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const channelId = useSelector(selectChannelId);
  const currentChannelId = useSelector(selectCurrentChannelId);
  const [removeChannel, { isLoading }] = useRemoveChannelMutation();

  const handleRemoveChannel = async () => {
    try {
      await removeChannel(channelId).unwrap();
      toast.success(t('toasts.removeChannel'));
      if (channelId === currentChannelId) {
        dispatch(setDefaultChannel);
      }
    } catch (err) {
      toast.error(t('toasts.connectionError'));
    }
    handleClose();
  };

  return (
    <>
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title>
          {t('modals.removeTitle')}
        </BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>
        <p className="lead">{t('modals.text')}</p>
        <div className="d-flex justify-content-end">
          <Button
            type="button"
            variant="secondary"
            className="me-2"
            onClick={handleClose}
          >
            {t('modals.cancel')}
          </Button>
          <Button
            type="submit"
            variant="danger"
            onClick={() => handleRemoveChannel(channelId)}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <LoadingSpinner />
                <span>{t('modals.remove')}</span>
              </>
            ) : (
              t('modals.remove')
            )}
          </Button>
        </div>
      </BootstrapModal.Body>
    </>
  );
};

export default RemoveChannelModal;
