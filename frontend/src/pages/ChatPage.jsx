import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Channels from '../components/channels/Channels';
import Messages from '../components/messages/Messages';
import ModalComponent from '../components/modals/index';

const ChatPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container className="h-100 my-4 overflow-hidden rounded shadow">
      <Row className="h-100 bg-white flex-md-row">
        <Channels onOpenModal={handleOpenModal} />
        <Messages />
      </Row>
      {isModalOpen && <ModalComponent onClose={handleCloseModal} />}
    </Container>
  );
};

export default ChatPage;
