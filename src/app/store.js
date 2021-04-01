import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from "../features/session/sessionSlice";
import userReducer from "../features/user/userSlice";
import postReducer from "../features/post/postSlice";
import departmentReducer from "../features/department/departmentSlice";

export default configureStore({
  reducer: {
    session: sessionReducer,
    user: userReducer,
    post: postReducer,
    department: departmentReducer,
  },
});
