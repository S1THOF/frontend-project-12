import {
  Nav, Col, Button, Spinner,
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { PlusSquare } from 'react-bootstrap-icons';
import { useDispatch } from 'react-redux';
import { useGetChannelsQuery } from '../../api/channelsApi';
import { openModal } from '../../store/slices/modalsSlice';
import { MODAL_TYPES } from '../modals/constants';
import ModalComponent from '../modals/ModalComponent';
import ChannelItem from './ChannelsItem';

const Channels = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { data: channels = [], isLoading } = useGetChannelsQuery();

  const handleOpenModal = () => {
    dispatch(openModal({ type: MODAL_TYPES.ADD }));
  };

  return (
    <Col xs="4" md="2" className="border-end px-0 bg-light flex-column h-100 d-flex">
      <div className="d-flex mt-1 justify-content-between mb-2 ps-4 pe-2 p-4">
        <b>{t('chat.channels')}</b>
        <Button
          type="button"
          variant="group-vertical"
          className="p-0 text-primary"
          onClick={handleOpenModal}
        >
          <PlusSquare className="fs-5" />
          <span className="visually-hidden">{t('chat.plus')}</span>
        </Button>
      </div>

      <Nav className="flex-column nav-fill px-2 mb-3 overflow-auto h-100 d-block">
        {isLoading ? (
          <div className="d-flex justify-content-center align-items-center h-100">
            <Spinner animation="border" role="status" />
          </div>
        ) : (
          channels.map((channel) => (
            <ChannelItem
              key={channel.id}
              channelItem={channel}
            />
          ))
        )}
      </Nav>
      <ModalComponent />
    </Col>
  );
};

export default Channels;
