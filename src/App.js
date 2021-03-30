/** @jsxImportSource @emotion/react */
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/Main";
import "./App.css";
import Post from "./pages/Post";
import Category from "./pages/Category";
import Navbar from "./components/UI/Navbar";
import Footer from "./components/UI/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Route path="/post" component ={Post}/>
        <Route exact path="/" component={Main} />
        <Route path="/category" component={Category} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
