import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UserService from "./user_service";

export const fetchSignUp = createAsyncThunk(
  "user/fetchSignUp",
  async (dataForm) => {
    const userService = new UserService();
    const newUser = await userService.create(dataForm);
    console.log("aaaaa", dataForm)
    return {user : newUser , token : newUser.token}
  }
)

export const fetchShowUser = createAsyncThunk(
  "user/fetchShowUser",
  async (user_id) => {
    const userService = new UserService();
    const showUser = await userService.show(user_id)
    return {show_user:showUser}
  }
)

export const fetchIndexUser = createAsyncThunk(
  "user/fetchIndexUser",
  async ()=>{
    const userService = new UserService();
    const mostPopularUsers = await userService.index();
    return {most_populars: mostPopularUsers}
  }
)



const userSlice = createSlice({
  name:"user",
  initialState: {
    error : null,
    user:{},
    show_user:{posts_data:[],followers_data:[], following_data:[]},
    user_id:"no_id",
    most_populars:[],
    token : null,
  },

  reducers : {
    resetuser: (state, action) => {
      state.user_id = action.payload;
    },
  },
  extraReducers:{
    [fetchSignUp.fulfilled]:(state , action) => {
      state.error = null;
      state.token = action.payload.token;
      state.user = action.payload.user;
      sessionStorage.setItem("token" , action.payload.token)
      sessionStorage.setItem("user_id",action.payload.user.id)
    },
    [fetchSignUp.rejected] : (state, action) => {
      state.error = action.payload.error;
      state.token = "";
    },
    [fetchShowUser.fulfilled] : (state, action) => {
      state.show_user = action.payload.show_user;
      state.error = null;
    },
    [fetchShowUser.rejected] : (state, action) => {
      state.show_user = {}
      state.error = action.payload;
    },
    [fetchIndexUser.fulfilled] : (state , action)=>{
      state.most_populars = action.payload.most_populars;
      state.error = null;
    },
    [fetchIndexUser.rejected] : (state , action)=>{
      state.most_populars = [];
      state.error = action.payload;
    }

  }

})

export const {resetuser} = userSlice.actions;

export default userSlice.reducer;