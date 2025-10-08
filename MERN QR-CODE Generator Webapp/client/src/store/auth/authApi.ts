import { createApi } from '@reduxjs/toolkit/query/react';

import { AuthRequest } from '../../types/request/AuthRequest';
import { AuthResponse } from '../../types/response/AuthResponse';

import { customFetchBase } from '../customBaseQuery';

export const authApi = createApi({
  reducerPath: 'api/auth',
  baseQuery: customFetchBase,
  endpoints: (build) => ({
    signIn: build.mutation<AuthResponse, AuthRequest>({
      query: (data) => ({
        url: 'auth/login',
        method: 'POST',
        body: data,
        credentials: 'include',
      }),
    }),
    signUp: build.mutation<AuthResponse, AuthRequest>({
      query: (data) => ({
        url: 'auth/registration',
        method: 'POST',
        body: data,
        credentials: 'include',
      }),
    }),
    logout: build.mutation<void, void>({
      query: () => ({
        url: 'auth/logout',
        method: 'POST',
        credentials: 'include',
      }),
    }),
    resendEmail: build.mutation<void, void>({
      query: () => ({
        url: 'auth/resend',
        method: 'POST',
        credentials: 'include',
      }),
    }),
    checkAuth: build.query<AuthResponse, string>({
      query: () => ({
        url: 'auth/refresh',
        method: 'POST',
        credentials: 'include',
      }),
    }),
  }),
});

export const {
  useSignInMutation,
  useSignUpMutation,
  useLogoutMutation,
  useCheckAuthQuery,
  useResendEmailMutation,
} = authApi;
