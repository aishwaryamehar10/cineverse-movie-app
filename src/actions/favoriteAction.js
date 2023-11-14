import { addToFavorite, removeFromFavorite } from "../reducers/favoriteSlice";

export const addMovieToFavorite = (movie) => (dispatch) => {
  dispatch(addToFavorite(movie));
};

export const removeMovieFromFavorite = (movie) => (dispatch) => {
  dispatch(removeFromFavorite(movie));
};
