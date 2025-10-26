import { createSlice, PayloadAction, isAnyOf } from '@reduxjs/toolkit';

import { generateShortLink } from '../../utils/functions/generateShortlink.function';

import { ICode } from '../../types/Code';

import { authApi } from '../auth/authApi';

interface IInitialState {
  code: ICode;
  isTrack: boolean;
}

const initialState: IInitialState = {
  code: {
    link: '',
    style: {
      bgColor: '#FFFFFF',
      patternColor: '#000000',
      type: 'url',
    },
    logo: {
      src: '',
    },
  },
  isTrack: false,
};

export const codeSlice = createSlice({
  name: 'code',
  initialState,
  reducers: {
    setType: (state, action: PayloadAction<string>) => {
      state.code.style.type = action.payload;
    },
    setURL: (state, action: PayloadAction<string>) => {
      state.code.link = action.payload;
    },
    setBackgroundColor: (state, action: PayloadAction<string>) => {
      state.code.style.bgColor = action.payload;
    },
    setPatternColor: (state, action: PayloadAction<string>) => {
      state.code.style.patternColor = action.payload;
    },
    setTrack: (state, action: PayloadAction<boolean>) => {
      state.isTrack = action.payload;
      state.code.shortLink = action.payload ? generateShortLink() : '';
    },
    setLogo: (state, action: PayloadAction<string>) => {
      state.code.logo.src = action.payload;
    },
    resetCode: () => initialState,
  },
  extraReducers(builder) {
    builder.addMatcher(
      isAnyOf(
        authApi.endpoints.checkAuth.matchRejected,
        authApi.endpoints.logout.matchFulfilled,
      ),
      () => initialState,
    );
  },
});

export const codeReducer = codeSlice.reducer;
export const codeAction = codeSlice.actions;
