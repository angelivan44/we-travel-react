/** @jsxImportSource @emotion/react */
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/Main";
import "./App.css";
import Post from "./pages/Post";
import Category from "./pages/Category";
import Navbar from "./components/UI/Navbar";
import Footer from "./components/UI/Footer";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import EditProfile from "./pages/EditProfile";
import NewDepartment from "./pages/NewDepartment";
import NewPost from "./pages/NewPost";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchIndexPost } from "./features/post/postSlice";
import { fetchIndexDepartment } from "./features/department/departmentSlice";
import { fetchIndexUser, fetchShowUser } from "./features/user/userSlice";
import { fetchCurrentUser } from "./features/session/sessionSlice";

function App() {
 const dispatch = useDispatch();

 useEffect(() => {
   dispatch(fetchIndexPost());
   dispatch(fetchIndexDepartment());
   dispatch(fetchIndexUser());
   if(sessionStorage.getItem("token")){
     console.log("aaaaaaaaaaaaaaaaaa")
     dispatch(fetchCurrentUser(sessionStorage.getItem("user_id")))
   }
 }, []);
  return (
    <Router>
      <Navbar />
      <div>
        <Route exact path="/" component={Main} />
        <Route path="/session" component={Login} />
        <Route path="/post/:id" component={Post} />
        <Route path="/category/:id" component={Category} />
        <Route path="/edit" component={EditProfile} />
        <Route path="/profile" component={Profile} />
        <Route path="/newdepartment" component={NewDepartment} />
        <Route path="/newpost" component={NewPost} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
