import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import SessionService from "./session_service";

export const fetchLogin = createAsyncThunk(
  "session/fetchLogin",
  async (credentials) => {
    const sessionService = new SessionService();
    const data = await sessionService.login(credentials);
    return {token : data.token}
  }
)


export const fetchLogout = createAsyncThunk(
  "session/fetchLogout",
  async (user_id) => {
    const sessionService = new SessionService();
    const result = await SessionService.logout(user_id);
    return {token : null}
  }
)


const sessionSlice = createSlice({
  name="session",
  initialState: {
    token : sessionStorage.getItem("token"),
    error : null,
  },

  reducers : {},
  extraReducers:{
    [fetchLogin.fulfilled]:(state , action) => {
      state.error = null;
      state.token = action.payload.token
    },
    [fetchLogin.rejected] : (state, action) => {
      state.error = action.payload.error;
      state.token = "";
    },
    [fetchLogout.fulfilled]: (state , action) => {
      state.error = null;
      state.token = ""
    },
    [fetchLogout.rejected] : (state , action) =>{
      state.error = action.payload.error
    }

  }

})

export default sessionSlice.reducer;