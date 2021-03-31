import { configureStore } from "@reduxjs/toolkit";
import sessionReducer  from "../features/session/sessionSlice";
import userReducer from "../features/user/userSlice";
import postReducer from "../features/post/postSlice"

export default configureStore({
  reducer: {
    session : sessionReducer,
    user : userReducer,
    post : postReducer,
  }

})