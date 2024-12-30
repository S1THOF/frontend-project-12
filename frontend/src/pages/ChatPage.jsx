import { Container, Row } from 'react-bootstrap';
import Channels from '../components/channels/Channels';
import Messages from '../components/messages/Messages';

const ChatPage = () => (
  <Container className="h-100 my-4 overflow-hidden rounded shadow">
    <Row className="h-100 bg-white flex-md-row">
      <Channels />
      <Messages />
    </Row>
  </Container>
);

export default ChatPage;
