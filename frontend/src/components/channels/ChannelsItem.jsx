import {
  Button, Nav, Dropdown, ButtonGroup,
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../../store/slices/modalsSlice';
import { setCurrentChannel, selectCurrentChannelId } from '../../store/slices/channelsSlice';
import { MODAL_TYPES } from '../modals/constants';

const ChannelItem = ({ channelItem }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const currentChannelId = useSelector(selectCurrentChannelId);

  const buttonVariant = currentChannelId === channelItem.id ? 'secondary' : 'light';

  const handleSelectChannel = (channel) => {
    dispatch(setCurrentChannel(channel));
  };

  const handleRemoveChannel = () => {
    dispatch(openModal({
      type: MODAL_TYPES.REMOVE,
      id: channelItem.id,
      name: channelItem.name,
    }));
  };

  const handleRenameChannel = () => {
    dispatch(openModal({
      type: MODAL_TYPES.RENAME,
      id: channelItem.id,
      name: channelItem.name,
    }));
  };

  return (
    <Nav.Item>
      {channelItem.removable ? (
        <Dropdown as={ButtonGroup} drop="down" className="w-100">
          <Button
            onClick={() => handleSelectChannel(channelItem)}
            className="w-100 rounded-0 text-start text-truncate"
            variant={buttonVariant}
          >
            <span className="me-1">&#35;</span>
            {channelItem.name}
          </Button>
          <Dropdown.Toggle
            split
            variant={buttonVariant}
            id={`dropdown-split-button${channelItem.id}`}
          >
            <span className="visually-hidden">{t('chat.manage')}</span>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={handleRemoveChannel}>
              {t('modals.remove')}
            </Dropdown.Item>
            <Dropdown.Item onClick={handleRenameChannel}>
              {t('modals.rename')}
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ) : (
        <Button
          variant={buttonVariant}
          className="w-100 rounded-0 text-start text-truncate"
          onClick={() => handleSelectChannel(channelItem)}
        >
          <span className="me-1">&#35;</span>
          {channelItem.name}
        </Button>
      )}
    </Nav.Item>
  );
};

export default ChannelItem;
