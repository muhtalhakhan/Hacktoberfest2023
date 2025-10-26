import { configureStore } from '@reduxjs/toolkit';

import { authApi } from './auth/authApi';
import { authReducer, authSlice } from './auth/authSlice';

import { codeApi } from './code/codeApi';
import { codeReducer, codeSlice } from './code/codeSlice';

import { toastReducer, toastSlice } from './toast/toastSlice';

export const store = configureStore({
  reducer: {
    [authSlice.name]: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [toastSlice.name]: toastReducer,
    [codeSlice.name]: codeReducer,
    [codeApi.reducerPath]: codeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat([
      authApi.middleware,
      codeApi.middleware,
    ]),
});

export type TypeRootState = ReturnType<typeof store.getState>;
