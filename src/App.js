import React, { Component } from "react";
import "./App.css";
import Titre from "./Titre";


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hello Ironhackers! </h1>
        <Titre/>
        
      </div>
    );
  }
}

export default App;