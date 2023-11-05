import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
import movieReducer from "./reducers/movieReducer";

const rootReducer = combineReducers({
    user : userReducer,
    movies : movieReducer
})

const store = configureStore({
    reducer : rootReducer
})

export default store;
