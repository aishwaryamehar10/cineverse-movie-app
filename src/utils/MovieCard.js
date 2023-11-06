import React from 'react';
import '../styles/MovieCard.css';

function MovieCard({movie}) {
  return (
    <div className='movie-card'>
      <img src = {movie.Poster} alt = {movie.Title} className='movie-poster' />
      <div className='movie-details'>
        <h2 className='movie-title'>{movie.Title}</h2>
        <p className='movie-year'>Year : {movie.Year}</p>
      </div>
      <p>Temporary content to check rendering</p>
    </div>
  )
}

export default MovieCard;
