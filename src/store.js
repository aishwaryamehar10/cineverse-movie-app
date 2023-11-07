import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
import movieReducer from "./reducers/movieReducer";
import favoriteSlice from "./reducers/favoriteSlice";

const rootReducer = combineReducers({
    user : userReducer,
    movies : movieReducer,
    favorites : favoriteSlice
})

const store = configureStore({
    reducer : rootReducer
})

export default store;
