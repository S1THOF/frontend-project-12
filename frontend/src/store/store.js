import { configureStore } from '@reduxjs/toolkit';
import { channelsApi } from '../api/channelsApi';
import { messagesApi } from '../api/messagesApi';
import { authApi } from '../api/authApi';
import socketMiddleware from './middlewares/socketMiddleware';

import authReducer from './slices/authSlice';
import channelReducer from './slices/channelsSlice';
import modalsReducer from './slices/modalsSlice';

const createStore = (socket) => configureStore({
  reducer: {
    auth: authReducer,
    channel: channelReducer,
    modals: modalsReducer,
    [authApi.reducerPath]: authApi.reducer,
    [channelsApi.reducerPath]: channelsApi.reducer,
    [messagesApi.reducerPath]: messagesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    channelsApi.middleware,
    messagesApi.middleware,
    authApi.middleware,
    socketMiddleware(socket),
  ),
});

export default createStore;
