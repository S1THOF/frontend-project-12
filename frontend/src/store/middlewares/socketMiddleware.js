import { channelsApi } from '../../api/channelsApi';
import { messagesApi } from '../../api/messagesApi';

const socketMiddleware = (socket) => (store) => {
  socket.on('newChannel', (newChannel) => {
    store.dispatch(channelsApi.util.updateQueryData('getChannels', undefined, (draft) => {
      draft.push(newChannel);
    }));
  });

  socket.on('removeChannel', ({ id }) => {
    store.dispatch(
      channelsApi.util.updateQueryData('getChannels', undefined, (draft) => draft.filter((channel) => channel.id !== id)),
    );
  });

  socket.on('renameChannel', (updatedChannel) => {
    store.dispatch(
      channelsApi.util.updateQueryData('getChannels', undefined, (draft) => {
        const channel = draft.find((item) => item.id === updatedChannel.id);
        if (channel) {
          channel.name = updatedChannel.name;
        }
      }),
    );
  });

  socket.on('newMessage', (message) => {
    store.dispatch(messagesApi.util.updateQueryData('getMessages', undefined, (draft) => {
      draft.push(message);
    }));
  });

  return (next) => (action) => next(action);
};

export default socketMiddleware;
