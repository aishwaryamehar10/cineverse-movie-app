import {fetchMoviesError,fetchMoviesStart,fetchMoviesSuccess} from '../reducers/movieReducer';

export const fetchMovies = () => async (dispatch) => {
    dispatch(fetchMoviesStart());
    try {
        console.log('Fetching movies...');
        const response = await fetch('https://www.omdbapi.com/?i=tt3896198&apikey=b132ee3f&s=car');
        if(!response.ok){
            throw new Error(`HTTP ERROR! STATUS : ${response.status}`)
        }
        const data = await response.json();
        console.log('Fetched data:', data);
        dispatch(fetchMoviesSuccess(data.Search));
    }catch(error) {
        console.error('Error:', error);
        dispatch(fetchMoviesError(error.message));
    }
}