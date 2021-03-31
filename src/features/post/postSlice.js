import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import PostService from "./post_service";

export const fetchIndexPost = createAsyncThunk(
  "post/fetchIndexPost",
  async () => {
    const postService = new PostService();
    const allPosts = await postService.index();
    return {posts : allPosts }
  }
)

const postSlice = createSlice({
  name:"post",
  initialState: {
    error : null,
    posts:{},
    currentPost:{}
  },

  reducers : {},
  extraReducers:{
    [fetchIndexPost.fulfilled]:(state , action) => {
      state.error = null;
      state.posts = action.payload.posts;
    },
    [fetchIndexPost.rejected] : (state, action) => {
      state.error = action.payload.error;
      state.posts = {};
    },
  }

})

export default postSlice.reducer;