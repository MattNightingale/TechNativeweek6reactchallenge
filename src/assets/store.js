import { configureStore } from '@reduxjs/toolkit';
import favouriteReducer from '../components/ReactDemo/ReactDemo4/ReactDemo4Slice';

export const store = configureStore({
  reducer: {
    favourites: favouriteReducer,
  },
})