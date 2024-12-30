/* eslint-disable no-param-reassign */
import { createSlice, createSelector } from '@reduxjs/toolkit';
import { TOKEN, USERNAME } from './constants';

const initialState = {
  token: localStorage.getItem(TOKEN) || null,
  username: localStorage.getItem(USERNAME) || null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserData(state, { payload }) {
      const { token, username } = payload;
      localStorage.setItem(TOKEN, token);
      localStorage.setItem(USERNAME, username);
      state.token = token;
      state.username = username;
    },
    clearUserData(state) {
      localStorage.clear();
      state.token = null;
      state.username = null;
    },
  },
});

export const selectToken = (state) => state.auth.token;
export const selectUsername = (state) => state.auth.username;

export const selectIsAuth = createSelector(
  selectToken,
  selectUsername,
  (token, username) => Boolean(token) && Boolean(username),
);

export const { setUserData, clearUserData } = authSlice.actions;
export default authSlice.reducer;
