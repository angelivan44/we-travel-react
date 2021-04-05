import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from "../features/session/sessionSlice";
import userReducer from "../features/user/userSlice";
import postReducer from "../features/post/postSlice";
import departmentReducer from "../features/department/departmentSlice";
import commentReducer from "../features/comment/commentSlice";
import likeReducer from "../features/like/likeSlice"

export default configureStore({
  reducer: {
    session: sessionReducer,
    user: userReducer,
    post: postReducer,
    department: departmentReducer,
    comment: commentReducer,
    like:likeReducer,
  },
});
