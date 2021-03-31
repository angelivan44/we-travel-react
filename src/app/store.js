import { configureStore } from "@reduxjs/toolkit";
import sessionReducer  from "../features/session/sessionSlice";
import userReducer from "../features/user/userSlice";

export default configureStore({
  reducer: {
    session : sessionReducer,
    user : userReducer
  }

})