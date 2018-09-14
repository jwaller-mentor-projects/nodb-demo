import React, { Component } from "react";
import Rockets from "./components/Rockets/Rockets";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Rockets />
      </div>
    );
  }
}

export default App;