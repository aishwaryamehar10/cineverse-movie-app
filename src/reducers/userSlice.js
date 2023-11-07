import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : 'user',
    initialState : {
        isAuthenticated : false
    },
    reducers : {
        loginSuccess:(state) => {
            state.isAuthenticated = true;
        },
        loginFailure:(state) => {
            state.isAuthenticated = false;
        }
    }
})

export const {loginSuccess, loginFailure} = userSlice.actions;
export default userSlice.reducer;