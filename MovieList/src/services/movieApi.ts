import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {MOVIE_DB_BASE_URL, authToken} from '../screens/constants';
import {i18n} from '../translations';
import {MovieListResponseType} from '../types';

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({
    baseUrl: MOVIE_DB_BASE_URL,
    headers: {Authorization: authToken},
    method: 'GET',
  }),
  endpoints: builder => ({
    getMovieList: builder.query<MovieListResponseType, number>({
      query: page => `?language=${i18n.language}&page=${page}`,
    }),
  }),
});
export const {useGetMovieListQuery} = movieApi;
