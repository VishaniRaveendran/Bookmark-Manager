import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const hostName = "https://avantrio-frontend-training.herokuapp.com/";
export const loginUser = createAsyncThunk(
    "user/loginUser",
    async (userCredentials) => {
        console.log(userCredentials);
        const request = await axios.post(`${hostName}api/auth/token/`, userCredentials, {
            headers: {
                "Content-Type": "application/json",
            },
        })
        const response = await request.status;
        localStorage.setItem('user', JSON.stringify(response))
        return response;
    }
);

export const signupUser = createAsyncThunk(
    'users/signupUser',
    async (signUpuserCredentials) => {
        console.log(signUpuserCredentials);
        const request = await axios.post(`${hostName}api/auth/register/`, signUpuserCredentials, {
            headers: {
                "Content-Type": "application/json",
            },
        })
        const response = await request.status;
        localStorage.setItem('user', JSON.stringify(response))
        return response;
    }
);

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.error = null;
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.user = null;
            state.error = action.error.message;
            console.log(action.error.message);
            if (action.error.message === "Request failed with status code 401") {
                state.error = "Access Denied! Invalid Credentials"
            }
            else {
                state.error = action.error.message;
            }
        });
        builder.addCase(signupUser.pending, (state, action) => {
            state.loading = true;
        }
        );
        builder.addCase(signupUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.error = null;
        }
        );
        builder.addCase(signupUser.rejected, (state, action) => {
            state.loading = false;
            state.user = null;
            state.error = action.error.message;
            console.log(action.error.message);
            if (action.error.message === "Request failed with status code 401") {
                state.error = "Access Denied! Invalid Credentials"
            }
        }
        );
    }
});

export default userSlice.reducer;