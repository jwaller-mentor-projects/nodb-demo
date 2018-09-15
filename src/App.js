import React, { Component } from "react";
import Rockets from "./components/Rockets/Rockets";
import Favorites from "./components/Favorites/Favorites";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      favorites: []
    };
  }

  componentDidMount() {
    axios.get("/api/favorites").then(response => {
      console.log("mount response: ", response);
      this.setState({ favorites: response.data });
    });
  }

  render() {
    console.log("favs array: ", this.state.favorites);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Rockets />
        <Favorites favorites={this.state.favorites} />
      </div>
    );
  }
}

export default App;
