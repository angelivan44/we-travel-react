import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URI } from "../../app/apiFecht";
import SessionService from "./session_service";

export const fetchLogin = createAsyncThunk(
  "session/fetchLogin",
  async (credentials) => {
    const sessionService = new SessionService();
    const data = await sessionService.login(credentials);
    return {token : data.token}
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
      state.toke = "";
    }
  }

})

export default sessionSlice.reducer;