import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../actions/movieAction";
import MovieList from "../../components/MovieList";
import "./index.css";

function Home() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.movies.loading);
  const movies = useSelector((state) => state.movies.movies);
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  useEffect(() => {
    dispatch(fetchMovies(""));
  }, [dispatch]);

  return (
    <div className={`homepage ${isDarkTheme ? "dark-theme" : "light-theme"}`}>
      <Navbar />
      <div className="home-container">
        <h2>What To Watch - CineVerse</h2>
        <ul>
          <li>Top Picks</li>
          <li>Watch Guide</li>
          <li>Fans Favourite</li>
          <li>From Your WatchList</li>
          <li>Most Popular</li>
        </ul>
      </div>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <MovieList movies={movies} />
      )}
    </div>
  );
}

export default Home;
