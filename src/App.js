/** @jsxImportSource @emotion/react */
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/Main";
import "./App.css";
import { css } from "@emotion/react";
import Category from "./pages/Category";

function App() {
  return (
    <Router>
      <div
        css={css`
          overflow: auto;
          margin: auto;
          height: 100vh;
        `}
      >
        <Route exact path="/" component={Main} />
        <Route path="/category" component={Category} />
      </div>
    </Router>
  );
}

export default App;
