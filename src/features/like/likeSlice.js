import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import LikeService from "./like_service";

export const fetchCreateLike = createAsyncThunk(
  "like/fetchCreateLike",
  async(formData)=>{
    const likeService = new LikeService();
    const newLike = await likeService.create(formData)
    return {newLike: newLike}
  }
)

export const fetchDeleteLike = createAsyncThunk(
  "like/fetchDeleteLike",
  async (like_id) => {
    const likeService = new LikeService();
    const currentLike = await likeService.delete(like_id);
    return {currentLike : currentLike }
  }
)

const likeSlice = createSlice({
  name:"like",
  initialState: {
    error : null,
    likes:{},
    currentLike:{}
  },

  reducers : {},
  extraReducers:{
    [fetchDeleteLike.fulfilled] : (state , action) => {
      state.currentLike = action.payload.currentLike
    },
    [fetchDeleteLike.rejected] : (state , action) => {
      state.error = action.payload.error;
      state.currentLike = {}
    },
    [fetchCreateLike.fulfilled] : (state , action)=> {
      state.error = null;
      state.currentLike = action.payload.newLike;
    },
    [fetchCreateLike.rejected] : (state , action) => {
      state.error = action.payload.error;
    }
  }

})

export default likeSlice.reducer;