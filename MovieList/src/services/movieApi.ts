import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {MOVIE_DB_BASE_URL, authToken} from '../constants';
import {i18n} from '../translations';
import {MovieListResponseType} from '../types';

export const movieApi = createApi({
  reducerPath: 'movieApi',
  tagTypes: ['movies'],
  baseQuery: fetchBaseQuery({
    baseUrl: MOVIE_DB_BASE_URL,
    headers: {Authorization: authToken},
    method: 'GET',
  }),
  endpoints: builder => ({
    getMovieList: builder.query<MovieListResponseType, number>({
      providesTags: ['movies'],
      query: page => `?language=${i18n.language}&page=${page}`,
      serializeQueryArgs: ({endpointName}) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        currentCache.page = newItems.page;
        const reducedArray = newItems.results.map(movie => {
          return {title: movie.title, poster_path: movie.poster_path};
        });
        currentCache.results.push(...reducedArray);
      },
    }),
  }),
});
export const {useGetMovieListQuery} = movieApi;
