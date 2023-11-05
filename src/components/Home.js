import React, { useEffect } from 'react'
import Navbar from '../utils/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../actions/movieAction';
import MovieList from '../utils/MovieList';


function Home() {
    const dispatch = useDispatch();
    const loading = useSelector(state=>state.movies.loading);
    const movies = useSelector(state=>state.movies.movies);

    useEffect(()=>{
        dispatch(fetchMovies(''));
    }, [dispatch]);

    console.log(movies);

  return (
    <div className='homepage'>
      <Navbar />
      <div className='home-container'>
        <h2>What To Watch - CineVerse</h2>
        <ul>
            <li>Top Picks</li>
            <li>Watch Guide</li>
            <li>Fans Favourite</li>
            <li>From Your WatchList</li>
            <li>Most Popular</li>
        </ul>
      </div>
      {loading ? <p>Loading...</p> :
       <MovieList movies = {movies} />
      }
    </div>
  )
}

export default Home
