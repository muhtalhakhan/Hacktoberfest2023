import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';

import { authApi } from './authApi';

import { IUser } from '../../types/User';
import { IToken } from '../../types/Token';

interface IAuthState {
  user: IUser | Record<string, never>;
  token: IToken | Record<string, never>;
  isAuth: boolean;
}

const initialState: IAuthState = {
  user: JSON.parse(localStorage.getItem('currentUser') || '{}'),
  token: JSON.parse(localStorage.getItem('token') || '{}'),
  isAuth: !!localStorage.getItem('currentUser'),
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<IToken>) => {
      localStorage.setItem('token', JSON.stringify(action.payload));
      state.token = action.payload;
    },
    loggedOut: (state) => {
      state.user = {};
      state.token = {};
      state.isAuth = false;

      localStorage.removeItem('token');
      localStorage.removeItem('currentUser');
    },
  },
  extraReducers(builder) {
    builder
      .addMatcher(
        isAnyOf(
          authApi.endpoints.signIn.matchFulfilled,
          authApi.endpoints.signUp.matchFulfilled,
          authApi.endpoints.checkAuth.matchFulfilled,
        ),
        (state, action) => {
          const { accessToken, user } = action.payload;

          state.user = user;
          state.token = accessToken;
          state.isAuth = true;

          localStorage.setItem('token', JSON.stringify(accessToken));
          localStorage.setItem('currentUser', JSON.stringify(user));
        },
      )
      .addMatcher(
        isAnyOf(
          authApi.endpoints.checkAuth.matchRejected,
          authApi.endpoints.logout.matchFulfilled,
        ),
        (state) => {
          state.user = {};
          state.token = {};
          state.isAuth = false;

          localStorage.removeItem('token');
          localStorage.removeItem('currentUser');
        },
      );
  },
});

export const authReducer = authSlice.reducer;
export const authAction = authSlice.actions;
