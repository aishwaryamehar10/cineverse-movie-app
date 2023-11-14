import React from "react";
import { useSelector } from "react-redux";
import FavoritesMovieCard from "./FavoritesMovieCard";
import Navbar from "../utils/Navbar";
import "../styles/Favorites.css";

function Favorites() {
  const favorites = useSelector((state) => state.favorites.movies);

  return (
    <div className="favorites-page">
      <Navbar />
      <h2 className="favorites-title">My Favorites</h2>
      <div className="favorites-item">
        {favorites.map((movie) => (
          <FavoritesMovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
