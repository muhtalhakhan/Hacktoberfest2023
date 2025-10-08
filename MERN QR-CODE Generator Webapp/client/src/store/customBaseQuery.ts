import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import { Mutex } from 'async-mutex';

import { TypeRootState } from './store';
import { authAction } from './auth/authSlice';

const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.REACT_APP_BASE_URL_API}`,
  prepareHeaders: (headers, { getState }) => {
    const { token } = (getState() as TypeRootState).auth.token;

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  },
  credentials: 'include',
});

export const customFetchBase: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);

  if (
    result.error &&
    result.error.status === 401 &&
    api.endpoint !== 'checkAuth'
  ) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();

      try {
        const refreshResult = (await baseQuery(
          { method: 'POST', credentials: 'include', url: 'auth/refresh' },
          api,
          extraOptions,
        )) as any;

        if (refreshResult.data) {
          api.dispatch(authAction.setToken(refreshResult.data.accessToken));
          result = await baseQuery(args, api, extraOptions);
        } else {
          api.dispatch(authAction.loggedOut());
          window.location.href = '/login';
        }
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};
