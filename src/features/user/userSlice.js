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




const userSlice = createSlice({
  name:"user",
  initialState: {
    error : null,
    user:{},
    token : null,
  },

  reducers : {},
  extraReducers:{
    [fetchSignUp.fulfilled]:(state , action) => {
      state.error = null;
      state.token = action.payload.token;
      state.user = action.payload.user;
      sessionStorage.setItem("token" , action.payload.token)
    },
    [fetchSignUp.rejected] : (state, action) => {
      state.error = action.payload.error;
      state.token = "";
    },
  }

})

export default userSlice.reducer;