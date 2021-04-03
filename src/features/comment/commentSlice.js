import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CommentService from "./comment_service";

export const fetchCreatePostComment = createAsyncThunk(
  "comment/fetchCreatePostComment",
  async (body, post_id) => {
    const commentService = new CommentService();
    const newComment = await commentService.createPostComment(body, post_id);
    return { newComment: newComment };
  }
);

export const fetchCreateReplieComment = createAsyncThunk(
  "comment/fetchCreateReplieComment",
  async (body, comment_id) => {
    const commentService = new CommentService();
    const newComment = await commentService.createReplieComment(
      body,
      comment_id
    );
    return { newComment: newComment };
  }
);

const commentSlice = createSlice({
  name: "comment",
  initialState: {
    error: null,
    comments: [],
    currentComment: {},
  },

  reducers: {},
  extraReducers: {
    [fetchCreatePostComment.fulfilled]: (state, action) => {
      state.error = null;
      state.comments = [...state.comments, action.payload.comments];
    },
    [fetchCreatePostComment.rejected]: (state, action) => {
      state.error = action.payload.error;
    },
    [fetchCreateReplieComment.fulfilled]: (state, action) => {
      state.error = null;
      state.comments = [...state.comments, action.payload.comments];
    },
    [fetchCreateReplieComment.rejected]: (state, action) => {
      state.error = action.payload.error;
    },
  },
});

export default commentSlice.reducer;
