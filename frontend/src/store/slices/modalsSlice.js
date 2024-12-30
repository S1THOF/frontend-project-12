/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  type: null,
  channelId: '',
  channeName: '',
};

const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    openModal: (state, { payload }) => {
      state.isOpen = true;
      state.type = payload.type;
      state.channelId = payload.id;
      state.channelName = payload.name;
    },
    closeModal: () => initialState,
  },
});

export const selectIsOpen = (state) => state.modals.isOpen;
export const selectType = (state) => state.modals.type;
export const selectChannelId = (state) => state.modals.channelId;
export const selectChannelName = (state) => state.modals.channelName;

export const { openModal, closeModal } = modalsSlice.actions;
export default modalsSlice.reducer;
