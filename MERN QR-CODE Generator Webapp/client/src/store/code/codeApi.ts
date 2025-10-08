import { createApi } from '@reduxjs/toolkit/query/react';

import { ICode } from '../../types/Code';
import { CodeResponse } from '../../types/response/CodeResponse';

import { customFetchBase } from '../customBaseQuery';

export const codeApi = createApi({
  reducerPath: 'api/code',
  baseQuery: customFetchBase,
  tagTypes: ['Code'],
  endpoints: (build) => ({
    getCodes: build.query<CodeResponse[], string>({
      query: () => ({ url: `/qrcode`, credentials: 'include' }),
      providesTags: ['Code'],
    }),

    createCode: build.mutation<CodeResponse, ICode>({
      query: (data) => ({
        url: '/qrcode/',
        method: 'POST',
        body: data,
        credentials: 'include',
      }),
      invalidatesTags: ['Code'],
    }),

    deleteCode: build.mutation<void, string>({
      query: (shortLink) => ({
        url: `/qrcode/${shortLink}`,
        method: 'DELETE',
        credentials: 'include',
      }),
      invalidatesTags: ['Code'],
    }),
  }),
});

export const {
  useGetCodesQuery,
  useCreateCodeMutation,
  useDeleteCodeMutation,
} = codeApi;
