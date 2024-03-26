import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import loginSlice from './reducers/loginSlice';
import {movieApi} from '../services/movieApi';

export const store = configureStore({
  reducer: {
    login: loginSlice,
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(movieApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
