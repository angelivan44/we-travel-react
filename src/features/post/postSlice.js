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

export const fetchShowPost = createAsyncThunk(
  "post/fetchShowPost",
  async (post_id) => {
    const postService = new PostService();
    const currentPost = await postService.show(post_id);
    return {currentPost : currentPost }
  }
)

export const fetchCreatePost = createAsyncThunk(
  "post/fetchCreatePost",
  async(formData)=>{
    const postService = new PostService();
    const newPost = await postService.create(formData)
    return {newPost: newPost}
  }
)

const postSlice = createSlice({
  name:"post",
  initialState: {
    error : null,
    posts:[],
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
      state.posts = [];
    },
    [fetchShowPost.fulfilled] : (state , action) => {
      state.currentPost = action.payload.currentPost
    },
    [fetchShowPost.rejected] : (state , action) => {
      state.error = action.payload.error;
      state.currentPost = {}
    },
    [fetchCreatePost.fulfilled] : (state , action)=> {
      state.error = null;
      state.posts = [...state.posts,action.payload.newPost]
    },
    [fetchCreatePost.rejected] : (state , action) => {
      state.error = action.payload.error;
    }
    

    

  }

})

export default postSlice.reducer;