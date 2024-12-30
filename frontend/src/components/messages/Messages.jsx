import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Col, Spinner } from 'react-bootstrap';
import { useGetMessagesQuery } from '../../api/messagesApi';
import { selectCurrentChannel } from '../../store/slices/channelsSlice';
import MessageForm from './MessageForm';

const Messages = () => {
  const { t } = useTranslation();
  const messageRef = useRef();

  const { data: messages = [], isLoading } = useGetMessagesQuery();

  const currentChannel = useSelector(selectCurrentChannel);
  const channelMessages = messages.filter((message) => message.channelId === currentChannel.id);

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollTop = messageRef.current.scrollHeight;
    }
  }, [messages, currentChannel]);

  return (
    <Col className="p-0 h-100">
      <div className="d-flex flex-column h-100">
        <div className="bg-light mb-4 p-3 shadow-sm small">
          <p className="m-0">
            <b>
              {`# ${currentChannel.name}`}
            </b>
          </p>
          <span className="text-muted">
            {t('chat.message', { count: channelMessages.length })}
          </span>
        </div>
        <div id="messages-box" className="chat-messages overflow-auto px-5" ref={messageRef}>
          {isLoading ? (
            <div className="d-flex justify-content-center align-items-center h-100">
              <Spinner animation="border" role="status" />
            </div>
          ) : (
            channelMessages.map((message) => (
              <div key={message.id} className="text-break mb-2">
                <b>{message.username}</b>
                {': '}
                {message.message}
              </div>
            ))
          )}
        </div>
        <div className="mt-auto px-5 py-3">
          <MessageForm currentChannel={currentChannel} />
        </div>
      </div>
    </Col>
  );
};
export default Messages;
