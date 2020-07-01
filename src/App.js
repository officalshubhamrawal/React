import React, { Component } from "react";
import Main from "./components/MainComp";
import { BrowserRouter } from "react-router-dom";
import "../src/styles.css";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
