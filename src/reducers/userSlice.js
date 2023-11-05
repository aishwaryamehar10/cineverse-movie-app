import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : 'user',
    initialState : {
        isAunthenticated : false
    },
    reducers : {
        loginSuccess:(state) => {
            state.isAunthenticated = true;
        },
        loginFailure:(state) => {
            state.isAunthenticated = false;
        }
    }
})

export const {loginSuccess, loginFailure} = userSlice.actions;
export default userSlice.reducer;