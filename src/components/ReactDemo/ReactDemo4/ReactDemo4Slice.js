import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const favouriteSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addToFavourites: (state, action) => {
      state.push(action.payload)
    },
    removeFromFavourites: (state, action) => {
      return state.filter(drink => drink.id !== action.payload);
    }
  },
})


export const { addToFavourites, removeFromFavourites } = favouriteSlice.actions

export default favouriteSlice.reducer