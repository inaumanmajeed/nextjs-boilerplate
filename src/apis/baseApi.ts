import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '@/constants';
import { getCookie } from 'cookies-next';
import type { BaseQueryFn, BaseQueryResult, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { RootState } from '@/lib/store';

export type ApiTagType = 'User' | 'Post' | 'Comment'; // Example tag types, adjust as needed

const rawBaseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const tokenFromCookies = getCookie('auth_token') as string | undefined;
    const tokenFromState = (getState() as RootState)?.auth?.token as string | undefined;
    const token = tokenFromCookies || tokenFromState;

    if (token) headers.set('authorization', `Bearer ${token}`);

    return headers;
  },
});

const baseQuery: BaseQueryFn<any, unknown, FetchBaseQueryError, {}> = async (
  args,
  api,
  extraOptions
) => {
  return (await rawBaseQuery(args, api, extraOptions)) as BaseQueryResult<any>;
};

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery,
  tagTypes: [] as ApiTagType[],
  endpoints: () => ({}),
});
