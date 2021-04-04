import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UserService from "../user/user_service";
import SessionService from "./session_service";

export const fetchLogin = createAsyncThunk(
  "session/fetchLogin",
  async (credentials) => {
    const sessionService = new SessionService();
    const data = await sessionService.login(credentials);
    return {user : data , token : data.token}
  }
)


export const fetchLogout = createAsyncThunk(
  "session/fetchLogout",
  async (user_id) => {
    const sessionService = new SessionService();
    const result = await sessionService.logout(user_id);
    return {token : null}
  }
)

export const fetchCurrentUser = createAsyncThunk(
  "session/fetchCurrentUser",
  async (user_id) => {
    const userService = new UserService();
    const data = await userService.show(user_id);
    return {user: data}
  }
)


const sessionSlice = createSlice({
  name:"session",
  initialState: {
    error : null,
    user:{posts_data:[],followers_data:[], following_data:[]},
    token : sessionStorage.getItem("token")
  },

  reducers : {},
  extraReducers:{
    [fetchLogin.fulfilled]:(state , action) => {
      state.error = null;
      state.token = action.payload.token;
      state.user = action.payload.user;

      sessionStorage.setItem("token" , action.payload.token);
      sessionStorage.setItem("user_id",action.payload.user.id);
    },
    [fetchLogin.rejected] : (state, action) => {
      state.error = true;
      state.token = "";
    },
    [fetchLogout.fulfilled]: (state , action) => {
      state.error = null;
      state.token = ""
    },
    [fetchLogout.rejected] : (state , action) =>{
      state.error = action.payload
    },
    [fetchCurrentUser.fulfilled] : (state , action) => {
      state.user = action.payload.user;
      state.error = null
    },
    [fetchCurrentUser.rejected] : (state , action) => {
      state.user = {};
      state.error = action.payload;
    }

  }

})

export default sessionSlice.reducer;