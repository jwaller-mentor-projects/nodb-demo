import React, { Component } from "react";
import axios from "axios";

class Rockets extends Component {
  constructor() {
    super();
    this.state = {
      rockets: []
    };
  }

  componentDidMount() {
    axios.get("/api/rockets").then(response => {
      console.log(response);
      this.setState({ rockets: response.data });
    });
  }

  render() {
    console.log("state: ", this.state);
    let myRockets = this.state.rockets.map(rocket => {
      return (
        <div key={rocket.rocketid}>
          <h3>{rocket.name}</h3>
          <h6>Cost per launch: {rocket.cost_per_launch}</h6>
        </div>
      );
    });
    return <div>{myRockets}</div>;
  }
}

export default Rockets;
