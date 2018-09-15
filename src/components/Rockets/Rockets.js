import React, { Component } from "react";
import axios from "axios";
import "./Rockets.css";

class Rockets extends Component {
  constructor() {
    super();
    this.state = {
      rockets: []
    };
  }

  componentDidMount() {
    axios.get("/api/rockets").then(response => {
      //   console.log(response);
      this.setState({ rockets: response.data });
    });
  }

  handleAdd = rocket => {
    axios.post("/api/favorites", rocket);
  };

  render() {
    console.log("state: ", this.state);
    let myRockets = this.state.rockets.map(rocket => {
      return (
        <div key={rocket.rocketid} className="rocket_card">
          <h3>{rocket.name}</h3>
          <h6>Cost per launch: {rocket.cost_per_launch}</h6>
          <button
            onClick={() => {
              this.handleAdd({ name: rocket.name, id: rocket.rocketid });
            }}
          >
            Add to List
          </button>
        </div>
      );
    });
    return <div className="rocketsList_wrapper">{myRockets}</div>;
  }
}

export default Rockets;
