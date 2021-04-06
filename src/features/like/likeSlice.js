import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import LikeService from "./like_service";

 export const fetchCreateLikePost = createAsyncThunk(
  "like/fetchCreateLikePost",
  async(post_id)=>{
    const likeService = new LikeService();
    const newLike = await likeService.createLikePost(post_id)
    return {newLike: newLike}
  }
)

export const fetchCreateLikeComment = createAsyncThunk(
  "like/fetchCreateLikeComment",
  async(comment_id)=>{
    const likeService = new LikeService();
    const newLike = await likeService.createLikeComment(comment_id)
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
    [fetchCreateLikePost.fulfilled] : (state , action)=> {
      state.error = null;
      state.currentLike = action.payload.newLike;
    },
    [fetchCreateLikePost.rejected] : (state , action) => {
      state.error = action.payload;
    },
    [fetchCreateLikeComment.fulfilled] :(state, action)=>{
      state.currentLike = action.payload.newLike;
      state.error = null;
    },
    [fetchCreateLikeComment.rejected] :(state, action)=>{
      state.error = action.payload;
    }
  }

})

export default likeSlice.reducer;