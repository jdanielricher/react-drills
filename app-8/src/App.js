import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import axios from "axios";

class App extends Component {
  constructor() {
    super();

    this.state = {
      shaakTi: ""
    };
  }

  componentDidMount() {
    axios.get("https://swapi.co/api/people/78").then(response => {
      this.setState({
        shaakTi: response.data
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Name: {this.state.shaakTi.name}</h1>
        <h1>Birth Year: {this.state.shaakTi.birth_year}</h1>
        <h1>Height: {this.state.shaakTi.height}</h1>
        <h1>Eye Color: {this.state.shaakTi.eye_color}</h1>
      </div>
    );
  }
}

export default App;
