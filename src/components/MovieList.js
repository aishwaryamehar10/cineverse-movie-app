import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import "../styles/MovieList.css";

function MovieList() {
  const movies = useSelector((state) => state.movies.movies);
  const loading = useSelector((state) => state.movies.loading);
  const error = useSelector((state) => state.movies.error);
  const searchTerm = useSelector((state) => state.search.searchTerm || "");

  console.log("Movies:", movies);
  console.log("Loading:", loading);
  console.log("Error:", error);
  console.log("Search Term:", searchTerm);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error : {error}</p>;
  }
  const filteredMovies = searchTerm
    ? movies.filter((movie) =>
        movie.Title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : movies;

  return (
    <div className="movie-list">
      {filteredMovies.length === 0 ? (
        <p>No movies found for "{searchTerm}"</p>
      ) : (
        filteredMovies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))
      )}
    </div>
  );
}

export default MovieList;
