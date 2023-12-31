import React from "react";
import "../styles/FavoritesMovieCard.css";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorite } from "../reducers/favoriteSlice";

function FavoritesMovieCard({ movie }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.movies);
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  const isFavorite = favorites.some(
    (favorite) => favorite.imdbID === movie.imdbID
  );

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorite(movie));
    }
  };

  return (
    <div
      className={`favorites-movie-card ${
        isDarkTheme ? "dark-theme" : "light-theme"
      }`}>
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="favorites-movie-poster"
      />
      <div className="favorites-movie-details">
        <h2 className="favorites-movie-title">{movie.Title}</h2>
        <p className="favorites-movie-year">{movie.Year}</p>
      </div>
      <div className="favorites-movie-icons">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="remove-icon"
          onClick={toggleFavorite}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="playing-icon">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
          />
        </svg>
      </div>
    </div>
  );
}

export default FavoritesMovieCard;
