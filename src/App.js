import React, { Component } from "react";
import TodoComponent from "./components/TodoComponent";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <TodoComponent />
        </div>
      </div>
    );
  }
}

export default App;
