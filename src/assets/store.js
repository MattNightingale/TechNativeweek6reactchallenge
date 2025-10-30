import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../components/ReactDemo/ReactDemo4/ReactDemo4Slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})