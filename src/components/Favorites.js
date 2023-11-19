import React from "react";
import { useSelector } from "react-redux";
import FavoritesMovieCard from "./FavoritesMovieCard";
import Navbar from "./Navbar";
import "../styles/Favorites.css";
//import { removeFromFavorite } from "../reducers/favoriteSlice";

function Favorites() {
  const favorites = useSelector((state) => state.favorites.movies);
  //const dispatch = useDispatch();

  /* const removeFavorite = (movie) => {
    dispatch(removeFromFavorite(movie));
  };*/

  return (
    <div className="favorites-page">
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
