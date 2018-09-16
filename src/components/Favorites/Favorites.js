import React, { Component } from "react";
import axios from "axios";
import "./Favorites.css";

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ""
    };
  }

  componentDidMount() {
    // console.log("Hello from favorites");
    axios.get("/api/favorites").then(response => {
      console.log("mount response: ", response);
      this.setState({ favorites: response.data });
    });
  }

  render(props) {
    console.log(this.props);
    console.log(this.state);
    // console.log("favs array: ", this.state.favorites);
    let myFavorites = this.props.favorites.map((rocket, index) => {
      return (
        <div key={index} className="favorites_card">
          <p>{rocket.name}</p>
          <input
            placeholder="Enter New Name"
            onChange={e => this.props.handleChange(e)}
          />
          <button
            onClick={() => {
              this.props.deleteHandler(rocket.id);
            }}
          >
            delete
          </button>
          <button
            onClick={() => {
              this.props.editHandler(rocket.id);
            }}
          >
            Edit
          </button>
        </div>
      );
    });
    return (
      <div>
        <h1>Favorites List</h1>
        {myFavorites}
      </div>
    );
  }
}

export default Favorites;
