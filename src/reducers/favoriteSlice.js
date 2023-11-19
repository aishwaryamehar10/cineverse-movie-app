import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    movies: [], //favorites slice has an initial state with a movie array
  },
  reducers: {
    addToFavorite: (state, action) => {
      state.movies.push(action.payload);
    },
    removeFromFavorite: (state, action) => {
      state.movies = state.movies.filter(
        (movie) => movie.imdbID !== action.payload.imdbID
      );
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
