/** @jsxImportSource @emotion/react */
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/Main";
import "./App.css";
import Post from "./pages/Post";
import Category from "./pages/Category";
import Navbar from "./components/UI/Navbar";
import Footer from "./components/UI/Footer";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Route exact path="/" component={Main} />
        <Route path="/post" component={Post} />
        <Route path="/category" component={Category} />
        <Route path="/profile" component={Profile} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
