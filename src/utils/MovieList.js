import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import '../styles/MovieList.css';


function MovieList() {
    const movies = useSelector(state => state.movies.movies)
    const loading = useSelector(state => state.movies.loading);
    const error = useSelector(state => state.movies.error);

    console.log('Movies:', movies); 
    console.log('Loading:', loading); 
    console.log('Error:', error); 

    if(loading) {
        return <p>Loading...</p>
    }

    if(error) {
        return <p>Error : {error}</p>
    }

    return (
        <div className="movie-list">
           {movies.map((movie) => (
             <MovieCard key = {movie.imdbID} movie = {movie} />
          ))}
        
        </div>
    )
}

export default MovieList;

