/** @jsxImportSource @emotion/react */
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/Main";
import "./App.css";
import { css } from "@emotion/react";

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
        <Route exact pth="/" component={Main} />
      </div>
    </Router>
  );
}

export default App;
