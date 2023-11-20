import React from "react";
import { useSelector } from "react-redux";
import FavoritesMovieCard from "./FavoritesMovieCard";
import Navbar from "./Navbar";
import "../styles/Favorites.css";

function Favorites() {
  const favorites = useSelector((state) => state.favorites.movies);
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  return (
    <div
      className={`favorites-page ${
        isDarkTheme ? "dark-theme" : "light-theme"
      }`}>
      <Navbar />
      <h2 className="favorites-title">My Favorites</h2>
      <div className="favorites-item">
        {favorites.map((movie) => (
          <FavoritesMovieCard
            key={movie.imdbID}
            movie={movie}
            //removeFavorite={removeFavorite}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
