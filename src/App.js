import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    container: 1
  };

  render() {
    const { container } = this.state;
    var color;
    if (container === 1) {
      color = "rgb(255, 0, 0)";
    } else if (container === 2) {
      color = "rgb(255, 127, 0)";
    } else if (container === 3) {
      color = "rgb(255, 255, 0)";
    } else if (container === 4) {
      color = "rgb(0, 255, 0)";
    } else if (container === 5) {
      color = "rgb(0, 0, 255)";
    } else if (container === 6) {
      color = "rgb(74, 0, 130)";
    } else if (container === 7) {
      color = "rgb(148, 0, 211)";
    }

    return (
      <div
        className="App"
        style={{ backgroundColor: color }}
      >
        <div
          className="bg-section"
          onMouseEnter={() => this.setState({ container: 1 })}
          style={{}}
        />
        <div
          className="bg-section"
          onMouseEnter={() => this.setState({ container: 2 })}
        />
        <div
          className="bg-section"
          onMouseEnter={() => this.setState({ container: 3 })}
        />
        <div
          className="bg-section"
          onMouseEnter={() => this.setState({ container: 4 })}
        />
        <div
          className="bg-section"
          onMouseEnter={() => this.setState({ container: 5 })}
        />
        <div
          className="bg-section"
          onMouseEnter={() => this.setState({ container: 6 })}
        />
        <div
          className="bg-section"
          onMouseEnter={() => this.setState({ container: 7 })}
        />
      </div>
    );
  }
}

export default App;
