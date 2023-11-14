import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
import movieReducer from "./reducers/movieReducer";
import favoriteSlice from "./reducers/favoriteSlice";
import searchReducer from "./reducers/searchSlice";
import themeSlice from "./reducers/themeSlice";

const rootReducer = combineReducers({
  user: userReducer,
  movies: movieReducer,
  favorites: favoriteSlice,
  search: searchReducer,
  theme: themeSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
