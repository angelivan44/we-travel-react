import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CommentService from "./comment_service";

export const fetchCreateComment = createAsyncThunk(
  "comment/fetchCreateComment",
  async () => {
    const commentService = new CommentService();
    const newComment = await commentService.create(formData, post_id);
    return { newComment: newComment };
  }
);

export const fetchUpdateComment = createAsyncThunk(
  "comment/fetchUpdateComment",
  async () => {
    const commentService = new CommentService();
    const newComment = await commentService.update(
      formData,
      post_id,
      comment_id
    );
    return { currentComment: currentComment };
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
    [fetchCreateComment.fulfilled]: (state, action) => {
      state.error = null;
      state.comments = [...state.comments, action.payload.comments];
    },
    [fetchCreateComment.rejected]: (state, action) => {
      state.error = action.payload.error;
    },
    [fetchUpdateComment.fulfilled]: (state, action) => {
      state.currentComment = action.payload.currentComment;
    },
    [fetchUpdateComment.rejected]: (state, action) => {
      state.error = action.payload.error;
      state.currentComment = {};
    },
  },
});
