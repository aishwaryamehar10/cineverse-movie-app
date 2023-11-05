import {createSlice} from '@reduxjs/toolkit';

const movieSlice = createSlice({
    name : 'movies',
    initialState : {
        movies : [],
        loading : false,
        error : null,
    },
    reducers : {
        fetchMoviesStart:(state) => {
            state.loading = true;
            state.error = null
        },
        fetchMoviesSuccess:(state,action) => {
            state.movies = action.payload;
            state.loading = false; 
            state.error = null;
        },
        fetchMoviesError:(state,action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export const { fetchMoviesStart, fetchMoviesSuccess, fetchMoviesError } = movieSlice.actions;
export default movieSlice.reducer;