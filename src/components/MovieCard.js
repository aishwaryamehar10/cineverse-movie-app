import React from "react";
import "../styles/MovieCard.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addMovieToFavorite,
  removeMovieFromFavorite,
} from "../actions/favoriteAction";

function MovieCard({ movie }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.movies);
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  const isFavorite = favorites.some(
    (favorite) => favorite.imdbID === movie.imdbID
  );

  const handleToggleFavorite = () => {
    console.log("Movie ID:", movie.imdbID);
    console.log("Favorites:", favorites);

    console.log("Movie object:", movie);

    if (isFavorite) {
      console.log("Removing from favorites");
      dispatch(removeMovieFromFavorite(movie));
    } else {
      console.log("Adding to favorites");
      dispatch(addMovieToFavorite(movie));
    }
  };

  return (
    <div className={`movie-card ${isDarkTheme ? "dark-theme" : "light-theme"}`}>
      <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
      <div className="movie-details">
        <h2 className="movie-title">{movie.Title}</h2>
        <p className="movie-year">Year : {movie.Year}</p>
      </div>
      <div className="movie-card-icons">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke={isFavorite ? "red" : "currentColor"}
          className="heart-icon"
          onClick={handleToggleFavorite}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="bookmark-icon">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="play-icon">
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

export default MovieCard;
